import { useQuery, UseQueryOptions } from 'react-query';
import Wei, { wei } from '@synthetixio/wei';
import { QueryContext } from '../../context';
import { utils } from 'ethers';
import {
	useGetLoans,
	useGetShorts,
	useGetSynths,
	useGetWrappers,
} from '../../../generated/mainSubgraphQueries';
import { DEFAULT_SUBGRAPH_ENDPOINTS } from '../../constants';
import { useEffect, useState } from 'react';

interface DebtOnL2 {
	hasNegativeSkew: boolean;
	totalSupply: Wei;
	symbol: string;
}

interface DebtData {
	wrapperData: {
		currencyKey: string;
		amount: Wei;
		maxAmount: Wei;
	}[];
	synthsData: {
		totalSupply: Wei;
		symbol: string;
	}[];
	shortsData: Record<string, Wei>;
	loansData: Record<string, Wei>;
}

const useGetDebtL2 = (ctx: QueryContext, options?: UseQueryOptions<DebtOnL2[]>) => {
	const [debtData, setDebtData] = useState<DebtData | null>(null);
	const wrappers = useGetWrappers(
		DEFAULT_SUBGRAPH_ENDPOINTS[10].subgraph,
		{
			where: {
				maxAmount_gt: 0,
			},
			first: 1000,
		},
		{
			currencyKey: true,
			amount: true,
			maxAmount: true,
		},
		{
			queryKey: ['L2', 'wrappers'],
		}
	);
	const synths = useGetSynths(
		DEFAULT_SUBGRAPH_ENDPOINTS[10].subgraph,
		{ first: 1000, where: { symbol_not: 'SNX' } },
		{
			totalSupply: true,
			symbol: true,
		},

		{
			queryKey: ['L2', 'synths'],
		}
	);
	const shorts = useGetShorts(
		DEFAULT_SUBGRAPH_ENDPOINTS[10].subgraph,
		{
			where: { isOpen: true },
			first: 1000,
			orderBy: 'synthBorrowedAmount',
			orderDirection: 'desc',
		},
		{
			synthBorrowed: true,
			synthBorrowedAmount: true,
			collateralLocked: true,
			collateralLockedAmount: true,
		},
		{
			queryKey: ['L2', 'shorts'],
		}
	);

	const loans = useGetLoans(
		DEFAULT_SUBGRAPH_ENDPOINTS[10].subgraph,
		{ where: { isOpen: true }, first: 1000, orderDirection: 'desc', orderBy: 'amount' },
		{
			collateralMinted: true,
			amount: true,
			collateralAmount: true,
			currency: true,
		},
		{
			queryKey: ['L2', 'loans'],
		}
	);

	useEffect(() => {
		if (wrappers.isSuccess && synths.isSuccess && loans.isSuccess && shorts.isSuccess) {
			const wrapperData = wrappers.isSuccess && wrappers.data;
			const synthsData = synths.isSuccess && synths.data;
			const shortsData =
				shorts.isSuccess &&
				shorts.data
					.map((short) => {
						if (short.synthBorrowed.length !== 66 && short.synthBorrowed) {
							short.synthBorrowed = short.synthBorrowed.padEnd(66, '0');
						}
						if (short.collateralLocked.length !== 66 && short.collateralLocked) {
							short.collateralLocked = short.collateralLocked.padEnd(66, '0');
						}
						return {
							...short,
							synthBorrowed: utils.parseBytes32String(short.synthBorrowed),
							collateralLocked: utils.parseBytes32String(short.collateralLocked),
						};
					})
					.reduce((acc, short) => {
						acc[short.synthBorrowed] = (acc[short.synthBorrowed] || wei(0)).add(
							short.synthBorrowedAmount
						);
						return acc;
					}, {} as DebtData['shortsData']);
			const loansData =
				loans.isSuccess &&
				loans.data.reduce((acc, loan) => {
					acc[loan.currency] = (acc[loan.currency] || wei(0)).add(loan.amount);
					return acc;
				}, {} as DebtData['loansData']);
			setDebtData({ wrapperData, synthsData, shortsData, loansData });
		}
	}, [wrappers.isSuccess, synths.isSuccess, loans.isSuccess, shorts.isSuccess]);

	return useQuery<DebtOnL2[]>(
		['debt', 'data', 'L2', ctx.networkId],
		() => {
			const synthDataWithSkew = debtData!.synthsData.map((synth) => {
				for (const wrapper of debtData!.wrapperData) {
					if (synth.symbol === wrapper.currencyKey) {
						return {
							...synth,
							hasNegativeSkew: wei(wrapper.amount).sub(synth.totalSupply).gt(0),
							totalSupply: synth.totalSupply.sub(wrapper.amount),
						};
					}
					return { ...synth, hasNegativeSkew: false };
				}
				return {
					...synth,
					hasNegativeSkew: false,
				};
			});

			const synthDataWithShorts = synthDataWithSkew.map((synth) => {
				if (synth.symbol === 'sUSD') return synth;
				return {
					...synth,
					totalSupply: synth.totalSupply.sub(debtData!.shortsData[synth.symbol] as Wei),
				};
			});

			const synthDataWithLoans = synthDataWithShorts.map((synth) => {
				if (!(synth.symbol in debtData!.loansData)) return synth;
				return {
					...synth,
					totalSupply: synth.totalSupply?.sub(debtData!.loansData[synth.symbol] as Wei),
				};
			});

			return synthDataWithLoans;
		},
		{
			enabled:
				ctx.networkId === 10 &&
				!!debtData?.loansData &&
				!!debtData?.shortsData &&
				!!debtData?.synthsData &&
				!!debtData?.wrapperData,
			...options,
		}
	);
};

export default useGetDebtL2;
