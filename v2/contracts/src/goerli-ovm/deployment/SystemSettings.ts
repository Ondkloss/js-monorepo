// !!! DO NOT EDIT !!! Automatically generated file

export const name = 'SystemSettings';
export const address = '0x418B1025f74E8BB889D35e9F37205d587743Ec9b';
export const source = 'SystemSettings';
export const abi = [
  'constructor(address _owner, address _resolver)',
  'event AggregatorWarningFlagsUpdated(address flags)',
  'event AtomicEquivalentForDexPricingUpdated(bytes32 synthKey, address equivalent)',
  'event AtomicExchangeFeeUpdated(bytes32 synthKey, uint256 newExchangeFeeRate)',
  'event AtomicMaxVolumePerBlockUpdated(uint256 newMaxVolume)',
  'event AtomicTwapWindowUpdated(uint256 newWindow)',
  'event AtomicVolatilityConsiderationWindowUpdated(bytes32 synthKey, uint256 newVolatilityConsiderationWindow)',
  'event AtomicVolatilityUpdateThresholdUpdated(bytes32 synthKey, uint256 newVolatilityUpdateThreshold)',
  'event CacheUpdated(bytes32 name, address destination)',
  'event CollapseFeeRateUpdated(uint256 collapseFeeRate)',
  'event CrossChainSynthTransferEnabledUpdated(bytes32 synthKey, uint256 value)',
  'event CrossDomainMessageGasLimitChanged(uint8 gasLimitType, uint256 newLimit)',
  'event DebtSnapshotStaleTimeUpdated(uint256 debtSnapshotStaleTime)',
  'event EtherWrapperBurnFeeRateUpdated(uint256 rate)',
  'event EtherWrapperMaxETHUpdated(uint256 maxETH)',
  'event EtherWrapperMintFeeRateUpdated(uint256 rate)',
  'event ExchangeDynamicFeeRoundsUpdated(uint256 dynamicFeeRounds)',
  'event ExchangeDynamicFeeThresholdUpdated(uint256 dynamicFeeThreshold)',
  'event ExchangeDynamicFeeWeightDecayUpdated(uint256 dynamicFeeWeightDecay)',
  'event ExchangeFeeUpdated(bytes32 synthKey, uint256 newExchangeFeeRate)',
  'event ExchangeMaxDynamicFeeUpdated(uint256 maxDynamicFee)',
  'event FeePeriodDurationUpdated(uint256 newFeePeriodDuration)',
  'event FlagRewardUpdated(uint256 newReward)',
  'event InteractionDelayUpdated(uint256 interactionDelay)',
  'event IssuanceRatioUpdated(uint256 newRatio)',
  'event LiquidateRewardUpdated(uint256 newReward)',
  'event LiquidationDelayUpdated(uint256 newDelay)',
  'event LiquidationEscrowDurationUpdated(uint256 newDuration)',
  'event LiquidationPenaltyUpdated(uint256 newPenalty)',
  'event LiquidationRatioUpdated(uint256 newRatio)',
  'event MinimumStakeTimeUpdated(uint256 minimumStakeTime)',
  'event OwnerChanged(address oldOwner, address newOwner)',
  'event OwnerNominated(address newOwner)',
  'event PriceDeviationThresholdUpdated(uint256 threshold)',
  'event PureChainlinkPriceForAtomicSwapsEnabledUpdated(bytes32 synthKey, bool enabled)',
  'event RateStalePeriodUpdated(uint256 rateStalePeriod)',
  'event SelfLiquidationPenaltyUpdated(uint256 newPenalty)',
  'event SnxLiquidationPenaltyUpdated(uint256 newPenalty)',
  'event TargetThresholdUpdated(uint256 newTargetThreshold)',
  'event TradingRewardsEnabled(bool enabled)',
  'event WaitingPeriodSecsUpdated(uint256 waitingPeriodSecs)',
  'event WrapperBurnFeeRateUpdated(address wrapper, int256 rate)',
  'event WrapperMaxTokenAmountUpdated(address wrapper, uint256 maxTokenAmount)',
  'event WrapperMintFeeRateUpdated(address wrapper, int256 rate)',
  'function CONTRACT_NAME() view returns (bytes32)',
  'function acceptOwnership()',
  'function aggregatorWarningFlags() view returns (address)',
  'function atomicEquivalentForDexPricing(bytes32 currencyKey) view returns (address)',
  'function atomicExchangeFeeRate(bytes32 currencyKey) view returns (uint256)',
  'function atomicMaxVolumePerBlock() view returns (uint256)',
  'function atomicTwapWindow() view returns (uint256)',
  'function atomicVolatilityConsiderationWindow(bytes32 currencyKey) view returns (uint256)',
  'function atomicVolatilityUpdateThreshold(bytes32 currencyKey) view returns (uint256)',
  'function collapseFeeRate(address collateral) view returns (uint256)',
  'function crossChainSynthTransferEnabled(bytes32 currencyKey) view returns (uint256)',
  'function crossDomainMessageGasLimit(uint8 gasLimitType) view returns (uint256)',
  'function debtSnapshotStaleTime() view returns (uint256)',
  'function etherWrapperBurnFeeRate() view returns (uint256)',
  'function etherWrapperMaxETH() view returns (uint256)',
  'function etherWrapperMintFeeRate() view returns (uint256)',
  'function exchangeDynamicFeeRounds() view returns (uint256)',
  'function exchangeDynamicFeeThreshold() view returns (uint256)',
  'function exchangeDynamicFeeWeightDecay() view returns (uint256)',
  'function exchangeFeeRate(bytes32 currencyKey) view returns (uint256)',
  'function exchangeMaxDynamicFee() view returns (uint256)',
  'function feePeriodDuration() view returns (uint256)',
  'function flagReward() view returns (uint256)',
  'function interactionDelay(address collateral) view returns (uint256)',
  'function isResolverCached() view returns (bool)',
  'function issuanceRatio() view returns (uint256)',
  'function liquidateReward() view returns (uint256)',
  'function liquidationDelay() view returns (uint256)',
  'function liquidationEscrowDuration() view returns (uint256)',
  'function liquidationPenalty() view returns (uint256)',
  'function liquidationRatio() view returns (uint256)',
  'function minimumStakeTime() view returns (uint256)',
  'function nominateNewOwner(address _owner)',
  'function nominatedOwner() view returns (address)',
  'function owner() view returns (address)',
  'function priceDeviationThresholdFactor() view returns (uint256)',
  'function pureChainlinkPriceForAtomicSwapsEnabled(bytes32 currencyKey) view returns (bool)',
  'function rateStalePeriod() view returns (uint256)',
  'function rebuildCache()',
  'function resolver() view returns (address)',
  'function resolverAddressesRequired() view returns (bytes32[] addresses)',
  'function selfLiquidationPenalty() view returns (uint256)',
  'function setAggregatorWarningFlags(address _flags)',
  'function setAtomicEquivalentForDexPricing(bytes32 _currencyKey, address _equivalent)',
  'function setAtomicExchangeFeeRate(bytes32 _currencyKey, uint256 _exchangeFeeRate)',
  'function setAtomicMaxVolumePerBlock(uint256 _maxVolume)',
  'function setAtomicTwapWindow(uint256 _window)',
  'function setAtomicVolatilityConsiderationWindow(bytes32 _currencyKey, uint256 _window)',
  'function setAtomicVolatilityUpdateThreshold(bytes32 _currencyKey, uint256 _threshold)',
  'function setCollapseFeeRate(address _collateral, uint256 _collapseFeeRate)',
  'function setCrossChainSynthTransferEnabled(bytes32 _currencyKey, uint256 _value)',
  'function setCrossDomainMessageGasLimit(uint8 _gasLimitType, uint256 _crossDomainMessageGasLimit)',
  'function setDebtSnapshotStaleTime(uint256 _seconds)',
  'function setEtherWrapperBurnFeeRate(uint256 _rate)',
  'function setEtherWrapperMaxETH(uint256 _maxETH)',
  'function setEtherWrapperMintFeeRate(uint256 _rate)',
  'function setExchangeDynamicFeeRounds(uint256 rounds)',
  'function setExchangeDynamicFeeThreshold(uint256 threshold)',
  'function setExchangeDynamicFeeWeightDecay(uint256 weightDecay)',
  'function setExchangeFeeRateForSynths(bytes32[] synthKeys, uint256[] exchangeFeeRates)',
  'function setExchangeMaxDynamicFee(uint256 maxFee)',
  'function setFeePeriodDuration(uint256 _feePeriodDuration)',
  'function setFlagReward(uint256 reward)',
  'function setInteractionDelay(address _collateral, uint256 _interactionDelay)',
  'function setIssuanceRatio(uint256 ratio)',
  'function setLiquidateReward(uint256 reward)',
  'function setLiquidationDelay(uint256 time)',
  'function setLiquidationEscrowDuration(uint256 duration)',
  'function setLiquidationPenalty(uint256 penalty)',
  'function setLiquidationRatio(uint256 _liquidationRatio)',
  'function setMinimumStakeTime(uint256 _seconds)',
  'function setPriceDeviationThresholdFactor(uint256 _priceDeviationThresholdFactor)',
  'function setPureChainlinkPriceForAtomicSwapsEnabled(bytes32 _currencyKey, bool _enabled)',
  'function setRateStalePeriod(uint256 period)',
  'function setSelfLiquidationPenalty(uint256 penalty)',
  'function setSnxLiquidationPenalty(uint256 penalty)',
  'function setTargetThreshold(uint256 percent)',
  'function setTradingRewardsEnabled(bool _tradingRewardsEnabled)',
  'function setWaitingPeriodSecs(uint256 _waitingPeriodSecs)',
  'function setWrapperBurnFeeRate(address _wrapper, int256 _rate)',
  'function setWrapperMaxTokenAmount(address _wrapper, uint256 _maxTokenAmount)',
  'function setWrapperMintFeeRate(address _wrapper, int256 _rate)',
  'function snxLiquidationPenalty() view returns (uint256)',
  'function targetThreshold() view returns (uint256)',
  'function tradingRewardsEnabled() view returns (bool)',
  'function waitingPeriodSecs() view returns (uint256)',
  'function wrapperBurnFeeRate(address wrapper) view returns (int256)',
  'function wrapperMaxTokenAmount(address wrapper) view returns (uint256)',
  'function wrapperMintFeeRate(address wrapper) view returns (int256)',
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

export interface SystemSettingsInterface extends utils.Interface {
  functions: {
    'CONTRACT_NAME()': FunctionFragment;
    'acceptOwnership()': FunctionFragment;
    'aggregatorWarningFlags()': FunctionFragment;
    'atomicEquivalentForDexPricing(bytes32)': FunctionFragment;
    'atomicExchangeFeeRate(bytes32)': FunctionFragment;
    'atomicMaxVolumePerBlock()': FunctionFragment;
    'atomicTwapWindow()': FunctionFragment;
    'atomicVolatilityConsiderationWindow(bytes32)': FunctionFragment;
    'atomicVolatilityUpdateThreshold(bytes32)': FunctionFragment;
    'collapseFeeRate(address)': FunctionFragment;
    'crossChainSynthTransferEnabled(bytes32)': FunctionFragment;
    'crossDomainMessageGasLimit(uint8)': FunctionFragment;
    'debtSnapshotStaleTime()': FunctionFragment;
    'etherWrapperBurnFeeRate()': FunctionFragment;
    'etherWrapperMaxETH()': FunctionFragment;
    'etherWrapperMintFeeRate()': FunctionFragment;
    'exchangeDynamicFeeRounds()': FunctionFragment;
    'exchangeDynamicFeeThreshold()': FunctionFragment;
    'exchangeDynamicFeeWeightDecay()': FunctionFragment;
    'exchangeFeeRate(bytes32)': FunctionFragment;
    'exchangeMaxDynamicFee()': FunctionFragment;
    'feePeriodDuration()': FunctionFragment;
    'flagReward()': FunctionFragment;
    'interactionDelay(address)': FunctionFragment;
    'isResolverCached()': FunctionFragment;
    'issuanceRatio()': FunctionFragment;
    'liquidateReward()': FunctionFragment;
    'liquidationDelay()': FunctionFragment;
    'liquidationEscrowDuration()': FunctionFragment;
    'liquidationPenalty()': FunctionFragment;
    'liquidationRatio()': FunctionFragment;
    'minimumStakeTime()': FunctionFragment;
    'nominateNewOwner(address)': FunctionFragment;
    'nominatedOwner()': FunctionFragment;
    'owner()': FunctionFragment;
    'priceDeviationThresholdFactor()': FunctionFragment;
    'pureChainlinkPriceForAtomicSwapsEnabled(bytes32)': FunctionFragment;
    'rateStalePeriod()': FunctionFragment;
    'rebuildCache()': FunctionFragment;
    'resolver()': FunctionFragment;
    'resolverAddressesRequired()': FunctionFragment;
    'selfLiquidationPenalty()': FunctionFragment;
    'setAggregatorWarningFlags(address)': FunctionFragment;
    'setAtomicEquivalentForDexPricing(bytes32,address)': FunctionFragment;
    'setAtomicExchangeFeeRate(bytes32,uint256)': FunctionFragment;
    'setAtomicMaxVolumePerBlock(uint256)': FunctionFragment;
    'setAtomicTwapWindow(uint256)': FunctionFragment;
    'setAtomicVolatilityConsiderationWindow(bytes32,uint256)': FunctionFragment;
    'setAtomicVolatilityUpdateThreshold(bytes32,uint256)': FunctionFragment;
    'setCollapseFeeRate(address,uint256)': FunctionFragment;
    'setCrossChainSynthTransferEnabled(bytes32,uint256)': FunctionFragment;
    'setCrossDomainMessageGasLimit(uint8,uint256)': FunctionFragment;
    'setDebtSnapshotStaleTime(uint256)': FunctionFragment;
    'setEtherWrapperBurnFeeRate(uint256)': FunctionFragment;
    'setEtherWrapperMaxETH(uint256)': FunctionFragment;
    'setEtherWrapperMintFeeRate(uint256)': FunctionFragment;
    'setExchangeDynamicFeeRounds(uint256)': FunctionFragment;
    'setExchangeDynamicFeeThreshold(uint256)': FunctionFragment;
    'setExchangeDynamicFeeWeightDecay(uint256)': FunctionFragment;
    'setExchangeFeeRateForSynths(bytes32[],uint256[])': FunctionFragment;
    'setExchangeMaxDynamicFee(uint256)': FunctionFragment;
    'setFeePeriodDuration(uint256)': FunctionFragment;
    'setFlagReward(uint256)': FunctionFragment;
    'setInteractionDelay(address,uint256)': FunctionFragment;
    'setIssuanceRatio(uint256)': FunctionFragment;
    'setLiquidateReward(uint256)': FunctionFragment;
    'setLiquidationDelay(uint256)': FunctionFragment;
    'setLiquidationEscrowDuration(uint256)': FunctionFragment;
    'setLiquidationPenalty(uint256)': FunctionFragment;
    'setLiquidationRatio(uint256)': FunctionFragment;
    'setMinimumStakeTime(uint256)': FunctionFragment;
    'setPriceDeviationThresholdFactor(uint256)': FunctionFragment;
    'setPureChainlinkPriceForAtomicSwapsEnabled(bytes32,bool)': FunctionFragment;
    'setRateStalePeriod(uint256)': FunctionFragment;
    'setSelfLiquidationPenalty(uint256)': FunctionFragment;
    'setSnxLiquidationPenalty(uint256)': FunctionFragment;
    'setTargetThreshold(uint256)': FunctionFragment;
    'setTradingRewardsEnabled(bool)': FunctionFragment;
    'setWaitingPeriodSecs(uint256)': FunctionFragment;
    'setWrapperBurnFeeRate(address,int256)': FunctionFragment;
    'setWrapperMaxTokenAmount(address,uint256)': FunctionFragment;
    'setWrapperMintFeeRate(address,int256)': FunctionFragment;
    'snxLiquidationPenalty()': FunctionFragment;
    'targetThreshold()': FunctionFragment;
    'tradingRewardsEnabled()': FunctionFragment;
    'waitingPeriodSecs()': FunctionFragment;
    'wrapperBurnFeeRate(address)': FunctionFragment;
    'wrapperMaxTokenAmount(address)': FunctionFragment;
    'wrapperMintFeeRate(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'CONTRACT_NAME'
      | 'acceptOwnership'
      | 'aggregatorWarningFlags'
      | 'atomicEquivalentForDexPricing'
      | 'atomicExchangeFeeRate'
      | 'atomicMaxVolumePerBlock'
      | 'atomicTwapWindow'
      | 'atomicVolatilityConsiderationWindow'
      | 'atomicVolatilityUpdateThreshold'
      | 'collapseFeeRate'
      | 'crossChainSynthTransferEnabled'
      | 'crossDomainMessageGasLimit'
      | 'debtSnapshotStaleTime'
      | 'etherWrapperBurnFeeRate'
      | 'etherWrapperMaxETH'
      | 'etherWrapperMintFeeRate'
      | 'exchangeDynamicFeeRounds'
      | 'exchangeDynamicFeeThreshold'
      | 'exchangeDynamicFeeWeightDecay'
      | 'exchangeFeeRate'
      | 'exchangeMaxDynamicFee'
      | 'feePeriodDuration'
      | 'flagReward'
      | 'interactionDelay'
      | 'isResolverCached'
      | 'issuanceRatio'
      | 'liquidateReward'
      | 'liquidationDelay'
      | 'liquidationEscrowDuration'
      | 'liquidationPenalty'
      | 'liquidationRatio'
      | 'minimumStakeTime'
      | 'nominateNewOwner'
      | 'nominatedOwner'
      | 'owner'
      | 'priceDeviationThresholdFactor'
      | 'pureChainlinkPriceForAtomicSwapsEnabled'
      | 'rateStalePeriod'
      | 'rebuildCache'
      | 'resolver'
      | 'resolverAddressesRequired'
      | 'selfLiquidationPenalty'
      | 'setAggregatorWarningFlags'
      | 'setAtomicEquivalentForDexPricing'
      | 'setAtomicExchangeFeeRate'
      | 'setAtomicMaxVolumePerBlock'
      | 'setAtomicTwapWindow'
      | 'setAtomicVolatilityConsiderationWindow'
      | 'setAtomicVolatilityUpdateThreshold'
      | 'setCollapseFeeRate'
      | 'setCrossChainSynthTransferEnabled'
      | 'setCrossDomainMessageGasLimit'
      | 'setDebtSnapshotStaleTime'
      | 'setEtherWrapperBurnFeeRate'
      | 'setEtherWrapperMaxETH'
      | 'setEtherWrapperMintFeeRate'
      | 'setExchangeDynamicFeeRounds'
      | 'setExchangeDynamicFeeThreshold'
      | 'setExchangeDynamicFeeWeightDecay'
      | 'setExchangeFeeRateForSynths'
      | 'setExchangeMaxDynamicFee'
      | 'setFeePeriodDuration'
      | 'setFlagReward'
      | 'setInteractionDelay'
      | 'setIssuanceRatio'
      | 'setLiquidateReward'
      | 'setLiquidationDelay'
      | 'setLiquidationEscrowDuration'
      | 'setLiquidationPenalty'
      | 'setLiquidationRatio'
      | 'setMinimumStakeTime'
      | 'setPriceDeviationThresholdFactor'
      | 'setPureChainlinkPriceForAtomicSwapsEnabled'
      | 'setRateStalePeriod'
      | 'setSelfLiquidationPenalty'
      | 'setSnxLiquidationPenalty'
      | 'setTargetThreshold'
      | 'setTradingRewardsEnabled'
      | 'setWaitingPeriodSecs'
      | 'setWrapperBurnFeeRate'
      | 'setWrapperMaxTokenAmount'
      | 'setWrapperMintFeeRate'
      | 'snxLiquidationPenalty'
      | 'targetThreshold'
      | 'tradingRewardsEnabled'
      | 'waitingPeriodSecs'
      | 'wrapperBurnFeeRate'
      | 'wrapperMaxTokenAmount'
      | 'wrapperMintFeeRate'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'CONTRACT_NAME', values?: undefined): string;
  encodeFunctionData(functionFragment: 'acceptOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'aggregatorWarningFlags', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'atomicEquivalentForDexPricing',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'atomicExchangeFeeRate',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'atomicMaxVolumePerBlock', values?: undefined): string;
  encodeFunctionData(functionFragment: 'atomicTwapWindow', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'atomicVolatilityConsiderationWindow',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'atomicVolatilityUpdateThreshold',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'collapseFeeRate', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'crossChainSynthTransferEnabled',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: 'crossDomainMessageGasLimit',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'debtSnapshotStaleTime', values?: undefined): string;
  encodeFunctionData(functionFragment: 'etherWrapperBurnFeeRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'etherWrapperMaxETH', values?: undefined): string;
  encodeFunctionData(functionFragment: 'etherWrapperMintFeeRate', values?: undefined): string;
  encodeFunctionData(functionFragment: 'exchangeDynamicFeeRounds', values?: undefined): string;
  encodeFunctionData(functionFragment: 'exchangeDynamicFeeThreshold', values?: undefined): string;
  encodeFunctionData(functionFragment: 'exchangeDynamicFeeWeightDecay', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'exchangeFeeRate',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'exchangeMaxDynamicFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'feePeriodDuration', values?: undefined): string;
  encodeFunctionData(functionFragment: 'flagReward', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'interactionDelay',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'isResolverCached', values?: undefined): string;
  encodeFunctionData(functionFragment: 'issuanceRatio', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidateReward', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidationDelay', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidationEscrowDuration', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidationPenalty', values?: undefined): string;
  encodeFunctionData(functionFragment: 'liquidationRatio', values?: undefined): string;
  encodeFunctionData(functionFragment: 'minimumStakeTime', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'nominateNewOwner',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: 'nominatedOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'priceDeviationThresholdFactor', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'pureChainlinkPriceForAtomicSwapsEnabled',
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: 'rateStalePeriod', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rebuildCache', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolver', values?: undefined): string;
  encodeFunctionData(functionFragment: 'resolverAddressesRequired', values?: undefined): string;
  encodeFunctionData(functionFragment: 'selfLiquidationPenalty', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setAggregatorWarningFlags',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setAtomicEquivalentForDexPricing',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setAtomicExchangeFeeRate',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setAtomicMaxVolumePerBlock',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setAtomicTwapWindow',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setAtomicVolatilityConsiderationWindow',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setAtomicVolatilityUpdateThreshold',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setCollapseFeeRate',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setCrossChainSynthTransferEnabled',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setCrossDomainMessageGasLimit',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setDebtSnapshotStaleTime',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setEtherWrapperBurnFeeRate',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setEtherWrapperMaxETH',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setEtherWrapperMintFeeRate',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setExchangeDynamicFeeRounds',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setExchangeDynamicFeeThreshold',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setExchangeDynamicFeeWeightDecay',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setExchangeFeeRateForSynths',
    values: [PromiseOrValue<BytesLike>[], PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: 'setExchangeMaxDynamicFee',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setFeePeriodDuration',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setFlagReward',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setInteractionDelay',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setIssuanceRatio',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setLiquidateReward',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setLiquidationDelay',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setLiquidationEscrowDuration',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setLiquidationPenalty',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setLiquidationRatio',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setMinimumStakeTime',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setPriceDeviationThresholdFactor',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setPureChainlinkPriceForAtomicSwapsEnabled',
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setRateStalePeriod',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setSelfLiquidationPenalty',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setSnxLiquidationPenalty',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTargetThreshold',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setTradingRewardsEnabled',
    values: [PromiseOrValue<boolean>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setWaitingPeriodSecs',
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setWrapperBurnFeeRate',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setWrapperMaxTokenAmount',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: 'setWrapperMintFeeRate',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: 'snxLiquidationPenalty', values?: undefined): string;
  encodeFunctionData(functionFragment: 'targetThreshold', values?: undefined): string;
  encodeFunctionData(functionFragment: 'tradingRewardsEnabled', values?: undefined): string;
  encodeFunctionData(functionFragment: 'waitingPeriodSecs', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'wrapperBurnFeeRate',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'wrapperMaxTokenAmount',
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: 'wrapperMintFeeRate',
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: 'CONTRACT_NAME', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'acceptOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'aggregatorWarningFlags', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'atomicEquivalentForDexPricing', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'atomicExchangeFeeRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'atomicMaxVolumePerBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'atomicTwapWindow', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'atomicVolatilityConsiderationWindow',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'atomicVolatilityUpdateThreshold',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'collapseFeeRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'crossChainSynthTransferEnabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'crossDomainMessageGasLimit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'debtSnapshotStaleTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'etherWrapperBurnFeeRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'etherWrapperMaxETH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'etherWrapperMintFeeRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchangeDynamicFeeRounds', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchangeDynamicFeeThreshold', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchangeDynamicFeeWeightDecay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchangeFeeRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'exchangeMaxDynamicFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'feePeriodDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'flagReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'interactionDelay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isResolverCached', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'issuanceRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidateReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidationDelay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidationEscrowDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidationPenalty', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'liquidationRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minimumStakeTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominateNewOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'nominatedOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'priceDeviationThresholdFactor', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'pureChainlinkPriceForAtomicSwapsEnabled',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'rateStalePeriod', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rebuildCache', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolver', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'resolverAddressesRequired', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'selfLiquidationPenalty', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAggregatorWarningFlags', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setAtomicEquivalentForDexPricing',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setAtomicExchangeFeeRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAtomicMaxVolumePerBlock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAtomicTwapWindow', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setAtomicVolatilityConsiderationWindow',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setAtomicVolatilityUpdateThreshold',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setCollapseFeeRate', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setCrossChainSynthTransferEnabled',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setCrossDomainMessageGasLimit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setDebtSnapshotStaleTime', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setEtherWrapperBurnFeeRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setEtherWrapperMaxETH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setEtherWrapperMintFeeRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setExchangeDynamicFeeRounds', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setExchangeDynamicFeeThreshold', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setExchangeDynamicFeeWeightDecay',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setExchangeFeeRateForSynths', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setExchangeMaxDynamicFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFeePeriodDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setFlagReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setInteractionDelay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setIssuanceRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setLiquidateReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setLiquidationDelay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setLiquidationEscrowDuration', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setLiquidationPenalty', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setLiquidationRatio', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMinimumStakeTime', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setPriceDeviationThresholdFactor',
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setPureChainlinkPriceForAtomicSwapsEnabled',
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: 'setRateStalePeriod', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setSelfLiquidationPenalty', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setSnxLiquidationPenalty', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTargetThreshold', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setTradingRewardsEnabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setWaitingPeriodSecs', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setWrapperBurnFeeRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setWrapperMaxTokenAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setWrapperMintFeeRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'snxLiquidationPenalty', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'targetThreshold', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tradingRewardsEnabled', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'waitingPeriodSecs', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'wrapperBurnFeeRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'wrapperMaxTokenAmount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'wrapperMintFeeRate', data: BytesLike): Result;

  events: {
    'AggregatorWarningFlagsUpdated(address)': EventFragment;
    'AtomicEquivalentForDexPricingUpdated(bytes32,address)': EventFragment;
    'AtomicExchangeFeeUpdated(bytes32,uint256)': EventFragment;
    'AtomicMaxVolumePerBlockUpdated(uint256)': EventFragment;
    'AtomicTwapWindowUpdated(uint256)': EventFragment;
    'AtomicVolatilityConsiderationWindowUpdated(bytes32,uint256)': EventFragment;
    'AtomicVolatilityUpdateThresholdUpdated(bytes32,uint256)': EventFragment;
    'CacheUpdated(bytes32,address)': EventFragment;
    'CollapseFeeRateUpdated(uint256)': EventFragment;
    'CrossChainSynthTransferEnabledUpdated(bytes32,uint256)': EventFragment;
    'CrossDomainMessageGasLimitChanged(uint8,uint256)': EventFragment;
    'DebtSnapshotStaleTimeUpdated(uint256)': EventFragment;
    'EtherWrapperBurnFeeRateUpdated(uint256)': EventFragment;
    'EtherWrapperMaxETHUpdated(uint256)': EventFragment;
    'EtherWrapperMintFeeRateUpdated(uint256)': EventFragment;
    'ExchangeDynamicFeeRoundsUpdated(uint256)': EventFragment;
    'ExchangeDynamicFeeThresholdUpdated(uint256)': EventFragment;
    'ExchangeDynamicFeeWeightDecayUpdated(uint256)': EventFragment;
    'ExchangeFeeUpdated(bytes32,uint256)': EventFragment;
    'ExchangeMaxDynamicFeeUpdated(uint256)': EventFragment;
    'FeePeriodDurationUpdated(uint256)': EventFragment;
    'FlagRewardUpdated(uint256)': EventFragment;
    'InteractionDelayUpdated(uint256)': EventFragment;
    'IssuanceRatioUpdated(uint256)': EventFragment;
    'LiquidateRewardUpdated(uint256)': EventFragment;
    'LiquidationDelayUpdated(uint256)': EventFragment;
    'LiquidationEscrowDurationUpdated(uint256)': EventFragment;
    'LiquidationPenaltyUpdated(uint256)': EventFragment;
    'LiquidationRatioUpdated(uint256)': EventFragment;
    'MinimumStakeTimeUpdated(uint256)': EventFragment;
    'OwnerChanged(address,address)': EventFragment;
    'OwnerNominated(address)': EventFragment;
    'PriceDeviationThresholdUpdated(uint256)': EventFragment;
    'PureChainlinkPriceForAtomicSwapsEnabledUpdated(bytes32,bool)': EventFragment;
    'RateStalePeriodUpdated(uint256)': EventFragment;
    'SelfLiquidationPenaltyUpdated(uint256)': EventFragment;
    'SnxLiquidationPenaltyUpdated(uint256)': EventFragment;
    'TargetThresholdUpdated(uint256)': EventFragment;
    'TradingRewardsEnabled(bool)': EventFragment;
    'WaitingPeriodSecsUpdated(uint256)': EventFragment;
    'WrapperBurnFeeRateUpdated(address,int256)': EventFragment;
    'WrapperMaxTokenAmountUpdated(address,uint256)': EventFragment;
    'WrapperMintFeeRateUpdated(address,int256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AggregatorWarningFlagsUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AtomicEquivalentForDexPricingUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AtomicExchangeFeeUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AtomicMaxVolumePerBlockUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AtomicTwapWindowUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AtomicVolatilityConsiderationWindowUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'AtomicVolatilityUpdateThresholdUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CacheUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CollapseFeeRateUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CrossChainSynthTransferEnabledUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'CrossDomainMessageGasLimitChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'DebtSnapshotStaleTimeUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EtherWrapperBurnFeeRateUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EtherWrapperMaxETHUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'EtherWrapperMintFeeRateUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ExchangeDynamicFeeRoundsUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ExchangeDynamicFeeThresholdUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ExchangeDynamicFeeWeightDecayUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ExchangeFeeUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ExchangeMaxDynamicFeeUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'FeePeriodDurationUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'FlagRewardUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'InteractionDelayUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'IssuanceRatioUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidateRewardUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidationDelayUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidationEscrowDurationUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidationPenaltyUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LiquidationRatioUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'MinimumStakeTimeUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerChanged'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerNominated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PriceDeviationThresholdUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'PureChainlinkPriceForAtomicSwapsEnabledUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RateStalePeriodUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SelfLiquidationPenaltyUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'SnxLiquidationPenaltyUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TargetThresholdUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TradingRewardsEnabled'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'WaitingPeriodSecsUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'WrapperBurnFeeRateUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'WrapperMaxTokenAmountUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'WrapperMintFeeRateUpdated'): EventFragment;
}

export interface AggregatorWarningFlagsUpdatedEventObject {
  flags: string;
}
export type AggregatorWarningFlagsUpdatedEvent = TypedEvent<
  [string],
  AggregatorWarningFlagsUpdatedEventObject
>;

export type AggregatorWarningFlagsUpdatedEventFilter =
  TypedEventFilter<AggregatorWarningFlagsUpdatedEvent>;

export interface AtomicEquivalentForDexPricingUpdatedEventObject {
  synthKey: string;
  equivalent: string;
}
export type AtomicEquivalentForDexPricingUpdatedEvent = TypedEvent<
  [string, string],
  AtomicEquivalentForDexPricingUpdatedEventObject
>;

export type AtomicEquivalentForDexPricingUpdatedEventFilter =
  TypedEventFilter<AtomicEquivalentForDexPricingUpdatedEvent>;

export interface AtomicExchangeFeeUpdatedEventObject {
  synthKey: string;
  newExchangeFeeRate: BigNumber;
}
export type AtomicExchangeFeeUpdatedEvent = TypedEvent<
  [string, BigNumber],
  AtomicExchangeFeeUpdatedEventObject
>;

export type AtomicExchangeFeeUpdatedEventFilter = TypedEventFilter<AtomicExchangeFeeUpdatedEvent>;

export interface AtomicMaxVolumePerBlockUpdatedEventObject {
  newMaxVolume: BigNumber;
}
export type AtomicMaxVolumePerBlockUpdatedEvent = TypedEvent<
  [BigNumber],
  AtomicMaxVolumePerBlockUpdatedEventObject
>;

export type AtomicMaxVolumePerBlockUpdatedEventFilter =
  TypedEventFilter<AtomicMaxVolumePerBlockUpdatedEvent>;

export interface AtomicTwapWindowUpdatedEventObject {
  newWindow: BigNumber;
}
export type AtomicTwapWindowUpdatedEvent = TypedEvent<
  [BigNumber],
  AtomicTwapWindowUpdatedEventObject
>;

export type AtomicTwapWindowUpdatedEventFilter = TypedEventFilter<AtomicTwapWindowUpdatedEvent>;

export interface AtomicVolatilityConsiderationWindowUpdatedEventObject {
  synthKey: string;
  newVolatilityConsiderationWindow: BigNumber;
}
export type AtomicVolatilityConsiderationWindowUpdatedEvent = TypedEvent<
  [string, BigNumber],
  AtomicVolatilityConsiderationWindowUpdatedEventObject
>;

export type AtomicVolatilityConsiderationWindowUpdatedEventFilter =
  TypedEventFilter<AtomicVolatilityConsiderationWindowUpdatedEvent>;

export interface AtomicVolatilityUpdateThresholdUpdatedEventObject {
  synthKey: string;
  newVolatilityUpdateThreshold: BigNumber;
}
export type AtomicVolatilityUpdateThresholdUpdatedEvent = TypedEvent<
  [string, BigNumber],
  AtomicVolatilityUpdateThresholdUpdatedEventObject
>;

export type AtomicVolatilityUpdateThresholdUpdatedEventFilter =
  TypedEventFilter<AtomicVolatilityUpdateThresholdUpdatedEvent>;

export interface CacheUpdatedEventObject {
  name: string;
  destination: string;
}
export type CacheUpdatedEvent = TypedEvent<[string, string], CacheUpdatedEventObject>;

export type CacheUpdatedEventFilter = TypedEventFilter<CacheUpdatedEvent>;

export interface CollapseFeeRateUpdatedEventObject {
  collapseFeeRate: BigNumber;
}
export type CollapseFeeRateUpdatedEvent = TypedEvent<
  [BigNumber],
  CollapseFeeRateUpdatedEventObject
>;

export type CollapseFeeRateUpdatedEventFilter = TypedEventFilter<CollapseFeeRateUpdatedEvent>;

export interface CrossChainSynthTransferEnabledUpdatedEventObject {
  synthKey: string;
  value: BigNumber;
}
export type CrossChainSynthTransferEnabledUpdatedEvent = TypedEvent<
  [string, BigNumber],
  CrossChainSynthTransferEnabledUpdatedEventObject
>;

export type CrossChainSynthTransferEnabledUpdatedEventFilter =
  TypedEventFilter<CrossChainSynthTransferEnabledUpdatedEvent>;

export interface CrossDomainMessageGasLimitChangedEventObject {
  gasLimitType: number;
  newLimit: BigNumber;
}
export type CrossDomainMessageGasLimitChangedEvent = TypedEvent<
  [number, BigNumber],
  CrossDomainMessageGasLimitChangedEventObject
>;

export type CrossDomainMessageGasLimitChangedEventFilter =
  TypedEventFilter<CrossDomainMessageGasLimitChangedEvent>;

export interface DebtSnapshotStaleTimeUpdatedEventObject {
  debtSnapshotStaleTime: BigNumber;
}
export type DebtSnapshotStaleTimeUpdatedEvent = TypedEvent<
  [BigNumber],
  DebtSnapshotStaleTimeUpdatedEventObject
>;

export type DebtSnapshotStaleTimeUpdatedEventFilter =
  TypedEventFilter<DebtSnapshotStaleTimeUpdatedEvent>;

export interface EtherWrapperBurnFeeRateUpdatedEventObject {
  rate: BigNumber;
}
export type EtherWrapperBurnFeeRateUpdatedEvent = TypedEvent<
  [BigNumber],
  EtherWrapperBurnFeeRateUpdatedEventObject
>;

export type EtherWrapperBurnFeeRateUpdatedEventFilter =
  TypedEventFilter<EtherWrapperBurnFeeRateUpdatedEvent>;

export interface EtherWrapperMaxETHUpdatedEventObject {
  maxETH: BigNumber;
}
export type EtherWrapperMaxETHUpdatedEvent = TypedEvent<
  [BigNumber],
  EtherWrapperMaxETHUpdatedEventObject
>;

export type EtherWrapperMaxETHUpdatedEventFilter = TypedEventFilter<EtherWrapperMaxETHUpdatedEvent>;

export interface EtherWrapperMintFeeRateUpdatedEventObject {
  rate: BigNumber;
}
export type EtherWrapperMintFeeRateUpdatedEvent = TypedEvent<
  [BigNumber],
  EtherWrapperMintFeeRateUpdatedEventObject
>;

export type EtherWrapperMintFeeRateUpdatedEventFilter =
  TypedEventFilter<EtherWrapperMintFeeRateUpdatedEvent>;

export interface ExchangeDynamicFeeRoundsUpdatedEventObject {
  dynamicFeeRounds: BigNumber;
}
export type ExchangeDynamicFeeRoundsUpdatedEvent = TypedEvent<
  [BigNumber],
  ExchangeDynamicFeeRoundsUpdatedEventObject
>;

export type ExchangeDynamicFeeRoundsUpdatedEventFilter =
  TypedEventFilter<ExchangeDynamicFeeRoundsUpdatedEvent>;

export interface ExchangeDynamicFeeThresholdUpdatedEventObject {
  dynamicFeeThreshold: BigNumber;
}
export type ExchangeDynamicFeeThresholdUpdatedEvent = TypedEvent<
  [BigNumber],
  ExchangeDynamicFeeThresholdUpdatedEventObject
>;

export type ExchangeDynamicFeeThresholdUpdatedEventFilter =
  TypedEventFilter<ExchangeDynamicFeeThresholdUpdatedEvent>;

export interface ExchangeDynamicFeeWeightDecayUpdatedEventObject {
  dynamicFeeWeightDecay: BigNumber;
}
export type ExchangeDynamicFeeWeightDecayUpdatedEvent = TypedEvent<
  [BigNumber],
  ExchangeDynamicFeeWeightDecayUpdatedEventObject
>;

export type ExchangeDynamicFeeWeightDecayUpdatedEventFilter =
  TypedEventFilter<ExchangeDynamicFeeWeightDecayUpdatedEvent>;

export interface ExchangeFeeUpdatedEventObject {
  synthKey: string;
  newExchangeFeeRate: BigNumber;
}
export type ExchangeFeeUpdatedEvent = TypedEvent<
  [string, BigNumber],
  ExchangeFeeUpdatedEventObject
>;

export type ExchangeFeeUpdatedEventFilter = TypedEventFilter<ExchangeFeeUpdatedEvent>;

export interface ExchangeMaxDynamicFeeUpdatedEventObject {
  maxDynamicFee: BigNumber;
}
export type ExchangeMaxDynamicFeeUpdatedEvent = TypedEvent<
  [BigNumber],
  ExchangeMaxDynamicFeeUpdatedEventObject
>;

export type ExchangeMaxDynamicFeeUpdatedEventFilter =
  TypedEventFilter<ExchangeMaxDynamicFeeUpdatedEvent>;

export interface FeePeriodDurationUpdatedEventObject {
  newFeePeriodDuration: BigNumber;
}
export type FeePeriodDurationUpdatedEvent = TypedEvent<
  [BigNumber],
  FeePeriodDurationUpdatedEventObject
>;

export type FeePeriodDurationUpdatedEventFilter = TypedEventFilter<FeePeriodDurationUpdatedEvent>;

export interface FlagRewardUpdatedEventObject {
  newReward: BigNumber;
}
export type FlagRewardUpdatedEvent = TypedEvent<[BigNumber], FlagRewardUpdatedEventObject>;

export type FlagRewardUpdatedEventFilter = TypedEventFilter<FlagRewardUpdatedEvent>;

export interface InteractionDelayUpdatedEventObject {
  interactionDelay: BigNumber;
}
export type InteractionDelayUpdatedEvent = TypedEvent<
  [BigNumber],
  InteractionDelayUpdatedEventObject
>;

export type InteractionDelayUpdatedEventFilter = TypedEventFilter<InteractionDelayUpdatedEvent>;

export interface IssuanceRatioUpdatedEventObject {
  newRatio: BigNumber;
}
export type IssuanceRatioUpdatedEvent = TypedEvent<[BigNumber], IssuanceRatioUpdatedEventObject>;

export type IssuanceRatioUpdatedEventFilter = TypedEventFilter<IssuanceRatioUpdatedEvent>;

export interface LiquidateRewardUpdatedEventObject {
  newReward: BigNumber;
}
export type LiquidateRewardUpdatedEvent = TypedEvent<
  [BigNumber],
  LiquidateRewardUpdatedEventObject
>;

export type LiquidateRewardUpdatedEventFilter = TypedEventFilter<LiquidateRewardUpdatedEvent>;

export interface LiquidationDelayUpdatedEventObject {
  newDelay: BigNumber;
}
export type LiquidationDelayUpdatedEvent = TypedEvent<
  [BigNumber],
  LiquidationDelayUpdatedEventObject
>;

export type LiquidationDelayUpdatedEventFilter = TypedEventFilter<LiquidationDelayUpdatedEvent>;

export interface LiquidationEscrowDurationUpdatedEventObject {
  newDuration: BigNumber;
}
export type LiquidationEscrowDurationUpdatedEvent = TypedEvent<
  [BigNumber],
  LiquidationEscrowDurationUpdatedEventObject
>;

export type LiquidationEscrowDurationUpdatedEventFilter =
  TypedEventFilter<LiquidationEscrowDurationUpdatedEvent>;

export interface LiquidationPenaltyUpdatedEventObject {
  newPenalty: BigNumber;
}
export type LiquidationPenaltyUpdatedEvent = TypedEvent<
  [BigNumber],
  LiquidationPenaltyUpdatedEventObject
>;

export type LiquidationPenaltyUpdatedEventFilter = TypedEventFilter<LiquidationPenaltyUpdatedEvent>;

export interface LiquidationRatioUpdatedEventObject {
  newRatio: BigNumber;
}
export type LiquidationRatioUpdatedEvent = TypedEvent<
  [BigNumber],
  LiquidationRatioUpdatedEventObject
>;

export type LiquidationRatioUpdatedEventFilter = TypedEventFilter<LiquidationRatioUpdatedEvent>;

export interface MinimumStakeTimeUpdatedEventObject {
  minimumStakeTime: BigNumber;
}
export type MinimumStakeTimeUpdatedEvent = TypedEvent<
  [BigNumber],
  MinimumStakeTimeUpdatedEventObject
>;

export type MinimumStakeTimeUpdatedEventFilter = TypedEventFilter<MinimumStakeTimeUpdatedEvent>;

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

export interface PriceDeviationThresholdUpdatedEventObject {
  threshold: BigNumber;
}
export type PriceDeviationThresholdUpdatedEvent = TypedEvent<
  [BigNumber],
  PriceDeviationThresholdUpdatedEventObject
>;

export type PriceDeviationThresholdUpdatedEventFilter =
  TypedEventFilter<PriceDeviationThresholdUpdatedEvent>;

export interface PureChainlinkPriceForAtomicSwapsEnabledUpdatedEventObject {
  synthKey: string;
  enabled: boolean;
}
export type PureChainlinkPriceForAtomicSwapsEnabledUpdatedEvent = TypedEvent<
  [string, boolean],
  PureChainlinkPriceForAtomicSwapsEnabledUpdatedEventObject
>;

export type PureChainlinkPriceForAtomicSwapsEnabledUpdatedEventFilter =
  TypedEventFilter<PureChainlinkPriceForAtomicSwapsEnabledUpdatedEvent>;

export interface RateStalePeriodUpdatedEventObject {
  rateStalePeriod: BigNumber;
}
export type RateStalePeriodUpdatedEvent = TypedEvent<
  [BigNumber],
  RateStalePeriodUpdatedEventObject
>;

export type RateStalePeriodUpdatedEventFilter = TypedEventFilter<RateStalePeriodUpdatedEvent>;

export interface SelfLiquidationPenaltyUpdatedEventObject {
  newPenalty: BigNumber;
}
export type SelfLiquidationPenaltyUpdatedEvent = TypedEvent<
  [BigNumber],
  SelfLiquidationPenaltyUpdatedEventObject
>;

export type SelfLiquidationPenaltyUpdatedEventFilter =
  TypedEventFilter<SelfLiquidationPenaltyUpdatedEvent>;

export interface SnxLiquidationPenaltyUpdatedEventObject {
  newPenalty: BigNumber;
}
export type SnxLiquidationPenaltyUpdatedEvent = TypedEvent<
  [BigNumber],
  SnxLiquidationPenaltyUpdatedEventObject
>;

export type SnxLiquidationPenaltyUpdatedEventFilter =
  TypedEventFilter<SnxLiquidationPenaltyUpdatedEvent>;

export interface TargetThresholdUpdatedEventObject {
  newTargetThreshold: BigNumber;
}
export type TargetThresholdUpdatedEvent = TypedEvent<
  [BigNumber],
  TargetThresholdUpdatedEventObject
>;

export type TargetThresholdUpdatedEventFilter = TypedEventFilter<TargetThresholdUpdatedEvent>;

export interface TradingRewardsEnabledEventObject {
  enabled: boolean;
}
export type TradingRewardsEnabledEvent = TypedEvent<[boolean], TradingRewardsEnabledEventObject>;

export type TradingRewardsEnabledEventFilter = TypedEventFilter<TradingRewardsEnabledEvent>;

export interface WaitingPeriodSecsUpdatedEventObject {
  waitingPeriodSecs: BigNumber;
}
export type WaitingPeriodSecsUpdatedEvent = TypedEvent<
  [BigNumber],
  WaitingPeriodSecsUpdatedEventObject
>;

export type WaitingPeriodSecsUpdatedEventFilter = TypedEventFilter<WaitingPeriodSecsUpdatedEvent>;

export interface WrapperBurnFeeRateUpdatedEventObject {
  wrapper: string;
  rate: BigNumber;
}
export type WrapperBurnFeeRateUpdatedEvent = TypedEvent<
  [string, BigNumber],
  WrapperBurnFeeRateUpdatedEventObject
>;

export type WrapperBurnFeeRateUpdatedEventFilter = TypedEventFilter<WrapperBurnFeeRateUpdatedEvent>;

export interface WrapperMaxTokenAmountUpdatedEventObject {
  wrapper: string;
  maxTokenAmount: BigNumber;
}
export type WrapperMaxTokenAmountUpdatedEvent = TypedEvent<
  [string, BigNumber],
  WrapperMaxTokenAmountUpdatedEventObject
>;

export type WrapperMaxTokenAmountUpdatedEventFilter =
  TypedEventFilter<WrapperMaxTokenAmountUpdatedEvent>;

export interface WrapperMintFeeRateUpdatedEventObject {
  wrapper: string;
  rate: BigNumber;
}
export type WrapperMintFeeRateUpdatedEvent = TypedEvent<
  [string, BigNumber],
  WrapperMintFeeRateUpdatedEventObject
>;

export type WrapperMintFeeRateUpdatedEventFilter = TypedEventFilter<WrapperMintFeeRateUpdatedEvent>;

export interface SystemSettings extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SystemSettingsInterface;

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

    aggregatorWarningFlags(overrides?: CallOverrides): Promise<[string]>;

    atomicEquivalentForDexPricing(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    atomicExchangeFeeRate(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    atomicMaxVolumePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    atomicTwapWindow(overrides?: CallOverrides): Promise<[BigNumber]>;

    atomicVolatilityConsiderationWindow(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    atomicVolatilityUpdateThreshold(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    collapseFeeRate(
      collateral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    crossChainSynthTransferEnabled(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    crossDomainMessageGasLimit(
      gasLimitType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    debtSnapshotStaleTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    etherWrapperBurnFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    etherWrapperMaxETH(overrides?: CallOverrides): Promise<[BigNumber]>;

    etherWrapperMintFeeRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    exchangeDynamicFeeRounds(overrides?: CallOverrides): Promise<[BigNumber]>;

    exchangeDynamicFeeThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    exchangeDynamicFeeWeightDecay(overrides?: CallOverrides): Promise<[BigNumber]>;

    exchangeFeeRate(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    exchangeMaxDynamicFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    feePeriodDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    flagReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    interactionDelay(
      collateral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isResolverCached(overrides?: CallOverrides): Promise<[boolean]>;

    issuanceRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidateReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidationDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidationEscrowDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidationPenalty(overrides?: CallOverrides): Promise<[BigNumber]>;

    liquidationRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    minimumStakeTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    priceDeviationThresholdFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    pureChainlinkPriceForAtomicSwapsEnabled(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    rateStalePeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    resolver(overrides?: CallOverrides): Promise<[string]>;

    resolverAddressesRequired(
      overrides?: CallOverrides
    ): Promise<[string[]] & { addresses: string[] }>;

    selfLiquidationPenalty(overrides?: CallOverrides): Promise<[BigNumber]>;

    setAggregatorWarningFlags(
      _flags: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAtomicEquivalentForDexPricing(
      _currencyKey: PromiseOrValue<BytesLike>,
      _equivalent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAtomicExchangeFeeRate(
      _currencyKey: PromiseOrValue<BytesLike>,
      _exchangeFeeRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAtomicMaxVolumePerBlock(
      _maxVolume: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAtomicTwapWindow(
      _window: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAtomicVolatilityConsiderationWindow(
      _currencyKey: PromiseOrValue<BytesLike>,
      _window: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setAtomicVolatilityUpdateThreshold(
      _currencyKey: PromiseOrValue<BytesLike>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCollapseFeeRate(
      _collateral: PromiseOrValue<string>,
      _collapseFeeRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCrossChainSynthTransferEnabled(
      _currencyKey: PromiseOrValue<BytesLike>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setCrossDomainMessageGasLimit(
      _gasLimitType: PromiseOrValue<BigNumberish>,
      _crossDomainMessageGasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setDebtSnapshotStaleTime(
      _seconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setEtherWrapperBurnFeeRate(
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setEtherWrapperMaxETH(
      _maxETH: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setEtherWrapperMintFeeRate(
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setExchangeDynamicFeeRounds(
      rounds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setExchangeDynamicFeeThreshold(
      threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setExchangeDynamicFeeWeightDecay(
      weightDecay: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setExchangeFeeRateForSynths(
      synthKeys: PromiseOrValue<BytesLike>[],
      exchangeFeeRates: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setExchangeMaxDynamicFee(
      maxFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFeePeriodDuration(
      _feePeriodDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setFlagReward(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setInteractionDelay(
      _collateral: PromiseOrValue<string>,
      _interactionDelay: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setIssuanceRatio(
      ratio: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLiquidateReward(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLiquidationDelay(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLiquidationEscrowDuration(
      duration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLiquidationPenalty(
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setLiquidationRatio(
      _liquidationRatio: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setMinimumStakeTime(
      _seconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPriceDeviationThresholdFactor(
      _priceDeviationThresholdFactor: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPureChainlinkPriceForAtomicSwapsEnabled(
      _currencyKey: PromiseOrValue<BytesLike>,
      _enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setRateStalePeriod(
      period: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSelfLiquidationPenalty(
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setSnxLiquidationPenalty(
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTargetThreshold(
      percent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setTradingRewardsEnabled(
      _tradingRewardsEnabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWaitingPeriodSecs(
      _waitingPeriodSecs: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWrapperBurnFeeRate(
      _wrapper: PromiseOrValue<string>,
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWrapperMaxTokenAmount(
      _wrapper: PromiseOrValue<string>,
      _maxTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWrapperMintFeeRate(
      _wrapper: PromiseOrValue<string>,
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    snxLiquidationPenalty(overrides?: CallOverrides): Promise<[BigNumber]>;

    targetThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    tradingRewardsEnabled(overrides?: CallOverrides): Promise<[boolean]>;

    waitingPeriodSecs(overrides?: CallOverrides): Promise<[BigNumber]>;

    wrapperBurnFeeRate(
      wrapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    wrapperMaxTokenAmount(
      wrapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    wrapperMintFeeRate(
      wrapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  aggregatorWarningFlags(overrides?: CallOverrides): Promise<string>;

  atomicEquivalentForDexPricing(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  atomicExchangeFeeRate(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  atomicMaxVolumePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  atomicTwapWindow(overrides?: CallOverrides): Promise<BigNumber>;

  atomicVolatilityConsiderationWindow(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  atomicVolatilityUpdateThreshold(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  collapseFeeRate(
    collateral: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  crossChainSynthTransferEnabled(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  crossDomainMessageGasLimit(
    gasLimitType: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  debtSnapshotStaleTime(overrides?: CallOverrides): Promise<BigNumber>;

  etherWrapperBurnFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

  etherWrapperMaxETH(overrides?: CallOverrides): Promise<BigNumber>;

  etherWrapperMintFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

  exchangeDynamicFeeRounds(overrides?: CallOverrides): Promise<BigNumber>;

  exchangeDynamicFeeThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  exchangeDynamicFeeWeightDecay(overrides?: CallOverrides): Promise<BigNumber>;

  exchangeFeeRate(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  exchangeMaxDynamicFee(overrides?: CallOverrides): Promise<BigNumber>;

  feePeriodDuration(overrides?: CallOverrides): Promise<BigNumber>;

  flagReward(overrides?: CallOverrides): Promise<BigNumber>;

  interactionDelay(
    collateral: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isResolverCached(overrides?: CallOverrides): Promise<boolean>;

  issuanceRatio(overrides?: CallOverrides): Promise<BigNumber>;

  liquidateReward(overrides?: CallOverrides): Promise<BigNumber>;

  liquidationDelay(overrides?: CallOverrides): Promise<BigNumber>;

  liquidationEscrowDuration(overrides?: CallOverrides): Promise<BigNumber>;

  liquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

  liquidationRatio(overrides?: CallOverrides): Promise<BigNumber>;

  minimumStakeTime(overrides?: CallOverrides): Promise<BigNumber>;

  nominateNewOwner(
    _owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  priceDeviationThresholdFactor(overrides?: CallOverrides): Promise<BigNumber>;

  pureChainlinkPriceForAtomicSwapsEnabled(
    currencyKey: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  rateStalePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  rebuildCache(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  resolver(overrides?: CallOverrides): Promise<string>;

  resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

  selfLiquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

  setAggregatorWarningFlags(
    _flags: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAtomicEquivalentForDexPricing(
    _currencyKey: PromiseOrValue<BytesLike>,
    _equivalent: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAtomicExchangeFeeRate(
    _currencyKey: PromiseOrValue<BytesLike>,
    _exchangeFeeRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAtomicMaxVolumePerBlock(
    _maxVolume: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAtomicTwapWindow(
    _window: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAtomicVolatilityConsiderationWindow(
    _currencyKey: PromiseOrValue<BytesLike>,
    _window: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setAtomicVolatilityUpdateThreshold(
    _currencyKey: PromiseOrValue<BytesLike>,
    _threshold: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCollapseFeeRate(
    _collateral: PromiseOrValue<string>,
    _collapseFeeRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCrossChainSynthTransferEnabled(
    _currencyKey: PromiseOrValue<BytesLike>,
    _value: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setCrossDomainMessageGasLimit(
    _gasLimitType: PromiseOrValue<BigNumberish>,
    _crossDomainMessageGasLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setDebtSnapshotStaleTime(
    _seconds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setEtherWrapperBurnFeeRate(
    _rate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setEtherWrapperMaxETH(
    _maxETH: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setEtherWrapperMintFeeRate(
    _rate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setExchangeDynamicFeeRounds(
    rounds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setExchangeDynamicFeeThreshold(
    threshold: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setExchangeDynamicFeeWeightDecay(
    weightDecay: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setExchangeFeeRateForSynths(
    synthKeys: PromiseOrValue<BytesLike>[],
    exchangeFeeRates: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setExchangeMaxDynamicFee(
    maxFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFeePeriodDuration(
    _feePeriodDuration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setFlagReward(
    reward: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setInteractionDelay(
    _collateral: PromiseOrValue<string>,
    _interactionDelay: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setIssuanceRatio(
    ratio: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLiquidateReward(
    reward: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLiquidationDelay(
    time: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLiquidationEscrowDuration(
    duration: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLiquidationPenalty(
    penalty: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setLiquidationRatio(
    _liquidationRatio: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setMinimumStakeTime(
    _seconds: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPriceDeviationThresholdFactor(
    _priceDeviationThresholdFactor: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPureChainlinkPriceForAtomicSwapsEnabled(
    _currencyKey: PromiseOrValue<BytesLike>,
    _enabled: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setRateStalePeriod(
    period: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSelfLiquidationPenalty(
    penalty: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setSnxLiquidationPenalty(
    penalty: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTargetThreshold(
    percent: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setTradingRewardsEnabled(
    _tradingRewardsEnabled: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWaitingPeriodSecs(
    _waitingPeriodSecs: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWrapperBurnFeeRate(
    _wrapper: PromiseOrValue<string>,
    _rate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWrapperMaxTokenAmount(
    _wrapper: PromiseOrValue<string>,
    _maxTokenAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWrapperMintFeeRate(
    _wrapper: PromiseOrValue<string>,
    _rate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  snxLiquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

  targetThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  tradingRewardsEnabled(overrides?: CallOverrides): Promise<boolean>;

  waitingPeriodSecs(overrides?: CallOverrides): Promise<BigNumber>;

  wrapperBurnFeeRate(
    wrapper: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapperMaxTokenAmount(
    wrapper: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  wrapperMintFeeRate(
    wrapper: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<string>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    aggregatorWarningFlags(overrides?: CallOverrides): Promise<string>;

    atomicEquivalentForDexPricing(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    atomicExchangeFeeRate(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    atomicMaxVolumePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    atomicTwapWindow(overrides?: CallOverrides): Promise<BigNumber>;

    atomicVolatilityConsiderationWindow(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    atomicVolatilityUpdateThreshold(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collapseFeeRate(
      collateral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    crossChainSynthTransferEnabled(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    crossDomainMessageGasLimit(
      gasLimitType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtSnapshotStaleTime(overrides?: CallOverrides): Promise<BigNumber>;

    etherWrapperBurnFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    etherWrapperMaxETH(overrides?: CallOverrides): Promise<BigNumber>;

    etherWrapperMintFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeDynamicFeeRounds(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeDynamicFeeThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeDynamicFeeWeightDecay(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeFeeRate(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeMaxDynamicFee(overrides?: CallOverrides): Promise<BigNumber>;

    feePeriodDuration(overrides?: CallOverrides): Promise<BigNumber>;

    flagReward(overrides?: CallOverrides): Promise<BigNumber>;

    interactionDelay(
      collateral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<boolean>;

    issuanceRatio(overrides?: CallOverrides): Promise<BigNumber>;

    liquidateReward(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationDelay(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationEscrowDuration(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationRatio(overrides?: CallOverrides): Promise<BigNumber>;

    minimumStakeTime(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(_owner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    priceDeviationThresholdFactor(overrides?: CallOverrides): Promise<BigNumber>;

    pureChainlinkPriceForAtomicSwapsEnabled(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    rateStalePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    rebuildCache(overrides?: CallOverrides): Promise<void>;

    resolver(overrides?: CallOverrides): Promise<string>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<string[]>;

    selfLiquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

    setAggregatorWarningFlags(
      _flags: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAtomicEquivalentForDexPricing(
      _currencyKey: PromiseOrValue<BytesLike>,
      _equivalent: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAtomicExchangeFeeRate(
      _currencyKey: PromiseOrValue<BytesLike>,
      _exchangeFeeRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAtomicMaxVolumePerBlock(
      _maxVolume: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAtomicTwapWindow(
      _window: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAtomicVolatilityConsiderationWindow(
      _currencyKey: PromiseOrValue<BytesLike>,
      _window: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setAtomicVolatilityUpdateThreshold(
      _currencyKey: PromiseOrValue<BytesLike>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setCollapseFeeRate(
      _collateral: PromiseOrValue<string>,
      _collapseFeeRate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setCrossChainSynthTransferEnabled(
      _currencyKey: PromiseOrValue<BytesLike>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setCrossDomainMessageGasLimit(
      _gasLimitType: PromiseOrValue<BigNumberish>,
      _crossDomainMessageGasLimit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setDebtSnapshotStaleTime(
      _seconds: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setEtherWrapperBurnFeeRate(
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setEtherWrapperMaxETH(
      _maxETH: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setEtherWrapperMintFeeRate(
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setExchangeDynamicFeeRounds(
      rounds: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setExchangeDynamicFeeThreshold(
      threshold: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setExchangeDynamicFeeWeightDecay(
      weightDecay: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setExchangeFeeRateForSynths(
      synthKeys: PromiseOrValue<BytesLike>[],
      exchangeFeeRates: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    setExchangeMaxDynamicFee(
      maxFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeePeriodDuration(
      _feePeriodDuration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setFlagReward(reward: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    setInteractionDelay(
      _collateral: PromiseOrValue<string>,
      _interactionDelay: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setIssuanceRatio(ratio: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    setLiquidateReward(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLiquidationDelay(
      time: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLiquidationEscrowDuration(
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLiquidationPenalty(
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setLiquidationRatio(
      _liquidationRatio: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setMinimumStakeTime(
      _seconds: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPriceDeviationThresholdFactor(
      _priceDeviationThresholdFactor: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setPureChainlinkPriceForAtomicSwapsEnabled(
      _currencyKey: PromiseOrValue<BytesLike>,
      _enabled: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setRateStalePeriod(
      period: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSelfLiquidationPenalty(
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setSnxLiquidationPenalty(
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTargetThreshold(
      percent: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setTradingRewardsEnabled(
      _tradingRewardsEnabled: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    setWaitingPeriodSecs(
      _waitingPeriodSecs: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setWrapperBurnFeeRate(
      _wrapper: PromiseOrValue<string>,
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setWrapperMaxTokenAmount(
      _wrapper: PromiseOrValue<string>,
      _maxTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setWrapperMintFeeRate(
      _wrapper: PromiseOrValue<string>,
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    snxLiquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

    targetThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    tradingRewardsEnabled(overrides?: CallOverrides): Promise<boolean>;

    waitingPeriodSecs(overrides?: CallOverrides): Promise<BigNumber>;

    wrapperBurnFeeRate(
      wrapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapperMaxTokenAmount(
      wrapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapperMintFeeRate(
      wrapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    'AggregatorWarningFlagsUpdated(address)'(
      flags?: null
    ): AggregatorWarningFlagsUpdatedEventFilter;
    AggregatorWarningFlagsUpdated(flags?: null): AggregatorWarningFlagsUpdatedEventFilter;

    'AtomicEquivalentForDexPricingUpdated(bytes32,address)'(
      synthKey?: null,
      equivalent?: null
    ): AtomicEquivalentForDexPricingUpdatedEventFilter;
    AtomicEquivalentForDexPricingUpdated(
      synthKey?: null,
      equivalent?: null
    ): AtomicEquivalentForDexPricingUpdatedEventFilter;

    'AtomicExchangeFeeUpdated(bytes32,uint256)'(
      synthKey?: null,
      newExchangeFeeRate?: null
    ): AtomicExchangeFeeUpdatedEventFilter;
    AtomicExchangeFeeUpdated(
      synthKey?: null,
      newExchangeFeeRate?: null
    ): AtomicExchangeFeeUpdatedEventFilter;

    'AtomicMaxVolumePerBlockUpdated(uint256)'(
      newMaxVolume?: null
    ): AtomicMaxVolumePerBlockUpdatedEventFilter;
    AtomicMaxVolumePerBlockUpdated(newMaxVolume?: null): AtomicMaxVolumePerBlockUpdatedEventFilter;

    'AtomicTwapWindowUpdated(uint256)'(newWindow?: null): AtomicTwapWindowUpdatedEventFilter;
    AtomicTwapWindowUpdated(newWindow?: null): AtomicTwapWindowUpdatedEventFilter;

    'AtomicVolatilityConsiderationWindowUpdated(bytes32,uint256)'(
      synthKey?: null,
      newVolatilityConsiderationWindow?: null
    ): AtomicVolatilityConsiderationWindowUpdatedEventFilter;
    AtomicVolatilityConsiderationWindowUpdated(
      synthKey?: null,
      newVolatilityConsiderationWindow?: null
    ): AtomicVolatilityConsiderationWindowUpdatedEventFilter;

    'AtomicVolatilityUpdateThresholdUpdated(bytes32,uint256)'(
      synthKey?: null,
      newVolatilityUpdateThreshold?: null
    ): AtomicVolatilityUpdateThresholdUpdatedEventFilter;
    AtomicVolatilityUpdateThresholdUpdated(
      synthKey?: null,
      newVolatilityUpdateThreshold?: null
    ): AtomicVolatilityUpdateThresholdUpdatedEventFilter;

    'CacheUpdated(bytes32,address)'(name?: null, destination?: null): CacheUpdatedEventFilter;
    CacheUpdated(name?: null, destination?: null): CacheUpdatedEventFilter;

    'CollapseFeeRateUpdated(uint256)'(collapseFeeRate?: null): CollapseFeeRateUpdatedEventFilter;
    CollapseFeeRateUpdated(collapseFeeRate?: null): CollapseFeeRateUpdatedEventFilter;

    'CrossChainSynthTransferEnabledUpdated(bytes32,uint256)'(
      synthKey?: null,
      value?: null
    ): CrossChainSynthTransferEnabledUpdatedEventFilter;
    CrossChainSynthTransferEnabledUpdated(
      synthKey?: null,
      value?: null
    ): CrossChainSynthTransferEnabledUpdatedEventFilter;

    'CrossDomainMessageGasLimitChanged(uint8,uint256)'(
      gasLimitType?: null,
      newLimit?: null
    ): CrossDomainMessageGasLimitChangedEventFilter;
    CrossDomainMessageGasLimitChanged(
      gasLimitType?: null,
      newLimit?: null
    ): CrossDomainMessageGasLimitChangedEventFilter;

    'DebtSnapshotStaleTimeUpdated(uint256)'(
      debtSnapshotStaleTime?: null
    ): DebtSnapshotStaleTimeUpdatedEventFilter;
    DebtSnapshotStaleTimeUpdated(
      debtSnapshotStaleTime?: null
    ): DebtSnapshotStaleTimeUpdatedEventFilter;

    'EtherWrapperBurnFeeRateUpdated(uint256)'(
      rate?: null
    ): EtherWrapperBurnFeeRateUpdatedEventFilter;
    EtherWrapperBurnFeeRateUpdated(rate?: null): EtherWrapperBurnFeeRateUpdatedEventFilter;

    'EtherWrapperMaxETHUpdated(uint256)'(maxETH?: null): EtherWrapperMaxETHUpdatedEventFilter;
    EtherWrapperMaxETHUpdated(maxETH?: null): EtherWrapperMaxETHUpdatedEventFilter;

    'EtherWrapperMintFeeRateUpdated(uint256)'(
      rate?: null
    ): EtherWrapperMintFeeRateUpdatedEventFilter;
    EtherWrapperMintFeeRateUpdated(rate?: null): EtherWrapperMintFeeRateUpdatedEventFilter;

    'ExchangeDynamicFeeRoundsUpdated(uint256)'(
      dynamicFeeRounds?: null
    ): ExchangeDynamicFeeRoundsUpdatedEventFilter;
    ExchangeDynamicFeeRoundsUpdated(
      dynamicFeeRounds?: null
    ): ExchangeDynamicFeeRoundsUpdatedEventFilter;

    'ExchangeDynamicFeeThresholdUpdated(uint256)'(
      dynamicFeeThreshold?: null
    ): ExchangeDynamicFeeThresholdUpdatedEventFilter;
    ExchangeDynamicFeeThresholdUpdated(
      dynamicFeeThreshold?: null
    ): ExchangeDynamicFeeThresholdUpdatedEventFilter;

    'ExchangeDynamicFeeWeightDecayUpdated(uint256)'(
      dynamicFeeWeightDecay?: null
    ): ExchangeDynamicFeeWeightDecayUpdatedEventFilter;
    ExchangeDynamicFeeWeightDecayUpdated(
      dynamicFeeWeightDecay?: null
    ): ExchangeDynamicFeeWeightDecayUpdatedEventFilter;

    'ExchangeFeeUpdated(bytes32,uint256)'(
      synthKey?: null,
      newExchangeFeeRate?: null
    ): ExchangeFeeUpdatedEventFilter;
    ExchangeFeeUpdated(synthKey?: null, newExchangeFeeRate?: null): ExchangeFeeUpdatedEventFilter;

    'ExchangeMaxDynamicFeeUpdated(uint256)'(
      maxDynamicFee?: null
    ): ExchangeMaxDynamicFeeUpdatedEventFilter;
    ExchangeMaxDynamicFeeUpdated(maxDynamicFee?: null): ExchangeMaxDynamicFeeUpdatedEventFilter;

    'FeePeriodDurationUpdated(uint256)'(
      newFeePeriodDuration?: null
    ): FeePeriodDurationUpdatedEventFilter;
    FeePeriodDurationUpdated(newFeePeriodDuration?: null): FeePeriodDurationUpdatedEventFilter;

    'FlagRewardUpdated(uint256)'(newReward?: null): FlagRewardUpdatedEventFilter;
    FlagRewardUpdated(newReward?: null): FlagRewardUpdatedEventFilter;

    'InteractionDelayUpdated(uint256)'(interactionDelay?: null): InteractionDelayUpdatedEventFilter;
    InteractionDelayUpdated(interactionDelay?: null): InteractionDelayUpdatedEventFilter;

    'IssuanceRatioUpdated(uint256)'(newRatio?: null): IssuanceRatioUpdatedEventFilter;
    IssuanceRatioUpdated(newRatio?: null): IssuanceRatioUpdatedEventFilter;

    'LiquidateRewardUpdated(uint256)'(newReward?: null): LiquidateRewardUpdatedEventFilter;
    LiquidateRewardUpdated(newReward?: null): LiquidateRewardUpdatedEventFilter;

    'LiquidationDelayUpdated(uint256)'(newDelay?: null): LiquidationDelayUpdatedEventFilter;
    LiquidationDelayUpdated(newDelay?: null): LiquidationDelayUpdatedEventFilter;

    'LiquidationEscrowDurationUpdated(uint256)'(
      newDuration?: null
    ): LiquidationEscrowDurationUpdatedEventFilter;
    LiquidationEscrowDurationUpdated(
      newDuration?: null
    ): LiquidationEscrowDurationUpdatedEventFilter;

    'LiquidationPenaltyUpdated(uint256)'(newPenalty?: null): LiquidationPenaltyUpdatedEventFilter;
    LiquidationPenaltyUpdated(newPenalty?: null): LiquidationPenaltyUpdatedEventFilter;

    'LiquidationRatioUpdated(uint256)'(newRatio?: null): LiquidationRatioUpdatedEventFilter;
    LiquidationRatioUpdated(newRatio?: null): LiquidationRatioUpdatedEventFilter;

    'MinimumStakeTimeUpdated(uint256)'(minimumStakeTime?: null): MinimumStakeTimeUpdatedEventFilter;
    MinimumStakeTimeUpdated(minimumStakeTime?: null): MinimumStakeTimeUpdatedEventFilter;

    'OwnerChanged(address,address)'(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    'OwnerNominated(address)'(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;

    'PriceDeviationThresholdUpdated(uint256)'(
      threshold?: null
    ): PriceDeviationThresholdUpdatedEventFilter;
    PriceDeviationThresholdUpdated(threshold?: null): PriceDeviationThresholdUpdatedEventFilter;

    'PureChainlinkPriceForAtomicSwapsEnabledUpdated(bytes32,bool)'(
      synthKey?: null,
      enabled?: null
    ): PureChainlinkPriceForAtomicSwapsEnabledUpdatedEventFilter;
    PureChainlinkPriceForAtomicSwapsEnabledUpdated(
      synthKey?: null,
      enabled?: null
    ): PureChainlinkPriceForAtomicSwapsEnabledUpdatedEventFilter;

    'RateStalePeriodUpdated(uint256)'(rateStalePeriod?: null): RateStalePeriodUpdatedEventFilter;
    RateStalePeriodUpdated(rateStalePeriod?: null): RateStalePeriodUpdatedEventFilter;

    'SelfLiquidationPenaltyUpdated(uint256)'(
      newPenalty?: null
    ): SelfLiquidationPenaltyUpdatedEventFilter;
    SelfLiquidationPenaltyUpdated(newPenalty?: null): SelfLiquidationPenaltyUpdatedEventFilter;

    'SnxLiquidationPenaltyUpdated(uint256)'(
      newPenalty?: null
    ): SnxLiquidationPenaltyUpdatedEventFilter;
    SnxLiquidationPenaltyUpdated(newPenalty?: null): SnxLiquidationPenaltyUpdatedEventFilter;

    'TargetThresholdUpdated(uint256)'(newTargetThreshold?: null): TargetThresholdUpdatedEventFilter;
    TargetThresholdUpdated(newTargetThreshold?: null): TargetThresholdUpdatedEventFilter;

    'TradingRewardsEnabled(bool)'(enabled?: null): TradingRewardsEnabledEventFilter;
    TradingRewardsEnabled(enabled?: null): TradingRewardsEnabledEventFilter;

    'WaitingPeriodSecsUpdated(uint256)'(
      waitingPeriodSecs?: null
    ): WaitingPeriodSecsUpdatedEventFilter;
    WaitingPeriodSecsUpdated(waitingPeriodSecs?: null): WaitingPeriodSecsUpdatedEventFilter;

    'WrapperBurnFeeRateUpdated(address,int256)'(
      wrapper?: null,
      rate?: null
    ): WrapperBurnFeeRateUpdatedEventFilter;
    WrapperBurnFeeRateUpdated(wrapper?: null, rate?: null): WrapperBurnFeeRateUpdatedEventFilter;

    'WrapperMaxTokenAmountUpdated(address,uint256)'(
      wrapper?: null,
      maxTokenAmount?: null
    ): WrapperMaxTokenAmountUpdatedEventFilter;
    WrapperMaxTokenAmountUpdated(
      wrapper?: null,
      maxTokenAmount?: null
    ): WrapperMaxTokenAmountUpdatedEventFilter;

    'WrapperMintFeeRateUpdated(address,int256)'(
      wrapper?: null,
      rate?: null
    ): WrapperMintFeeRateUpdatedEventFilter;
    WrapperMintFeeRateUpdated(wrapper?: null, rate?: null): WrapperMintFeeRateUpdatedEventFilter;
  };

  estimateGas: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    aggregatorWarningFlags(overrides?: CallOverrides): Promise<BigNumber>;

    atomicEquivalentForDexPricing(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    atomicExchangeFeeRate(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    atomicMaxVolumePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    atomicTwapWindow(overrides?: CallOverrides): Promise<BigNumber>;

    atomicVolatilityConsiderationWindow(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    atomicVolatilityUpdateThreshold(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    collapseFeeRate(
      collateral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    crossChainSynthTransferEnabled(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    crossDomainMessageGasLimit(
      gasLimitType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    debtSnapshotStaleTime(overrides?: CallOverrides): Promise<BigNumber>;

    etherWrapperBurnFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    etherWrapperMaxETH(overrides?: CallOverrides): Promise<BigNumber>;

    etherWrapperMintFeeRate(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeDynamicFeeRounds(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeDynamicFeeThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeDynamicFeeWeightDecay(overrides?: CallOverrides): Promise<BigNumber>;

    exchangeFeeRate(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangeMaxDynamicFee(overrides?: CallOverrides): Promise<BigNumber>;

    feePeriodDuration(overrides?: CallOverrides): Promise<BigNumber>;

    flagReward(overrides?: CallOverrides): Promise<BigNumber>;

    interactionDelay(
      collateral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isResolverCached(overrides?: CallOverrides): Promise<BigNumber>;

    issuanceRatio(overrides?: CallOverrides): Promise<BigNumber>;

    liquidateReward(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationDelay(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationEscrowDuration(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

    liquidationRatio(overrides?: CallOverrides): Promise<BigNumber>;

    minimumStakeTime(overrides?: CallOverrides): Promise<BigNumber>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    priceDeviationThresholdFactor(overrides?: CallOverrides): Promise<BigNumber>;

    pureChainlinkPriceForAtomicSwapsEnabled(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rateStalePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    rebuildCache(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    resolver(overrides?: CallOverrides): Promise<BigNumber>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<BigNumber>;

    selfLiquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

    setAggregatorWarningFlags(
      _flags: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAtomicEquivalentForDexPricing(
      _currencyKey: PromiseOrValue<BytesLike>,
      _equivalent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAtomicExchangeFeeRate(
      _currencyKey: PromiseOrValue<BytesLike>,
      _exchangeFeeRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAtomicMaxVolumePerBlock(
      _maxVolume: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAtomicTwapWindow(
      _window: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAtomicVolatilityConsiderationWindow(
      _currencyKey: PromiseOrValue<BytesLike>,
      _window: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setAtomicVolatilityUpdateThreshold(
      _currencyKey: PromiseOrValue<BytesLike>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCollapseFeeRate(
      _collateral: PromiseOrValue<string>,
      _collapseFeeRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCrossChainSynthTransferEnabled(
      _currencyKey: PromiseOrValue<BytesLike>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setCrossDomainMessageGasLimit(
      _gasLimitType: PromiseOrValue<BigNumberish>,
      _crossDomainMessageGasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setDebtSnapshotStaleTime(
      _seconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setEtherWrapperBurnFeeRate(
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setEtherWrapperMaxETH(
      _maxETH: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setEtherWrapperMintFeeRate(
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setExchangeDynamicFeeRounds(
      rounds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setExchangeDynamicFeeThreshold(
      threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setExchangeDynamicFeeWeightDecay(
      weightDecay: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setExchangeFeeRateForSynths(
      synthKeys: PromiseOrValue<BytesLike>[],
      exchangeFeeRates: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setExchangeMaxDynamicFee(
      maxFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFeePeriodDuration(
      _feePeriodDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setFlagReward(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setInteractionDelay(
      _collateral: PromiseOrValue<string>,
      _interactionDelay: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setIssuanceRatio(
      ratio: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLiquidateReward(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLiquidationDelay(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLiquidationEscrowDuration(
      duration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLiquidationPenalty(
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setLiquidationRatio(
      _liquidationRatio: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setMinimumStakeTime(
      _seconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPriceDeviationThresholdFactor(
      _priceDeviationThresholdFactor: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPureChainlinkPriceForAtomicSwapsEnabled(
      _currencyKey: PromiseOrValue<BytesLike>,
      _enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setRateStalePeriod(
      period: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSelfLiquidationPenalty(
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setSnxLiquidationPenalty(
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTargetThreshold(
      percent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setTradingRewardsEnabled(
      _tradingRewardsEnabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWaitingPeriodSecs(
      _waitingPeriodSecs: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWrapperBurnFeeRate(
      _wrapper: PromiseOrValue<string>,
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWrapperMaxTokenAmount(
      _wrapper: PromiseOrValue<string>,
      _maxTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWrapperMintFeeRate(
      _wrapper: PromiseOrValue<string>,
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    snxLiquidationPenalty(overrides?: CallOverrides): Promise<BigNumber>;

    targetThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    tradingRewardsEnabled(overrides?: CallOverrides): Promise<BigNumber>;

    waitingPeriodSecs(overrides?: CallOverrides): Promise<BigNumber>;

    wrapperBurnFeeRate(
      wrapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapperMaxTokenAmount(
      wrapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapperMintFeeRate(
      wrapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CONTRACT_NAME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    aggregatorWarningFlags(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    atomicEquivalentForDexPricing(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    atomicExchangeFeeRate(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    atomicMaxVolumePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    atomicTwapWindow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    atomicVolatilityConsiderationWindow(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    atomicVolatilityUpdateThreshold(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    collapseFeeRate(
      collateral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    crossChainSynthTransferEnabled(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    crossDomainMessageGasLimit(
      gasLimitType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    debtSnapshotStaleTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    etherWrapperBurnFeeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    etherWrapperMaxETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    etherWrapperMintFeeRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchangeDynamicFeeRounds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchangeDynamicFeeThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchangeDynamicFeeWeightDecay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    exchangeFeeRate(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exchangeMaxDynamicFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feePeriodDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    flagReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    interactionDelay(
      collateral: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isResolverCached(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    issuanceRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidateReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationEscrowDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationPenalty(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidationRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    minimumStakeTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nominateNewOwner(
      _owner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceDeviationThresholdFactor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pureChainlinkPriceForAtomicSwapsEnabled(
      currencyKey: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rateStalePeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rebuildCache(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    resolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    resolverAddressesRequired(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    selfLiquidationPenalty(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAggregatorWarningFlags(
      _flags: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAtomicEquivalentForDexPricing(
      _currencyKey: PromiseOrValue<BytesLike>,
      _equivalent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAtomicExchangeFeeRate(
      _currencyKey: PromiseOrValue<BytesLike>,
      _exchangeFeeRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAtomicMaxVolumePerBlock(
      _maxVolume: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAtomicTwapWindow(
      _window: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAtomicVolatilityConsiderationWindow(
      _currencyKey: PromiseOrValue<BytesLike>,
      _window: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setAtomicVolatilityUpdateThreshold(
      _currencyKey: PromiseOrValue<BytesLike>,
      _threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCollapseFeeRate(
      _collateral: PromiseOrValue<string>,
      _collapseFeeRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCrossChainSynthTransferEnabled(
      _currencyKey: PromiseOrValue<BytesLike>,
      _value: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setCrossDomainMessageGasLimit(
      _gasLimitType: PromiseOrValue<BigNumberish>,
      _crossDomainMessageGasLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setDebtSnapshotStaleTime(
      _seconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setEtherWrapperBurnFeeRate(
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setEtherWrapperMaxETH(
      _maxETH: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setEtherWrapperMintFeeRate(
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setExchangeDynamicFeeRounds(
      rounds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setExchangeDynamicFeeThreshold(
      threshold: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setExchangeDynamicFeeWeightDecay(
      weightDecay: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setExchangeFeeRateForSynths(
      synthKeys: PromiseOrValue<BytesLike>[],
      exchangeFeeRates: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setExchangeMaxDynamicFee(
      maxFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFeePeriodDuration(
      _feePeriodDuration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setFlagReward(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setInteractionDelay(
      _collateral: PromiseOrValue<string>,
      _interactionDelay: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setIssuanceRatio(
      ratio: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidateReward(
      reward: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidationDelay(
      time: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidationEscrowDuration(
      duration: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidationPenalty(
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidationRatio(
      _liquidationRatio: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setMinimumStakeTime(
      _seconds: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPriceDeviationThresholdFactor(
      _priceDeviationThresholdFactor: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPureChainlinkPriceForAtomicSwapsEnabled(
      _currencyKey: PromiseOrValue<BytesLike>,
      _enabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setRateStalePeriod(
      period: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSelfLiquidationPenalty(
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setSnxLiquidationPenalty(
      penalty: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTargetThreshold(
      percent: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setTradingRewardsEnabled(
      _tradingRewardsEnabled: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWaitingPeriodSecs(
      _waitingPeriodSecs: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWrapperBurnFeeRate(
      _wrapper: PromiseOrValue<string>,
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWrapperMaxTokenAmount(
      _wrapper: PromiseOrValue<string>,
      _maxTokenAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWrapperMintFeeRate(
      _wrapper: PromiseOrValue<string>,
      _rate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    snxLiquidationPenalty(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    targetThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tradingRewardsEnabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    waitingPeriodSecs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wrapperBurnFeeRate(
      wrapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wrapperMaxTokenAmount(
      wrapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wrapperMintFeeRate(
      wrapper: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
