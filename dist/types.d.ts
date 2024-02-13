import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';
import { Provider } from '@ethersproject/providers';
export type SignerOrProvider = ethers.Signer | Provider;
/**
 * Invalid argument or the query condition is impossible.
 */
export declare class InvalidArgumentError extends Error {
    constructor(message: string);
}
/**
 * Indicates that LiquidityPool has insufficient reserves for a desired amount.
 */
export declare class InsufficientLiquidityError extends Error {
    readonly isInsufficientLiquidityError: true;
    readonly type: InsufficientLiquidityType;
    constructor(type: InsufficientLiquidityType, message: string);
}
export declare enum InsufficientLiquidityType {
    BitoroRemoveLiquidityExceedsCurrentAsset = 0,
    AggregatorLimitedCredit = 1,
    AggregatorLimitedMaxPosition = 2,
    SwapExceedsCurrentAsset = 3
}
/**
 * Indicates that calling convention error or bugs happened.
 */
export declare class BugError extends Error {
    constructor(message: string);
}
export interface PriceDict {
    [symbol: string]: BigNumber;
}
export interface ChainStorage {
    pool: LiquidityPool;
    assets: Asset[];
    dexes: Dex[];
    liquidityLockPeriod: number;
    lpDeduct: BigNumber;
    stableDeduct: BigNumber;
}
export interface LiquidityPool {
    shortFundingBaseRate8H: BigNumber;
    shortFundingLimitRate8H: BigNumber;
    lastFundingTime: number;
    fundingInterval: number;
    liquidityBaseFeeRate: BigNumber;
    liquidityDynamicFeeRate: BigNumber;
    sequence: number;
    strictStableDeviation: BigNumber;
    blpPriceLowerBound: BigNumber;
    blpPriceUpperBound: BigNumber;
}
export interface AssetConfig {
    symbol: string;
    id: number;
    decimals: number;
    isStable: boolean;
    canAddRemoveLiquidity: boolean;
    isTradable: boolean;
    isOpenable: boolean;
    isShortable: boolean;
    useStableTokenForProfit: boolean;
    isEnabled: boolean;
    isStrictStable: boolean;
    referenceOracleType: number;
    referenceOracle: string;
    referenceDeviation: BigNumber;
    halfSpread: BigNumber;
    tokenAddress: string;
    bitoroTokenAddress: string;
    initialMarginRate: BigNumber;
    maintenanceMarginRate: BigNumber;
    positionFeeRate: BigNumber;
    minProfitRate: BigNumber;
    minProfitTime: number;
    maxLongPositionSize: BigNumber;
    maxShortPositionSize: BigNumber;
    spotWeight: number;
    longFundingBaseRate8H: BigNumber;
    longFundingLimitRate8H: BigNumber;
}
export interface AssetState {
    longCumulativeFundingRate: BigNumber;
    shortCumulativeFunding: BigNumber;
    spotLiquidity: BigNumber;
    credit: BigNumber;
    totalLongPosition: BigNumber;
    totalShortPosition: BigNumber;
    averageLongPrice: BigNumber;
    averageShortPrice: BigNumber;
    collectedFee: BigNumber;
    deduct: BigNumber;
}
export type Asset = AssetConfig & AssetState;
export interface DexConfig {
    dexId: number;
    dexType: number;
    assetIds: number[];
    assetWeightInDEX: number[];
    dexWeight: number;
    totalSpotInDEX: BigNumber[];
}
export interface DexState {
    dexId: number;
    dexLPBalance: BigNumber;
    liquidityBalance: BigNumber[];
}
export type Dex = DexConfig & DexState;
export interface SubAccount {
    collateral: BigNumber;
    size: BigNumber;
    lastIncreasedTime: number;
    entryPrice: BigNumber;
    entryFunding: BigNumber;
}
export declare function cloneSubAccount(a: SubAccount): SubAccount;
export interface DecodedSubAccountId {
    account: string;
    collateralId: number;
    assetId: number;
    isLong: boolean;
}
export interface SubAccountComputed {
    positionValueUsd: BigNumber;
    marginBalanceUsd: BigNumber;
    isIMSafe: boolean;
    isMMSafe: boolean;
    isMarginSafe: boolean;
    leverage: BigNumber;
    effectiveLeverage: BigNumber;
    fundingFeeUsd: BigNumber;
    pendingPnlUsd: BigNumber;
    pendingPnlAfterFundingUsd: BigNumber;
    pendingRoe: BigNumber;
    pnlUsd: BigNumber;
    liquidationPrice: BigNumber;
    withdrawableCollateral: BigNumber;
    withdrawableProfit: BigNumber;
}
export interface SubAccountDetails {
    subAccount: SubAccount;
    computed: SubAccountComputed;
}
export interface OpenPositionResult {
    afterTrade: SubAccountDetails;
    isTradeSafe: boolean;
    fundingFeeUsd: BigNumber;
    feeUsd: BigNumber;
}
export interface ClosePositionResult {
    afterTrade: SubAccountDetails;
    isTradeSafe: boolean;
    feeUsd: BigNumber;
    profitAssetTransferred: BigNumber;
    bitoroTokenTransferred: BigNumber;
}
export interface WithdrawCollateralResult {
    afterTrade: SubAccountDetails;
    isTradeSafe: boolean;
    feeUsd: BigNumber;
}
export interface WithdrawProfitResult {
    afterTrade: SubAccountDetails;
    isTradeSafe: boolean;
    feeUsd: BigNumber;
    profitAssetTransferred: BigNumber;
    bitoroTokenTransferred: BigNumber;
}
