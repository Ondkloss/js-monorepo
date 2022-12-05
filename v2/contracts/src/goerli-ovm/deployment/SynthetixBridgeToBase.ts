// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'SynthetixBridgeToBase';
export const address = '0xD2b3F0Ea40dB68088415412b0043F37B3088836D';
export const source = 'SynthetixBridgeToBase';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event DepositFinalized(address indexed _to, uint256 _amount)',
  'event FeePeriodCloseFinalized(uint256 snxBackedAmount, uint256 totalDebtShares)',
  'event FinalizeSynthTransfer(bytes32 indexed currencyKey, address indexed destination, uint256 amount)',
  'event ImportedVestingEntries(address indexed account, uint256 escrowedAmount, tuple(uint64 endTime, uint256 escrowAmount)[] vestingEntries)',
  'event InitiateSynthTransfer(bytes32 indexed currencyKey, address indexed destination, uint256 amount)',
  'event InitiationResumed()',
  'event InitiationSuspended()',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event RewardDepositFinalized(address from, uint256 amount)',
  'event WithdrawalInitiated(address indexed _from, address _to, uint256 _amount)',
  'function CONTRACT_NAME() pure returns (bytes32)',
  'function acceptOwnership()',
  'function finalizeDeposit(address to, uint256 amount)',
  'function finalizeEscrowMigration(address account, uint256 escrowedAmount, tuple(uint64 endTime, uint256 escrowAmount)[] vestingEntries)',
  'function finalizeFeePeriodClose(uint256 snxBackedAmount, uint256 totalDebtShares)',
  'function finalizeRewardDeposit(address from, uint256 amount)',
  'function finalizeSynthTransfer(bytes32 currencyKey, address destination, uint256 amount)',
  'function initiateSynthTransfer(bytes32 currencyKey, address destination, uint256 amount)',
  'function initiationActive() view returns (bool)',
  'function isResolverCached() view returns (bool)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function rebuildCache()',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function resumeInitiation()',
  'function suspendInitiation()',
  'function synthTransferReceived() view returns (uint256)',
  'function synthTransferSent() view returns (uint256)',
  'function withdraw(uint256 amount)',
  'function withdrawTo(address to, uint256 amount)',
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

export declare namespace VestingEntries {
  export type VestingEntryStruct = {
    endTime: PromiseOrValue<BigNumberish>;
    escrowAmount: PromiseOrValue<BigNumberish>;
  };

  export type VestingEntryStructOutput = [BigNumber, BigNumber] & {
    endTime: BigNumber;
    escrowAmount: BigNumber;
  };
}

export interface SynthetixBridgeToBaseInterface extends utils.Interface {
  functions: {
    'CONTRACT_NAME()': FunctionFragment;
    'acceptOwnership()': FunctionFragment;
    'finalizeDeposit(address,uint256)': FunctionFragment;
    'finalizeEscrowMigration(address,uint256,(uint64,uint256)[])': FunctionFragment;
    'finalizeFeePeriodClose(uint256,uint256)': FunctionFragment;
    'finalizeRewardDeposit(address,uint256)': FunctionFragment;
    'finalizeSynthTransfer(bytes32,address,uint256)': FunctionFragment;
    'initiateSynthTransfer(bytes32,address,uint256)': FunctionFragment;
    'initiationActive()': FunctionFragment;
    'isResolverCached()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'rebuildCache()': FunctionFragment;
    'resolver()': FunctionFragment;
    'resolverAddressesRequired()': FunctionFragment;
    'resumeInitiation()': FunctionFragment;
    'suspendInitiation()': FunctionFragment;
    'synthTransferReceived()': FunctionFragment;
    'synthTransferSent()': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
    'withdrawTo(address,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'CONTRACT_NAME'
      | 'acceptOwnership'
      | 'finalizeDeposit'
      | 'finalizeEscrowMigration'
      | 'finalizeFeePeriodClose'
      | 'finalizeRewardDeposit'
      | 'finalizeSynthTransfer'
      | 'initiateSynthTransfer'
      | 'initiationActive'
      | 'isResolverCached'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'rebuildCache'
      | 'resolver'
      | 'resolverAddressesRequired'
      | 'resumeInitiation'
      | 'suspendInitiation'
      | 'synthTransferReceived'
      | 'synthTransferSent'
      | 'withdraw'
      | 'withdrawTo'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'CONTRACT_NAME', values?: undefined): string;
  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'finalizeDeposit',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'finalizeEscrowMigration',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      VestingEntries.VestingEntryStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: 'finalizeFeePeriodClose',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'finalizeRewardDeposit',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'finalizeSynthTransfer',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'initiateSynthTransfer',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'initiationActive', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isResolverCached', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rebuildCache', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolver', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolverAddressesRequired', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resumeInitiation', values?: undefined): string;
  encodeFunctionData(functionFragment: 'suspendInitiation', values?: undefined): string;
  encodeFunctionData(functionFragment: 'synthTransferReceived', values?: undefined): string;
  encodeFunctionData(functionFragment: 'synthTransferSent', values?: undefined): string;
  encodeFunctionData(functionFragment: 'withdraw', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'withdrawTo',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: 'CONTRACT_NAME', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'finalizeDeposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'finalizeEscrowMigration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'finalizeFeePeriodClose', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'finalizeRewardDeposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'finalizeSynthTransfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initiateSynthTransfer', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initiationActive', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isResolverCached', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rebuildCache', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolver', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolverAddressesRequired', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resumeInitiation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'suspendInitiation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'synthTransferReceived', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'synthTransferSent', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdrawTo', data: BytesLike): Result;

  events: {
    'CacheUpdated(bytes32,address)': EventFragment;
    'DepositFinalized(address,uint256)': EventFragment;
    'FeePeriodCloseFinalized(uint256,uint256)': EventFragment;
    'FinalizeSynthTransfer(bytes32,address,uint256)': EventFragment;
    'ImportedVestingEntries(address,uint256,tuple[])': EventFragment;
    'InitiateSynthTransfer(bytes32,address,uint256)': EventFragment;
    'InitiationResumed()': EventFragment;
    'InitiationSuspended()': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
    'RewardDepositFinalized(address,uint256)': EventFragment;
    'WithdrawalInitiated(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CacheUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DepositFinalized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'FeePeriodCloseFinalized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'FinalizeSynthTransfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ImportedVestingEntries'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'InitiateSynthTransfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'InitiationResumed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'InitiationSuspended'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardDepositFinalized'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'WithdrawalInitiated'): EventFragment;
}

export interface CacheUpdatedEventObject {
  name: string;
  destination: string;
}
export type CacheUpdatedEvent = TypedEvent<[string, string], CacheUpdatedEventObject>;

export type CacheUpdatedEventFilter = TypedEventFilter<CacheUpdatedEvent>;

export interface DepositFinalizedEventObject {
  _to: string;
  _amount: BigNumber;
}
export type DepositFinalizedEvent = TypedEvent<[string, BigNumber], DepositFinalizedEventObject>;

export type DepositFinalizedEventFilter = TypedEventFilter<DepositFinalizedEvent>;

export interface FeePeriodCloseFinalizedEventObject {
  snxBackedAmount: BigNumber;
  totalDebtShares: BigNumber;
}
export type FeePeriodCloseFinalizedEvent = TypedEvent<
  [BigNumber, BigNumber],
  FeePeriodCloseFinalizedEventObject
>;

export type FeePeriodCloseFinalizedEventFilter = TypedEventFilter<FeePeriodCloseFinalizedEvent>;

export interface FinalizeSynthTransferEventObject {
  currencyKey: string;
  destination: string;
  amount: BigNumber;
}
export type FinalizeSynthTransferEvent = TypedEvent<
  [string, string, BigNumber],
  FinalizeSynthTransferEventObject
>;

export type FinalizeSynthTransferEventFilter = TypedEventFilter<FinalizeSynthTransferEvent>;

export interface ImportedVestingEntriesEventObject {
  account: string;
  escrowedAmount: BigNumber;
  vestingEntries: VestingEntries.VestingEntryStructOutput[];
}
export type ImportedVestingEntriesEvent = TypedEvent<
  [string, BigNumber, VestingEntries.VestingEntryStructOutput[]],
  ImportedVestingEntriesEventObject
>;

export type ImportedVestingEntriesEventFilter = TypedEventFilter<ImportedVestingEntriesEvent>;

export interface InitiateSynthTransferEventObject {
  currencyKey: string;
  destination: string;
  amount: BigNumber;
}
export type InitiateSynthTransferEvent = TypedEvent<
  [string, string, BigNumber],
  InitiateSynthTransferEventObject
>;

export type InitiateSynthTransferEventFilter = TypedEventFilter<InitiateSynthTransferEvent>;

export interface InitiationResumedEventObject {}
export type InitiationResumedEvent = TypedEvent<[], InitiationResumedEventObject>;

export type InitiationResumedEventFilter = TypedEventFilter<InitiationResumedEvent>;

export interface InitiationSuspendedEventObject {}
export type InitiationSuspendedEvent = TypedEvent<[], InitiationSuspendedEventObject>;

export type InitiationSuspendedEventFilter = TypedEventFilter<InitiationSuspendedEvent>;

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

export interface RewardDepositFinalizedEventObject {
  from: string;
  amount: BigNumber;
}
export type RewardDepositFinalizedEvent = TypedEvent<
  [string, BigNumber],
  RewardDepositFinalizedEventObject
>;

export type RewardDepositFinalizedEventFilter = TypedEventFilter<RewardDepositFinalizedEvent>;

export interface WithdrawalInitiatedEventObject {
  _from: string;
  _to: string;
  _amount: BigNumber;
}
export type WithdrawalInitiatedEvent = TypedEvent<
  [string, string, BigNumber],
  WithdrawalInitiatedEventObject
>;

export type WithdrawalInitiatedEventFilter = TypedEventFilter<WithdrawalInitiatedEvent>;

export interface SynthetixBridgeToBase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SynthetixBridgeToBaseInterface;

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

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalizeDeposit(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalizeEscrowMigration(
      account: PromiseOrValue<string>,
      escrowedAmount: PromiseOrValue<BigNumberish>,
      vestingEntries: VestingEntries.VestingEntryStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalizeFeePeriodClose(
      snxBackedAmount: PromiseOrValue<BigNumberish>,
      totalDebtShares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalizeRewardDeposit(
      from: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    finalizeSynthTransfer(
      currencyKey: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initiateSynthTransfer(
      currencyKey: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initiationActive(overrides?: CallOverrides): Promise<[boolean]>;

    isResolverCached(overrides?: CallOverrides): Promise<[boolean]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    resolver(overrides?: CallOverrides): Promise<[string]>;

    resolverAddressesRequired(
      overrides?: CallOverrides
    ): Promise<[string[]] & { addresses: string[] }>;

    resumeInitiation(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    suspendInitiation(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    synthTransferReceived(overrides?: CallOverrides): Promise<[BigNumber]>;

    synthTransferSent(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawTo(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalizeDeposit(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalizeEscrowMigration(
    account: PromiseOrValue<string>,
    escrowedAmount: PromiseOrValue<BigNumberish>,
    vestingEntries: VestingEntries.VestingEntryStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalizeFeePeriodClose(
    snxBackedAmount: PromiseOrValue<BigNumberish>,
    totalDebtShares: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalizeRewardDeposit(
    from: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  finalizeSynthTransfer(
    currencyKey: PromiseOrValue<BytesLike>,
    destination: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initiateSynthTransfer(
    currencyKey: PromiseOrValue<BytesLike>,
    destination: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initiationActive(overrides?: CallOverrides): Promise<boolean>;

  isResolverCached(overrides?: CallOverrides): Promise<boolean>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  rebuildCache(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  resolver(overrides?: CallOverrides): Promise<string>;

  resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

  resumeInitiation(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  suspendInitiation(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  synthTransferReceived(overrides?: CallOverrides): Promise<BigNumber>;

  synthTransferSent(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawTo(
    to: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    finalizeDeposit(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    finalizeEscrowMigration(
      account: PromiseOrValue<string>,
      escrowedAmount: PromiseOrValue<BigNumberish>,
      vestingEntries: VestingEntries.VestingEntryStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    finalizeFeePeriodClose(
      snxBackedAmount: PromiseOrValue<BigNumberish>,
      totalDebtShares: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    finalizeRewardDeposit(
      from: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    finalizeSynthTransfer(
      currencyKey: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    initiateSynthTransfer(
      currencyKey: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    initiationActive(overrides?: CallOverrides): Promise<boolean>;

    isResolverCached(overrides?: CallOverrides): Promise<boolean>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    rebuildCache(overrides?: CallOverrides): Promise<void>;

    resolver(overrides?: CallOverrides): Promise<string>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

    resumeInitiation(overrides?: CallOverrides): Promise<void>;

    suspendInitiation(overrides?: CallOverrides): Promise<void>;

    synthTransferReceived(overrides?: CallOverrides): Promise<BigNumber>;

    synthTransferSent(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(amount: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    withdrawTo(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'CacheUpdated(bytes32,address)'(name?: null, destination?: null): CacheUpdatedEventFilter;
    CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;

    'DepositFinalized(address,uint256)'(
      _to?: PromiseOrValue<string> | null,
      _amount?: null
    ): DepositFinalizedEventFilter;
    DepositFinalized(
      _to?: PromiseOrValue<string> | null,
      _amount?: null
    ): DepositFinalizedEventFilter;

    'FeePeriodCloseFinalized(uint256,uint256)'(
      snxBackedAmount?: null,
      totalDebtShares?: null
    ): FeePeriodCloseFinalizedEventFilter;
    FeePeriodCloseFinalized(
      snxBackedAmount?: null,
      totalDebtShares?: null
    ): FeePeriodCloseFinalizedEventFilter;

    'FinalizeSynthTransfer(bytes32,address,uint256)'(
      currencyKey?: PromiseOrValue<BytesLike> | null,
      destination?: PromiseOrValue<string> | null,
      amount?: null
    ): FinalizeSynthTransferEventFilter;
    FinalizeSynthTransfer(
      currencyKey?: PromiseOrValue<BytesLike> | null,
      destination?: PromiseOrValue<string> | null,
      amount?: null
    ): FinalizeSynthTransferEventFilter;

    'ImportedVestingEntries(address,uint256,tuple[])'(
      account?: PromiseOrValue<string> | null,
      escrowedAmount?: null,
      vestingEntries?: null
    ): ImportedVestingEntriesEventFilter;
    ImportedVestingEntries(
      account?: PromiseOrValue<string> | null,
      escrowedAmount?: null,
      vestingEntries?: null
    ): ImportedVestingEntriesEventFilter;

    'InitiateSynthTransfer(bytes32,address,uint256)'(
      currencyKey?: PromiseOrValue<BytesLike> | null,
      destination?: PromiseOrValue<string> | null,
      amount?: null
    ): InitiateSynthTransferEventFilter;
    InitiateSynthTransfer(
      currencyKey?: PromiseOrValue<BytesLike> | null,
      destination?: PromiseOrValue<string> | null,
      amount?: null
    ): InitiateSynthTransferEventFilter;

    'InitiationResumed()'(): InitiationResumedEventFilter;
    InitiationResumed(): InitiationResumedEventFilter;

    'InitiationSuspended()'(): InitiationSuspendedEventFilter;
    InitiationSuspended(): InitiationSuspendedEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    'RewardDepositFinalized(address,uint256)'(
      from?: null,
      amount?: null
    ): RewardDepositFinalizedEventFilter;
    RewardDepositFinalized(from?: null, amount?: null): RewardDepositFinalizedEventFilter;

    'WithdrawalInitiated(address,address,uint256)'(
      _from?: PromiseOrValue<string> | null,
      _to?: null,
      _amount?: null
    ): WithdrawalInitiatedEventFilter;
    WithdrawalInitiated(
      _from?: PromiseOrValue<string> | null,
      _to?: null,
      _amount?: null
    ): WithdrawalInitiatedEventFilter;
  };

  estimateGas: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    finalizeDeposit(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalizeEscrowMigration(
      account: PromiseOrValue<string>,
      escrowedAmount: PromiseOrValue<BigNumberish>,
      vestingEntries: VestingEntries.VestingEntryStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalizeFeePeriodClose(
      snxBackedAmount: PromiseOrValue<BigNumberish>,
      totalDebtShares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalizeRewardDeposit(
      from: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    finalizeSynthTransfer(
      currencyKey: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initiateSynthTransfer(
      currencyKey: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initiationActive(overrides?: CallOverrides): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    rebuildCache(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    resolver(overrides?: CallOverrides): Promise<BigNumber>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;

    resumeInitiation(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    suspendInitiation(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    synthTransferReceived(overrides?: CallOverrides): Promise<BigNumber>;

    synthTransferSent(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawTo(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalizeDeposit(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalizeEscrowMigration(
      account: PromiseOrValue<string>,
      escrowedAmount: PromiseOrValue<BigNumberish>,
      vestingEntries: VestingEntries.VestingEntryStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalizeFeePeriodClose(
      snxBackedAmount: PromiseOrValue<BigNumberish>,
      totalDebtShares: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalizeRewardDeposit(
      from: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    finalizeSynthTransfer(
      currencyKey: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initiateSynthTransfer(
      currencyKey: PromiseOrValue<BytesLike>,
      destination: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initiationActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isResolverCached(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resumeInitiation(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    suspendInitiation(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    synthTransferReceived(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    synthTransferSent(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawTo(
      to: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}