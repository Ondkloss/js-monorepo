import { IconProps } from '@chakra-ui/react';
import {
  Bitcoin,
  Ethereum,
  Chainlink,
  Solana,
  Avax,
  Aave,
  Uniswap,
  Matic,
  Silver,
  Gold,
  Euro,
  Ape,
  Dydx,
  BnB,
  Doge,
  Optimism,
  Atom,
  Fantom,
  Near,
  Flow,
  Axie,
  Aud,
  Gbp,
  Arb,
} from '../Icons';

type CurrencyKey =
  | 'AAVE'
  | 'sETH'
  | 'APE'
  | 'ATOM'
  | 'AUD'
  | 'AVAX'
  | 'AXS'
  | 'BNB'
  | 'DOGE'
  | 'DYDX'
  | 'EUR'
  | 'FLOW'
  | 'FTM'
  | 'GBP'
  | 'LINK'
  | 'MATIC'
  | 'NEAR'
  | 'OP'
  | 'SOL'
  | 'UNI'
  | 'XAG'
  | 'XAU'
  | 'sBTC'
  | string; //TODO Fix

const PerpIcon = (currencyKey: CurrencyKey, props: IconProps) => {
  switch (currencyKey) {
    case 'AAVE':
      return <Aave {...props} />;
    case 'APE':
      return <Ape {...props} />;
    case 'ATOM':
      return <Atom {...props} />;
    case 'AUD':
      return <Aud {...props} />;
    case 'AVAX':
      return <Avax {...props} />;
    case 'AXS':
      return <Axie {...props} />;
    case 'BNB':
      return <BnB {...props} />;
    case 'DOGE':
      return <Doge {...props} />;
    case 'DYDX':
      return <Dydx {...props} />;
    case 'EUR':
      return <Euro {...props} />;
    case 'FLOW':
      return <Flow {...props} />;
    case 'FTM':
      return <Fantom {...props} />;
    case 'GBP':
      return <Gbp {...props} />;
    case 'LINK':
      return <Chainlink {...props} />;
    case 'MATIC':
      return <Matic {...props} />;
    case 'NEAR':
      return <Near {...props} />;
    case 'OP':
      return <Optimism {...props} />;
    case 'SOL':
      return <Solana {...props} />;
    case 'UNI':
      return <Uniswap {...props} />;
    case 'XAG':
      return <Silver {...props} />;
    case 'XAU':
      return <Gold {...props} />;
    case 'sBTC':
      return <Bitcoin {...props} />;
    case 'sETH':
      return <Ethereum {...props} />;
    case 'ARB':
      return <Arb {...props} />;

    default:
      return null;
  }
};

interface CurrencyIconProps extends IconProps {
  currencyKey: CurrencyKey;
}

export const CurrencyIcon = ({ currencyKey, ...props }: CurrencyIconProps) => {
  return PerpIcon(currencyKey, props);
};
