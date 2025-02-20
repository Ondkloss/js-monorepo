// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'DebtCache';
export const address = '0x216EaF79575563A5e13227ad075850cDeb004083';
export const source = 'DebtCache';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event DebtCacheSnapshotTaken(uint256 timestamp)',
  'event DebtCacheUpdated(uint256 cachedDebt)',
  'event DebtCacheValidityChanged(bool indexed isInvalid)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function acceptOwnership()',
  'function cacheInfo() view returns (uint256 debt, uint256 timestamp, bool isInvalid, bool isStale)',
  'function cacheInvalid() view returns (bool)',
  'function cacheStale() view returns (bool)',
  'function cacheTimestamp() view returns (uint256)',
  'function cachedDebt() view returns (uint256)',
  'function cachedSynthDebt(bytes32 currencyKey) view returns (uint256)',
  'function cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[] snxIssuedDebts)',
  'function currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)',
  'function currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] debtValues, uint256 futuresDebt, uint256 excludedDebt, bool anyRateIsInvalid)',
  'function debtSnapshotStaleTime() view returns (uint256)',
  'function excludedIssuedDebts(bytes32[] currencyKeys) view returns (uint256[] excludedDebts)',
  'function importExcludedIssuedDebts(address prevDebtCache, address prevIssuer)',
  'function isInitialized() view returns (bool)',
  'function isResolverCached() view returns (bool)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function purgeCachedSynthDebt(bytes32 currencyKey)',
  'function rebuildCache()',
  'function recordExcludedDebtChange(bytes32 currencyKey, int256 delta)',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function takeDebtSnapshot()',
  'function totalNonSnxBackedDebt() view returns (uint256 excludedDebt, bool isInvalid)',
  'function updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)',
  'function updateCachedSynthDebts(bytes32[] currencyKeys)',
  'function updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)',
  'function updateCachedsUSDDebt(int256 amount)',
  'function updateDebtCacheValidity(bool currentlyInvalid)',
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

export interface DebtCacheInterface extends utils.Interface {
  functions: {
    'CONTRACT_NAME()': FunctionFragment;
    'acceptOwnership()': FunctionFragment;
    'cacheInfo()': FunctionFragment;
    'cacheInvalid()': FunctionFragment;
    'cacheStale()': FunctionFragment;
    'cacheTimestamp()': FunctionFragment;
    'cachedDebt()': FunctionFragment;
    'cachedSynthDebt(bytes32)': FunctionFragment;
    'cachedSynthDebts(bytes32[])': FunctionFragment;
    'currentDebt()': FunctionFragment;
    'currentSynthDebts(bytes32[])': FunctionFragment;
    'debtSnapshotStaleTime()': FunctionFragment;
    'excludedIssuedDebts(bytes32[])': FunctionFragment;
    'importExcludedIssuedDebts(address,address)': FunctionFragment;
    'isInitialized()': FunctionFragment;
    'isResolverCached()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'purgeCachedSynthDebt(bytes32)': FunctionFragment;
    'rebuildCache()': FunctionFragment;
    'recordExcludedDebtChange(bytes32,int256)': FunctionFragment;
    'resolver()': FunctionFragment;
    'resolverAddressesRequired()': FunctionFragment;
    'takeDebtSnapshot()': FunctionFragment;
    'totalNonSnxBackedDebt()': FunctionFragment;
    'updateCachedSynthDebtWithRate(bytes32,uint256)': FunctionFragment;
    'updateCachedSynthDebts(bytes32[])': FunctionFragment;
    'updateCachedSynthDebtsWithRates(bytes32[],uint256[])': FunctionFragment;
    'updateCachedsUSDDebt(int256)': FunctionFragment;
    'updateDebtCacheValidity(bool)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'CONTRACT_NAME'
      | 'acceptOwnership'
      | 'cacheInfo'
      | 'cacheInvalid'
      | 'cacheStale'
      | 'cacheTimestamp'
      | 'cachedDebt'
      | 'cachedSynthDebt'
      | 'cachedSynthDebts'
      | 'currentDebt'
      | 'currentSynthDebts'
      | 'debtSnapshotStaleTime'
      | 'excludedIssuedDebts'
      | 'importExcludedIssuedDebts'
      | 'isInitialized'
      | 'isResolverCached'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'purgeCachedSynthDebt'
      | 'rebuildCache'
      | 'recordExcludedDebtChange'
      | 'resolver'
      | 'resolverAddressesRequired'
      | 'takeDebtSnapshot'
      | 'totalNonSnxBackedDebt'
      | 'updateCachedSynthDebtWithRate'
      | 'updateCachedSynthDebts'
      | 'updateCachedSynthDebtsWithRates'
      | 'updateCachedsUSDDebt'
      | 'updateDebtCacheValidity'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'CONTRACT_NAME', values?: undefined): string;
  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cacheInfo', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cacheInvalid', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cacheStale', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cacheTimestamp', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cachedDebt', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'cachedSynthDebt',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'cachedSynthDebts',
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(functionFragment: 'currentDebt', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'currentSynthDebts',
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(functionFragment: 'debtSnapshotStaleTime', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'excludedIssuedDebts',
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'importExcludedIssuedDebts',
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'isInitialized', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isResolverCached', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'purgeCachedSynthDebt',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'rebuildCache', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'recordExcludedDebtChange',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'resolver', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolverAddressesRequired', values?: undefined): string;
  encodeFunctionData(functionFragment: 'takeDebtSnapshot', values?: undefined): string;
  encodeFunctionData(functionFragment: 'totalNonSnxBackedDebt', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'updateCachedSynthDebtWithRate',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateCachedSynthDebts',
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateCachedSynthDebtsWithRates',
    values: [PromiseOrValue<BytesLike>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateCachedsUSDDebt',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'updateDebtCacheValidity',
    values: [PromiseOrValue<boolean>]
  ): string;

  decodeFunctionResult(functionFragment: 'CONTRACT_NAME', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cacheInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cacheInvalid', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cacheStale', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cacheTimestamp', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cachedDebt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cachedSynthDebt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cachedSynthDebts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currentDebt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'currentSynthDebts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'debtSnapshotStaleTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'excludedIssuedDebts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'importExcludedIssuedDebts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isInitialized', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isResolverCached', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'purgeCachedSynthDebt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rebuildCache', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'recordExcludedDebtChange', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolver', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolverAddressesRequired', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'takeDebtSnapshot', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalNonSnxBackedDebt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateCachedSynthDebtWithRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateCachedSynthDebts', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'updateCachedSynthDebtsWithRates',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'updateCachedsUSDDebt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updateDebtCacheValidity', data: BytesLike): Result;

  events: {
    'CacheUpdated(bytes32,address)': EventFragment;
    'DebtCacheSnapshotTaken(uint256)': EventFragment;
    'DebtCacheUpdated(uint256)': EventFragment;
    'DebtCacheValidityChanged(bool)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CacheUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DebtCacheSnapshotTaken'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DebtCacheUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DebtCacheValidityChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
}

export interface CacheUpdatedEventObject {
  name: string;
  destination: string;
}
export type CacheUpdatedEvent = TypedEvent<[string, string], CacheUpdatedEventObject>;

export type CacheUpdatedEventFilter = TypedEventFilter<CacheUpdatedEvent>;

export interface DebtCacheSnapshotTakenEventObject {
  timestamp: BigNumber;
}
export type DebtCacheSnapshotTakenEvent = TypedEvent<
  [BigNumber],
  DebtCacheSnapshotTakenEventObject
>;

export type DebtCacheSnapshotTakenEventFilter = TypedEventFilter<DebtCacheSnapshotTakenEvent>;

export interface DebtCacheUpdatedEventObject {
  cachedDebt: BigNumber;
}
export type DebtCacheUpdatedEvent = TypedEvent<[BigNumber], DebtCacheUpdatedEventObject>;

export type DebtCacheUpdatedEventFilter = TypedEventFilter<DebtCacheUpdatedEvent>;

export interface DebtCacheValidityChangedEventObject {
  isInvalid: boolean;
}
export type DebtCacheValidityChangedEvent = TypedEvent<
  [boolean],
  DebtCacheValidityChangedEventObject
>;

export type DebtCacheValidityChangedEventFilter = TypedEventFilter<DebtCacheValidityChangedEvent>;

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

export interface DebtCache extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DebtCacheInterface;

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

    cacheInfo(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, boolean, boolean] & {
        debt: BigNumber;
        timestamp: BigNumber;
        isInvalid: boolean;
        isStale: boolean;
      }
    >;

    cacheInvalid(overrides?: CallOverrides): Promise<[boolean]>;

    cacheStale(overrides?: CallOverrides): Promise<[boolean]>;

    cacheTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    cachedDebt(overrides?: CallOverrides): Promise<[BigNumber]>;

    cachedSynthDebt(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    cachedSynthDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { snxIssuedDebts: BigNumber[] }>;

    currentDebt(
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { debt: BigNumber; anyRateIsInvalid: boolean }>;

    currentSynthDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber, BigNumber, boolean] & {
        debtValues: BigNumber[];
        futuresDebt: BigNumber;
        excludedDebt: BigNumber;
        anyRateIsInvalid: boolean;
      }
    >;

    debtSnapshotStaleTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    excludedIssuedDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { excludedDebts: BigNumber[] }>;

    importExcludedIssuedDebts(
      prevDebtCache: PromiseOrValue<string>,
      prevIssuer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<[boolean]>;

    isResolverCached(overrides?: CallOverrides): Promise<[boolean]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    purgeCachedSynthDebt(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    recordExcludedDebtChange(
      currencyKey: PromiseOrValue<BytesLike>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    resolver(overrides?: CallOverrides): Promise<[string]>;

    resolverAddressesRequired(
      overrides?: CallOverrides
    ): Promise<[string[]] & { addresses: string[] }>;

    takeDebtSnapshot(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    totalNonSnxBackedDebt(
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { excludedDebt: BigNumber; isInvalid: boolean }>;

    updateCachedSynthDebtWithRate(
      currencyKey: PromiseOrValue<BytesLike>,
      currencyRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateCachedSynthDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateCachedSynthDebtsWithRates(
      currencyKeys: PromiseOrValue<BytesLike>[],
      currencyRates: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateCachedsUSDDebt(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateDebtCacheValidity(
      currentlyInvalid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cacheInfo(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber, boolean, boolean] & {
      debt: BigNumber;
      timestamp: BigNumber;
      isInvalid: boolean;
      isStale: boolean;
    }
  >;

  cacheInvalid(overrides?: CallOverrides): Promise<boolean>;

  cacheStale(overrides?: CallOverrides): Promise<boolean>;

  cacheTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  cachedDebt(overrides?: CallOverrides): Promise<BigNumber>;

  cachedSynthDebt(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cachedSynthDebts(
    currencyKeys: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  currentDebt(
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { debt: BigNumber; anyRateIsInvalid: boolean }>;

  currentSynthDebts(
    currencyKeys: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber, BigNumber, boolean] & {
      debtValues: BigNumber[];
      futuresDebt: BigNumber;
      excludedDebt: BigNumber;
      anyRateIsInvalid: boolean;
    }
  >;

  debtSnapshotStaleTime(overrides?: CallOverrides): Promise<BigNumber>;

  excludedIssuedDebts(
    currencyKeys: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  importExcludedIssuedDebts(
    prevDebtCache: PromiseOrValue<string>,
    prevIssuer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isInitialized(overrides?: CallOverrides): Promise<boolean>;

  isResolverCached(overrides?: CallOverrides): Promise<boolean>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  purgeCachedSynthDebt(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rebuildCache(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  recordExcludedDebtChange(
    currencyKey: PromiseOrValue<BytesLike>,
    delta: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  resolver(overrides?: CallOverrides): Promise<string>;

  resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

  takeDebtSnapshot(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  totalNonSnxBackedDebt(
    overrides?: CallOverrides
  ): Promise<[BigNumber, boolean] & { excludedDebt: BigNumber; isInvalid: boolean }>;

  updateCachedSynthDebtWithRate(
    currencyKey: PromiseOrValue<BytesLike>,
    currencyRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateCachedSynthDebts(
    currencyKeys: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateCachedSynthDebtsWithRates(
    currencyKeys: PromiseOrValue<BytesLike>[],
    currencyRates: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateCachedsUSDDebt(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateDebtCacheValidity(
    currentlyInvalid: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    cacheInfo(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber, boolean, boolean] & {
        debt: BigNumber;
        timestamp: BigNumber;
        isInvalid: boolean;
        isStale: boolean;
      }
    >;

    cacheInvalid(overrides?: CallOverrides): Promise<boolean>;

    cacheStale(overrides?: CallOverrides): Promise<boolean>;

    cacheTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    cachedDebt(overrides?: CallOverrides): Promise<BigNumber>;

    cachedSynthDebt(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cachedSynthDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    currentDebt(
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { debt: BigNumber; anyRateIsInvalid: boolean }>;

    currentSynthDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber, BigNumber, boolean] & {
        debtValues: BigNumber[];
        futuresDebt: BigNumber;
        excludedDebt: BigNumber;
        anyRateIsInvalid: boolean;
      }
    >;

    debtSnapshotStaleTime(overrides?: CallOverrides): Promise<BigNumber>;

    excludedIssuedDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    importExcludedIssuedDebts(
      prevDebtCache: PromiseOrValue<string>,
      prevIssuer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isInitialized(overrides?: CallOverrides): Promise<boolean>;

    isResolverCached(overrides?: CallOverrides): Promise<boolean>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    purgeCachedSynthDebt(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    rebuildCache(overrides?: CallOverrides): Promise<void>;

    recordExcludedDebtChange(
      currencyKey: PromiseOrValue<BytesLike>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    resolver(overrides?: CallOverrides): Promise<string>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

    takeDebtSnapshot(overrides?: CallOverrides): Promise<void>;

    totalNonSnxBackedDebt(
      overrides?: CallOverrides
    ): Promise<[BigNumber, boolean] & { excludedDebt: BigNumber; isInvalid: boolean }>;

    updateCachedSynthDebtWithRate(
      currencyKey: PromiseOrValue<BytesLike>,
      currencyRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateCachedSynthDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateCachedSynthDebtsWithRates(
      currencyKeys: PromiseOrValue<BytesLike>[],
      currencyRates: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    updateCachedsUSDDebt(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateDebtCacheValidity(
      currentlyInvalid: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'CacheUpdated(bytes32,address)'(name?: null, destination?: null): CacheUpdatedEventFilter;
    CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;

    'DebtCacheSnapshotTaken(uint256)'(timestamp?: null): DebtCacheSnapshotTakenEventFilter;
    DebtCacheSnapshotTaken(timestamp?: null): DebtCacheSnapshotTakenEventFilter;

    'DebtCacheUpdated(uint256)'(cachedDebt?: null): DebtCacheUpdatedEventFilter;
    DebtCacheUpdated(cachedDebt?: null): DebtCacheUpdatedEventFilter;

    'DebtCacheValidityChanged(bool)'(
      isInvalid?: PromiseOrValue<boolean> | null
    ): DebtCacheValidityChangedEventFilter;
    DebtCacheValidityChanged(
      isInvalid?: PromiseOrValue<boolean> | null
    ): DebtCacheValidityChangedEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
  };

  estimateGas: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    cacheInfo(overrides?: CallOverrides): Promise<BigNumber>;

    cacheInvalid(overrides?: CallOverrides): Promise<BigNumber>;

    cacheStale(overrides?: CallOverrides): Promise<BigNumber>;

    cacheTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    cachedDebt(overrides?: CallOverrides): Promise<BigNumber>;

    cachedSynthDebt(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cachedSynthDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentDebt(overrides?: CallOverrides): Promise<BigNumber>;

    currentSynthDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtSnapshotStaleTime(overrides?: CallOverrides): Promise<BigNumber>;

    excludedIssuedDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    importExcludedIssuedDebts(
      prevDebtCache: PromiseOrValue<string>,
      prevIssuer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isInitialized(overrides?: CallOverrides): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    purgeCachedSynthDebt(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rebuildCache(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    recordExcludedDebtChange(
      currencyKey: PromiseOrValue<BytesLike>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    resolver(overrides?: CallOverrides): Promise<BigNumber>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;

    takeDebtSnapshot(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    totalNonSnxBackedDebt(overrides?: CallOverrides): Promise<BigNumber>;

    updateCachedSynthDebtWithRate(
      currencyKey: PromiseOrValue<BytesLike>,
      currencyRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateCachedSynthDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateCachedSynthDebtsWithRates(
      currencyKeys: PromiseOrValue<BytesLike>[],
      currencyRates: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateCachedsUSDDebt(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateDebtCacheValidity(
      currentlyInvalid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cacheInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cacheInvalid(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cacheStale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cacheTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cachedDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cachedSynthDebt(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cachedSynthDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    currentSynthDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    debtSnapshotStaleTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    excludedIssuedDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    importExcludedIssuedDebts(
      prevDebtCache: PromiseOrValue<string>,
      prevIssuer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isInitialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isResolverCached(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    purgeCachedSynthDebt(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    recordExcludedDebtChange(
      currencyKey: PromiseOrValue<BytesLike>,
      delta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    takeDebtSnapshot(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    totalNonSnxBackedDebt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateCachedSynthDebtWithRate(
      currencyKey: PromiseOrValue<BytesLike>,
      currencyRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateCachedSynthDebts(
      currencyKeys: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateCachedSynthDebtsWithRates(
      currencyKeys: PromiseOrValue<BytesLike>[],
      currencyRates: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateCachedsUSDDebt(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateDebtCacheValidity(
      currentlyInvalid: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
