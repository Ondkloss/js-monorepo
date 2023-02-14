// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'PerpsV2OffchainDelayedOrderLINKPERP';
export const address = '0xf67fDa142f31686523D2b52CE25aD66895f23116';
export const source = 'PerpsV2MarketDelayedOrdersOffchain';
export const abi = [
  'constructor(address _proxy, address _marketState, address _owner, address _resolver)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event DelayedOrderRemoved(address indexed account, bool isOffchain, uint256 currentRoundId, int256 sizeDelta, uint256 targetRoundId, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)',
  'event DelayedOrderSubmitted(address indexed account, bool isOffchain, int256 sizeDelta, uint256 targetRoundId, uint256 intentionTime, uint256 executableAtTime, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)',
  'event FundingRecomputed(int256 funding, int256 fundingRate, uint256 index, uint256 timestamp)',
  'event MarginTransferred(address indexed account, int256 marginDelta)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event PerpsTracking(bytes32 indexed trackingCode, bytes32 baseAsset, bytes32 marketKey, int256 sizeDelta, uint256 fee)',
  'event PositionLiquidated(uint256 id, address account, address liquidator, int256 size, uint256 price, uint256 fee)',
  'event PositionModified(uint256 indexed id, address indexed account, uint256 margin, int256 size, int256 tradeSize, uint256 lastPrice, uint256 fundingIndex, uint256 fee)',
  'event ProxyUpdated(address proxyAddress)',
  'function acceptOwnership()',
  'function cancelOffchainDelayedOrder(address account)',
  'function delayedOrders(address account) view returns (tuple(bool isOffchain, int128 sizeDelta, uint128 priceImpactDelta, uint128 targetRoundId, uint128 commitDeposit, uint128 keeperDeposit, uint256 executableAtTime, uint256 intentionTime, bytes32 trackingCode))',
  'function executeOffchainDelayedOrder(address account, bytes[] priceUpdateData) payable',
  'function isResolverCached() view returns (bool)',
  'function marketState() view returns (address)',
  'function messageSender() view returns (address)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function proxy() view returns (address)',
  'function rebuildCache()',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function setMessageSender(address sender)',
  'function setProxy(address _proxy)',
  'function submitOffchainDelayedOrder(int256 sizeDelta, uint256 priceImpactDelta)',
  'function submitOffchainDelayedOrderWithTracking(int256 sizeDelta, uint256 priceImpactDelta, bytes32 trackingCode)',
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
  PayableOverrides,
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

export declare namespace IPerpsV2MarketBaseTypes {
  export type DelayedOrderStruct = {
    isOffchain: PromiseOrValue<boolean>;
    sizeDelta: PromiseOrValue<BigNumberish>;
    priceImpactDelta: PromiseOrValue<BigNumberish>;
    targetRoundId: PromiseOrValue<BigNumberish>;
    commitDeposit: PromiseOrValue<BigNumberish>;
    keeperDeposit: PromiseOrValue<BigNumberish>;
    executableAtTime: PromiseOrValue<BigNumberish>;
    intentionTime: PromiseOrValue<BigNumberish>;
    trackingCode: PromiseOrValue<BytesLike>;
  };

  export type DelayedOrderStructOutput = [
    boolean,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string
  ] & {
    isOffchain: boolean;
    sizeDelta: BigNumber;
    priceImpactDelta: BigNumber;
    targetRoundId: BigNumber;
    commitDeposit: BigNumber;
    keeperDeposit: BigNumber;
    executableAtTime: BigNumber;
    intentionTime: BigNumber;
    trackingCode: string;
  };
}

export interface PerpsV2OffchainDelayedOrderLINKPERPInterface extends utils.Interface {
  functions: {
    'acceptOwnership()': FunctionFragment;
    'cancelOffchainDelayedOrder(address)': FunctionFragment;
    'delayedOrders(address)': FunctionFragment;
    'executeOffchainDelayedOrder(address,bytes[])': FunctionFragment;
    'isResolverCached()': FunctionFragment;
    'marketState()': FunctionFragment;
    'messageSender()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'proxy()': FunctionFragment;
    'rebuildCache()': FunctionFragment;
    'resolver()': FunctionFragment;
    'resolverAddressesRequired()': FunctionFragment;
    'setMessageSender(address)': FunctionFragment;
    'setProxy(address)': FunctionFragment;
    'submitOffchainDelayedOrder(int256,uint256)': FunctionFragment;
    'submitOffchainDelayedOrderWithTracking(int256,uint256,bytes32)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'acceptOwnership'
      | 'cancelOffchainDelayedOrder'
      | 'delayedOrders'
      | 'executeOffchainDelayedOrder'
      | 'isResolverCached'
      | 'marketState'
      | 'messageSender'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'proxy'
      | 'rebuildCache'
      | 'resolver'
      | 'resolverAddressesRequired'
      | 'setMessageSender'
      | 'setProxy'
      | 'submitOffchainDelayedOrder'
      | 'submitOffchainDelayedOrderWithTracking'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'cancelOffchainDelayedOrder',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'delayedOrders', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'executeOffchainDelayedOrder',
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(functionFragment: 'isResolverCached', values?: undefined): string;
  encodeFunctionData(functionFragment: 'marketState', values?: undefined): string;
  encodeFunctionData(functionFragment: 'messageSender', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proxy', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rebuildCache', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolver', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolverAddressesRequired', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setMessageSender',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'setProxy', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'submitOffchainDelayedOrder',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'submitOffchainDelayedOrderWithTracking',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cancelOffchainDelayedOrder', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'delayedOrders', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'executeOffchainDelayedOrder', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isResolverCached', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'marketState', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'messageSender', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proxy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rebuildCache', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolver', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolverAddressesRequired', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMessageSender', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setProxy', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'submitOffchainDelayedOrder', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'submitOffchainDelayedOrderWithTracking',
    data: BytesLike
  ): Result;

  events: {
    'CacheUpdated(bytes32,address)': EventFragment;
    'DelayedOrderRemoved(address,bool,uint256,int256,uint256,uint256,uint256,bytes32)': EventFragment;
    'DelayedOrderSubmitted(address,bool,int256,uint256,uint256,uint256,uint256,uint256,bytes32)': EventFragment;
    'FundingRecomputed(int256,int256,uint256,uint256)': EventFragment;
    'MarginTransferred(address,int256)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
    'PerpsTracking(bytes32,bytes32,bytes32,int256,uint256)': EventFragment;
    'PositionLiquidated(uint256,address,address,int256,uint256,uint256)': EventFragment;
    'PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256)': EventFragment;
    'ProxyUpdated(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'CacheUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DelayedOrderRemoved'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DelayedOrderSubmitted'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'FundingRecomputed'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MarginTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PerpsTracking'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PositionLiquidated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PositionModified'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ProxyUpdated'): EventFragment;
}

export interface CacheUpdatedEventObject {
  name: string;
  destination: string;
}
export type CacheUpdatedEvent = TypedEvent<[string, string], CacheUpdatedEventObject>;

export type CacheUpdatedEventFilter = TypedEventFilter<CacheUpdatedEvent>;

export interface DelayedOrderRemovedEventObject {
  account: string;
  isOffchain: boolean;
  currentRoundId: BigNumber;
  sizeDelta: BigNumber;
  targetRoundId: BigNumber;
  commitDeposit: BigNumber;
  keeperDeposit: BigNumber;
  trackingCode: string;
}
export type DelayedOrderRemovedEvent = TypedEvent<
  [string, boolean, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string],
  DelayedOrderRemovedEventObject
>;

export type DelayedOrderRemovedEventFilter = TypedEventFilter<DelayedOrderRemovedEvent>;

export interface DelayedOrderSubmittedEventObject {
  account: string;
  isOffchain: boolean;
  sizeDelta: BigNumber;
  targetRoundId: BigNumber;
  intentionTime: BigNumber;
  executableAtTime: BigNumber;
  commitDeposit: BigNumber;
  keeperDeposit: BigNumber;
  trackingCode: string;
}
export type DelayedOrderSubmittedEvent = TypedEvent<
  [string, boolean, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string],
  DelayedOrderSubmittedEventObject
>;

export type DelayedOrderSubmittedEventFilter = TypedEventFilter<DelayedOrderSubmittedEvent>;

export interface FundingRecomputedEventObject {
  funding: BigNumber;
  fundingRate: BigNumber;
  index: BigNumber;
  timestamp: BigNumber;
}
export type FundingRecomputedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  FundingRecomputedEventObject
>;

export type FundingRecomputedEventFilter = TypedEventFilter<FundingRecomputedEvent>;

export interface MarginTransferredEventObject {
  account: string;
  marginDelta: BigNumber;
}
export type MarginTransferredEvent = TypedEvent<[string, BigNumber], MarginTransferredEventObject>;

export type MarginTransferredEventFilter = TypedEventFilter<MarginTransferredEvent>;

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

export interface PerpsTrackingEventObject {
  trackingCode: string;
  baseAsset: string;
  marketKey: string;
  sizeDelta: BigNumber;
  fee: BigNumber;
}
export type PerpsTrackingEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  PerpsTrackingEventObject
>;

export type PerpsTrackingEventFilter = TypedEventFilter<PerpsTrackingEvent>;

export interface PositionLiquidatedEventObject {
  id: BigNumber;
  account: string;
  liquidator: string;
  size: BigNumber;
  price: BigNumber;
  fee: BigNumber;
}
export type PositionLiquidatedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber, BigNumber, BigNumber],
  PositionLiquidatedEventObject
>;

export type PositionLiquidatedEventFilter = TypedEventFilter<PositionLiquidatedEvent>;

export interface PositionModifiedEventObject {
  id: BigNumber;
  account: string;
  margin: BigNumber;
  size: BigNumber;
  tradeSize: BigNumber;
  lastPrice: BigNumber;
  fundingIndex: BigNumber;
  fee: BigNumber;
}
export type PositionModifiedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  PositionModifiedEventObject
>;

export type PositionModifiedEventFilter = TypedEventFilter<PositionModifiedEvent>;

export interface ProxyUpdatedEventObject {
  proxyAddress: string;
}
export type ProxyUpdatedEvent = TypedEvent<[string], ProxyUpdatedEventObject>;

export type ProxyUpdatedEventFilter = TypedEventFilter<ProxyUpdatedEvent>;

export interface PerpsV2OffchainDelayedOrderLINKPERP extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PerpsV2OffchainDelayedOrderLINKPERPInterface;

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
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cancelOffchainDelayedOrder(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    delayedOrders(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[IPerpsV2MarketBaseTypes.DelayedOrderStructOutput]>;

    executeOffchainDelayedOrder(
      account: PromiseOrValue<string>,
      priceUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isResolverCached(overrides?: CallOverrides): Promise<[boolean]>;

    marketState(overrides?: CallOverrides): Promise<[string]>;

    messageSender(overrides?: CallOverrides): Promise<[string]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxy(overrides?: CallOverrides): Promise<[string]>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    resolver(overrides?: CallOverrides): Promise<[string]>;

    resolverAddressesRequired(
      overrides?: CallOverrides
    ): Promise<[string[]] & { addresses: string[] }>;

    setMessageSender(
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setProxy(
      _proxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitOffchainDelayedOrder(
      sizeDelta: PromiseOrValue<BigNumberish>,
      priceImpactDelta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    submitOffchainDelayedOrderWithTracking(
      sizeDelta: PromiseOrValue<BigNumberish>,
      priceImpactDelta: PromiseOrValue<BigNumberish>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cancelOffchainDelayedOrder(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  delayedOrders(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IPerpsV2MarketBaseTypes.DelayedOrderStructOutput>;

  executeOffchainDelayedOrder(
    account: PromiseOrValue<string>,
    priceUpdateData: PromiseOrValue<BytesLike>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isResolverCached(overrides?: CallOverrides): Promise<boolean>;

  marketState(overrides?: CallOverrides): Promise<string>;

  messageSender(overrides?: CallOverrides): Promise<string>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxy(overrides?: CallOverrides): Promise<string>;

  rebuildCache(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  resolver(overrides?: CallOverrides): Promise<string>;

  resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

  setMessageSender(
    sender: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setProxy(
    _proxy: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitOffchainDelayedOrder(
    sizeDelta: PromiseOrValue<BigNumberish>,
    priceImpactDelta: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  submitOffchainDelayedOrderWithTracking(
    sizeDelta: PromiseOrValue<BigNumberish>,
    priceImpactDelta: PromiseOrValue<BigNumberish>,
    trackingCode: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    cancelOffchainDelayedOrder(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    delayedOrders(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IPerpsV2MarketBaseTypes.DelayedOrderStructOutput>;

    executeOffchainDelayedOrder(
      account: PromiseOrValue<string>,
      priceUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    isResolverCached(overrides?: CallOverrides): Promise<boolean>;

    marketState(overrides?: CallOverrides): Promise<string>;

    messageSender(overrides?: CallOverrides): Promise<string>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxy(overrides?: CallOverrides): Promise<string>;

    rebuildCache(overrides?: CallOverrides): Promise<void>;

    resolver(overrides?: CallOverrides): Promise<string>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

    setMessageSender(sender: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    setProxy(_proxy: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    submitOffchainDelayedOrder(
      sizeDelta: PromiseOrValue<BigNumberish>,
      priceImpactDelta: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    submitOffchainDelayedOrderWithTracking(
      sizeDelta: PromiseOrValue<BigNumberish>,
      priceImpactDelta: PromiseOrValue<BigNumberish>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    'CacheUpdated(bytes32,address)'(name?: null, destination?: null): CacheUpdatedEventFilter;
    CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;

    'DelayedOrderRemoved(address,bool,uint256,int256,uint256,uint256,uint256,bytes32)'(
      account?: PromiseOrValue<string> | null,
      isOffchain?: null,
      currentRoundId?: null,
      sizeDelta?: null,
      targetRoundId?: null,
      commitDeposit?: null,
      keeperDeposit?: null,
      trackingCode?: null
    ): DelayedOrderRemovedEventFilter;
    DelayedOrderRemoved(
      account?: PromiseOrValue<string> | null,
      isOffchain?: null,
      currentRoundId?: null,
      sizeDelta?: null,
      targetRoundId?: null,
      commitDeposit?: null,
      keeperDeposit?: null,
      trackingCode?: null
    ): DelayedOrderRemovedEventFilter;

    'DelayedOrderSubmitted(address,bool,int256,uint256,uint256,uint256,uint256,uint256,bytes32)'(
      account?: PromiseOrValue<string> | null,
      isOffchain?: null,
      sizeDelta?: null,
      targetRoundId?: null,
      intentionTime?: null,
      executableAtTime?: null,
      commitDeposit?: null,
      keeperDeposit?: null,
      trackingCode?: null
    ): DelayedOrderSubmittedEventFilter;
    DelayedOrderSubmitted(
      account?: PromiseOrValue<string> | null,
      isOffchain?: null,
      sizeDelta?: null,
      targetRoundId?: null,
      intentionTime?: null,
      executableAtTime?: null,
      commitDeposit?: null,
      keeperDeposit?: null,
      trackingCode?: null
    ): DelayedOrderSubmittedEventFilter;

    'FundingRecomputed(int256,int256,uint256,uint256)'(
      funding?: null,
      fundingRate?: null,
      index?: null,
      timestamp?: null
    ): FundingRecomputedEventFilter;
    FundingRecomputed(
      funding?: null,
      fundingRate?: null,
      index?: null,
      timestamp?: null
    ): FundingRecomputedEventFilter;

    'MarginTransferred(address,int256)'(
      account?: PromiseOrValue<string> | null,
      marginDelta?: null
    ): MarginTransferredEventFilter;
    MarginTransferred(
      account?: PromiseOrValue<string> | null,
      marginDelta?: null
    ): MarginTransferredEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    'PerpsTracking(bytes32,bytes32,bytes32,int256,uint256)'(
      trackingCode?: PromiseOrValue<BytesLike> | null,
      baseAsset?: null,
      marketKey?: null,
      sizeDelta?: null,
      fee?: null
    ): PerpsTrackingEventFilter;
    PerpsTracking(
      trackingCode?: PromiseOrValue<BytesLike> | null,
      baseAsset?: null,
      marketKey?: null,
      sizeDelta?: null,
      fee?: null
    ): PerpsTrackingEventFilter;

    'PositionLiquidated(uint256,address,address,int256,uint256,uint256)'(
      id?: null,
      account?: null,
      liquidator?: null,
      size?: null,
      price?: null,
      fee?: null
    ): PositionLiquidatedEventFilter;
    PositionLiquidated(
      id?: null,
      account?: null,
      liquidator?: null,
      size?: null,
      price?: null,
      fee?: null
    ): PositionLiquidatedEventFilter;

    'PositionModified(uint256,address,uint256,int256,int256,uint256,uint256,uint256)'(
      id?: PromiseOrValue<BigNumberish> | null,
      account?: PromiseOrValue<string> | null,
      margin?: null,
      size?: null,
      tradeSize?: null,
      lastPrice?: null,
      fundingIndex?: null,
      fee?: null
    ): PositionModifiedEventFilter;
    PositionModified(
      id?: PromiseOrValue<BigNumberish> | null,
      account?: PromiseOrValue<string> | null,
      margin?: null,
      size?: null,
      tradeSize?: null,
      lastPrice?: null,
      fundingIndex?: null,
      fee?: null
    ): PositionModifiedEventFilter;

    'ProxyUpdated(address)'(proxyAddress?: null): ProxyUpdatedEventFilter;
    ProxyUpdated(proxyAddress?: null): ProxyUpdatedEventFilter;
  };

  estimateGas: {
    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    cancelOffchainDelayedOrder(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    delayedOrders(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    executeOffchainDelayedOrder(
      account: PromiseOrValue<string>,
      priceUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;

    marketState(overrides?: CallOverrides): Promise<BigNumber>;

    messageSender(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxy(overrides?: CallOverrides): Promise<BigNumber>;

    rebuildCache(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    resolver(overrides?: CallOverrides): Promise<BigNumber>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;

    setMessageSender(
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setProxy(
      _proxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitOffchainDelayedOrder(
      sizeDelta: PromiseOrValue<BigNumberish>,
      priceImpactDelta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    submitOffchainDelayedOrderWithTracking(
      sizeDelta: PromiseOrValue<BigNumberish>,
      priceImpactDelta: PromiseOrValue<BigNumberish>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cancelOffchainDelayedOrder(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    delayedOrders(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    executeOffchainDelayedOrder(
      account: PromiseOrValue<string>,
      priceUpdateData: PromiseOrValue<BytesLike>[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isResolverCached(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    marketState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    messageSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setMessageSender(
      sender: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setProxy(
      _proxy: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitOffchainDelayedOrder(
      sizeDelta: PromiseOrValue<BigNumberish>,
      priceImpactDelta: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    submitOffchainDelayedOrderWithTracking(
      sizeDelta: PromiseOrValue<BigNumberish>,
      priceImpactDelta: PromiseOrValue<BigNumberish>,
      trackingCode: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
