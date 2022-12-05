// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'Liquidator';
export const address = '0x61C7BC9b335e083c30C8a81b93575c361cdE93E2';
export const source = 'Liquidator';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event AccountFlaggedForLiquidation(address indexed account, uint256 deadline)',
  'event AccountRemovedFromLiquidation(address indexed account, uint256 time)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function LIQUIDATION_CALLER() view returns (bytes32)',
  'function LIQUIDATION_DEADLINE() view returns (bytes32)',
  'function acceptOwnership()',
  'function calculateAmountToFixCollateral(uint256 debtBalance, uint256 collateral, uint256 penalty) view returns (uint256)',
  'function checkAndRemoveAccountInLiquidation(address account)',
  'function flagAccountForLiquidation(address account)',
  'function flagReward() view returns (uint256)',
  'function getLiquidationCallerForAccount(address account) view returns (address)',
  'function getLiquidationDeadlineForAccount(address account) view returns (uint256)',
  'function isLiquidationDeadlinePassed(address account) view returns (bool)',
  'function isLiquidationOpen(address account, bool isSelfLiquidation) view returns (bool)',
  'function isResolverCached() view returns (bool)',
  'function issuanceRatio() view returns (uint256)',
  'function liquidateReward() view returns (uint256)',
  'function liquidationAmounts(address account, bool isSelfLiquidation) view returns (uint256 totalRedeemed, uint256 debtToRemove, uint256 escrowToLiquidate, uint256 initialDebtBalance)',
  'function liquidationCollateralRatio() view returns (uint256)',
  'function liquidationDelay() view returns (uint256)',
  'function liquidationEscrowDuration() view returns (uint256)',
  'function liquidationPenalty() view returns (uint256)',
  'function liquidationRatio() view returns (uint256)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function rebuildCache()',
  'function removeAccountInLiquidation(address account)',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function selfLiquidationPenalty() view returns (uint256)',
];
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from './common';

export interface LiquidatorInterface extends utils.Interface {
  functions: {
    'CONTRACT_NAME()': FunctionFragment;
    'LIQUIDATION_CALLER()': FunctionFragment;
    'LIQUIDATION_DEADLINE()': FunctionFragment;
    'acceptOwnership()': FunctionFragment;
    'calculateAmountToFixCollateral(uint256,uint256,uint256)': FunctionFragment;
    'checkAndRemoveAccountInLiquidation(address)': FunctionFragment;
    'flagAccountForLiquidation(address)': FunctionFragment;
    'flagReward()': FunctionFragment;
    'getLiquidationCallerForAccount(address)': FunctionFragment;
    'getLiquidationDeadlineForAccount(address)': FunctionFragment;
    'isLiquidationDeadlinePassed(address)': FunctionFragment;
    'isLiquidationOpen(address,bool)': FunctionFragment;
    'isResolverCached()': FunctionFragment;
    'issuanceRatio()': FunctionFragment;
    'liquidateReward()': FunctionFragment;
    'liquidationAmounts(address,bool)': FunctionFragment;
    'liquidationCollateralRatio()': FunctionFragment;
    'liquidationDelay()': FunctionFragment;
    'liquidationEscrowDuration()': FunctionFragment;
    'liquidationPenalty()': FunctionFragment;
    'liquidationRatio()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'rebuildCache()': FunctionFragment;
    'removeAccountInLiquidation(address)': FunctionFragment;
    'resolver()': FunctionFragment;
    'resolverAddressesRequired()': FunctionFragment;
    'selfLiquidationPenalty()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'CONTRACT_NAME'
      | 'LIQUIDATION_CALLER'
      | 'LIQUIDATION_DEADLINE'
      | 'acceptOwnership'
      | 'calculateAmountToFixCollateral'
      | 'checkAndRemoveAccountInLiquidation'
      | 'flagAccountForLiquidation'
      | 'flagReward'
      | 'getLiquidationCallerForAccount'
      | 'getLiquidationDeadlineForAccount'
      | 'isLiquidationDeadlinePassed'
      | 'isLiquidationOpen'
      | 'isResolverCached'
      | 'issuanceRatio'
      | 'liquidateReward'
      | 'liquidationAmounts'
      | 'liquidationCollateralRatio'
      | 'liquidationDelay'
      | 'liquidationEscrowDuration'
      | 'liquidationPenalty'
      | 'liquidationRatio'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'rebuildCache'
      | 'removeAccountInLiquidation'
      | 'resolver'
      | 'resolverAddressesRequired'
      | 'selfLiquidationPenalty'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'CONTRACT_NAME', values?: undefined): string;
  encodeFunctionData(functionFragment: 'LIQUIDATION_CALLER', values?: undefined): string;
  encodeFunctionData(functionFragment: 'LIQUIDATION_DEADLINE', values?: undefined): string;
  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'calculateAmountToFixCollateral',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'checkAndRemoveAccountInLiquidation',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'flagAccountForLiquidation',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'flagReward', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getLiquidationCallerForAccount',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'getLiquidationDeadlineForAccount',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'isLiquidationDeadlinePassed',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'isLiquidationOpen',
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(functionFragment: 'isResolverCached', values?: undefined): string;
  encodeFunctionData(functionFragment: 'issuanceRatio', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidateReward', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'liquidationAmounts',
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(functionFragment: 'liquidationCollateralRatio', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidationDelay', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidationEscrowDuration', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidationPenalty', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidationRatio', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rebuildCache', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'removeAccountInLiquidation',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'resolver', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolverAddressesRequired', values?: undefined): string;
  encodeFunctionData(functionFragment: 'selfLiquidationPenalty', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'CONTRACT_NAME', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'LIQUIDATION_CALLER', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'LIQUIDATION_DEADLINE', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'calculateAmountToFixCollateral', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'checkAndRemoveAccountInLiquidation',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'flagAccountForLiquidation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'flagReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getLiquidationCallerForAccount', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getLiquidationDeadlineForAccount',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'isLiquidationDeadlinePassed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isLiquidationOpen', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isResolverCached', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'issuanceRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidateReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidationAmounts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidationCollateralRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidationDelay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidationEscrowDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidationPenalty', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidationRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rebuildCache', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'removeAccountInLiquidation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolver', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolverAddressesRequired', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'selfLiquidationPenalty', data: BytesLike): Result;

  events: {
    'AccountFlaggedForLiquidation(address,uint256)': EventFragment;
    'AccountRemovedFromLiquidation(address,uint256)': EventFragment;
    'CacheUpdated(bytes32,address)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AccountFlaggedForLiquidation'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AccountRemovedFromLiquidation'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CacheUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
}

export interface AccountFlaggedForLiquidationEventObject {
  account: string;
  deadline: BigNumber;
}
export type AccountFlaggedForLiquidationEvent = TypedEvent<
  [string, BigNumber],
  AccountFlaggedForLiquidationEventObject
>;

export type AccountFlaggedForLiquidationEventFilter =
  TypedEventFilter<AccountFlaggedForLiquidationEvent>;

export interface AccountRemovedFromLiquidationEventObject {
  account: string;
  time: BigNumber;
}
export type AccountRemovedFromLiquidationEvent = TypedEvent<
  [string, BigNumber],
  AccountRemovedFromLiquidationEventObject
>;

export type AccountRemovedFromLiquidationEventFilter =
  TypedEventFilter<AccountRemovedFromLiquidationEvent>;

export interface CacheUpdatedEventObject {
  name: string;
  destination: string;
}
export type CacheUpdatedEvent = TypedEvent<[string, string], CacheUpdatedEventObject>;

export type CacheUpdatedEventFilter = TypedEventFilter<CacheUpdatedEvent>;

export interface OwnerChangedEventObject {
  oldOwner: string;
  newOwner: string;
}
export type OwnerChangedEvent = TypedEvent<[string, string], OwnerChangedEventObject>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export interface OwnerNominatedEventObject {
  newOwner: string;
}
export type OwnerNominatedEvent = TypedEvent<[string], OwnerNominatedEventObject>;

export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;

export interface Liquidator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LiquidatorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<[string]>;

    LIQUIDATION_CALLER(overrides?: CallOverrides): Promise<[string]>;

    LIQUIDATION_DEADLINE(overrides?: CallOverrides): Promise<[string]>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    calculateAmountToFixCollateral(
      debtBalance: PromiseOrValue<BigNumberish>,
      collateral: PromiseOrValue<BigNumberish>,
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    checkAndRemoveAccountInLiquidation(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    flagAccountForLiquidation(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    flagReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    getLiquidationCallerForAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getLiquidationDeadlineForAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isLiquidationDeadlinePassed(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isLiquidationOpen(
      account: PromiseOrValue<string>,
      isSelfLiquidation: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isResolverCached(overrides?: CallOverrides): Promise<[boolean]>;

    issuanceRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidateReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidationAmounts(
      account: PromiseOrValue<string>,
      isSelfLiquidation: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalRedeemed: BigNumber;
        debtToRemove: BigNumber;
        escrowToLiquidate: BigNumber;
        initialDebtBalance: BigNumber;
      }
    >;

    liquidationCollateralRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidationDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidationEscrowDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidationPenalty(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidationRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    removeAccountInLiquidation(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    resolver(overrides?: CallOverrides): Promise<[string]>;

    resolverAddressesRequired(
      overrides?: CallOverrides
    ): Promise<[string[]] & { addresses: string[] }>;

    selfLiquidationPenalty(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

  LIQUIDATION_CALLER(overrides?: CallOverrides): Promise<string>;

  LIQUIDATION_DEADLINE(overrides?: CallOverrides): Promise<string>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  calculateAmountToFixCollateral(
    debtBalance: PromiseOrValue<BigNumberish>,
    collateral: PromiseOrValue<BigNumberish>,
    penalty: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  checkAndRemoveAccountInLiquidation(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  flagAccountForLiquidation(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  flagReward(overrides?: CallOverrides): Promise<BigNumber>;

  getLiquidationCallerForAccount(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  getLiquidationDeadlineForAccount(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isLiquidationDeadlinePassed(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isLiquidationOpen(
    account: PromiseOrValue<string>,
    isSelfLiquidation: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isResolverCached(overrides?: CallOverrides): Promise<boolean>;

  issuanceRatio(overrides?: CallOverrides): Promise<BigNumber>;

  liquidateReward(overrides?: CallOverrides): Promise<BigNumber>;

  liquidationAmounts(
    account: PromiseOrValue<string>,
    isSelfLiquidation: PromiseOrValue<boolean>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      totalRedeemed: BigNumber;
      debtToRemove: BigNumber;
      escrowToLiquidate: BigNumber;
      initialDebtBalance: BigNumber;
    }
  >;

  liquidationCollateralRatio(overrides?: CallOverrides): Promise<BigNumber>;

  liquidationDelay(overrides?: CallOverrides): Promise<BigNumber>;

  liquidationEscrowDuration(overrides?: CallOverrides): Promise<BigNumber>;

  liquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

  liquidationRatio(overrides?: CallOverrides): Promise<BigNumber>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  rebuildCache(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  removeAccountInLiquidation(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  resolver(overrides?: CallOverrides): Promise<string>;

  resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

  selfLiquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

    LIQUIDATION_CALLER(overrides?: CallOverrides): Promise<string>;

    LIQUIDATION_DEADLINE(overrides?: CallOverrides): Promise<string>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    calculateAmountToFixCollateral(
      debtBalance: PromiseOrValue<BigNumberish>,
      collateral: PromiseOrValue<BigNumberish>,
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkAndRemoveAccountInLiquidation(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    flagAccountForLiquidation(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    flagReward(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidationCallerForAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    getLiquidationDeadlineForAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isLiquidationDeadlinePassed(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isLiquidationOpen(
      account: PromiseOrValue<string>,
      isSelfLiquidation: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isResolverCached(overrides?: CallOverrides): Promise<boolean>;

    issuanceRatio(overrides?: CallOverrides): Promise<BigNumber>;

    liquidateReward(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationAmounts(
      account: PromiseOrValue<string>,
      isSelfLiquidation: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalRedeemed: BigNumber;
        debtToRemove: BigNumber;
        escrowToLiquidate: BigNumber;
        initialDebtBalance: BigNumber;
      }
    >;

    liquidationCollateralRatio(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationDelay(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationEscrowDuration(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationRatio(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    rebuildCache(overrides?: CallOverrides): Promise<void>;

    removeAccountInLiquidation(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    resolver(overrides?: CallOverrides): Promise<string>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

    selfLiquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    'AccountFlaggedForLiquidation(address,uint256)'(
      account?: PromiseOrValue<string> | null,
      deadline?: null
    ): AccountFlaggedForLiquidationEventFilter;
    AccountFlaggedForLiquidation(
      account?: PromiseOrValue<string> | null,
      deadline?: null
    ): AccountFlaggedForLiquidationEventFilter;

    'AccountRemovedFromLiquidation(address,uint256)'(
      account?: PromiseOrValue<string> | null,
      time?: null
    ): AccountRemovedFromLiquidationEventFilter;
    AccountRemovedFromLiquidation(
      account?: PromiseOrValue<string> | null,
      time?: null
    ): AccountRemovedFromLiquidationEventFilter;

    'CacheUpdated(bytes32,address)'(name?: null, destination?: null): CacheUpdatedEventFilter;
    CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
  };

  estimateGas: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    LIQUIDATION_CALLER(overrides?: CallOverrides): Promise<BigNumber>;

    LIQUIDATION_DEADLINE(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    calculateAmountToFixCollateral(
      debtBalance: PromiseOrValue<BigNumberish>,
      collateral: PromiseOrValue<BigNumberish>,
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkAndRemoveAccountInLiquidation(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    flagAccountForLiquidation(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    flagReward(overrides?: CallOverrides): Promise<BigNumber>;

    getLiquidationCallerForAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLiquidationDeadlineForAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isLiquidationDeadlinePassed(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isLiquidationOpen(
      account: PromiseOrValue<string>,
      isSelfLiquidation: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;

    issuanceRatio(overrides?: CallOverrides): Promise<BigNumber>;

    liquidateReward(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationAmounts(
      account: PromiseOrValue<string>,
      isSelfLiquidation: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidationCollateralRatio(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationDelay(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationEscrowDuration(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationRatio(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    rebuildCache(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    removeAccountInLiquidation(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    resolver(overrides?: CallOverrides): Promise<BigNumber>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;

    selfLiquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LIQUIDATION_CALLER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LIQUIDATION_DEADLINE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    calculateAmountToFixCollateral(
      debtBalance: PromiseOrValue<BigNumberish>,
      collateral: PromiseOrValue<BigNumberish>,
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkAndRemoveAccountInLiquidation(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    flagAccountForLiquidation(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    flagReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLiquidationCallerForAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLiquidationDeadlineForAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isLiquidationDeadlinePassed(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isLiquidationOpen(
      account: PromiseOrValue<string>,
      isSelfLiquidation: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isResolverCached(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    issuanceRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidateReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationAmounts(
      account: PromiseOrValue<string>,
      isSelfLiquidation: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidationCollateralRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationEscrowDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationPenalty(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    removeAccountInLiquidation(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    selfLiquidationPenalty(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}