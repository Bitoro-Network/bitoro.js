import BigNumber from 'bignumber.js';
import { InsufficientLiquidityError } from '../types';
export declare enum AggregatorProjectId {
    Invalid = 0,
    Gmx = 1
}
export declare enum AggregatorOrderCategory {
    None = 0,
    Open = 1,
    Close = 2,
    Liquidate = 3
}
export interface GmxAdapterStorage {
    collaterals: {
        [lowerCaseTokenAddress: string]: AggregatorCollateral;
    };
    gmx: GmxCoreStorage;
    shortFundingAssetId: number;
}
export interface AggregatorCollateral {
    boostFeeRate: BigNumber;
    initialMarginRate: BigNumber;
    maintenanceMarginRate: BigNumber;
    liquidationFeeRate: BigNumber;
    totalBorrow: BigNumber;
    borrowLimit: BigNumber;
}
export interface AggregatorSubAccount {
    proxyAddress: string;
    projectId: AggregatorProjectId;
    account: string;
    collateralTokenAddress: string;
    assetTokenAddress: string;
    isLong: boolean;
    isLiquidating: boolean;
    cumulativeDebt: BigNumber;
    cumulativeFee: BigNumber;
    debtEntryFunding: BigNumber;
    proxyCollateralBalance: BigNumber;
    proxyEthBalance: BigNumber;
    priceImpactFee: BigNumber;
    gmx: GmxCoreAccount;
    gmxOrders: GmxAdapterOrder[];
}
export interface GmxAdapterAccountDetails {
    account: AggregatorSubAccount;
    computed: {
        size: BigNumber;
        collateral: BigNumber;
        collateralPrice: BigNumber;
        minPrice: BigNumber;
        maxPrice: BigNumber;
        markPrice: BigNumber;
        inflightBorrow: BigNumber;
        traderInitialCostUsd: BigNumber;
        marginBalanceUsd: BigNumber;
        isIMSafe: boolean;
        isMMSafe: boolean;
        leverage: BigNumber;
        fundingFeeUsd: BigNumber;
        aggregatorFundingFeeUsd: BigNumber;
        gmxFundingFeeUsd: BigNumber;
        pnlUsd: BigNumber;
        pendingPnlUsd: BigNumber;
        pendingPnlAfterFundingUsd: BigNumber;
        pendingRoe: BigNumber;
        liquidationPrice: BigNumber;
    };
}
export interface GmxAdapterOrder {
    orderHistoryKey: string;
    category: AggregatorOrderCategory;
    receiver: GmxAdapterOrderReceiver;
    gmxOrderIndex: number;
    borrow: BigNumber;
    placeOrderTime: number;
    account: string;
    collateralToken: string;
    indexToken: string;
    isLong: boolean;
    isFillOrCancel: boolean;
    amountIn: BigNumber;
    collateralDeltaUsd: BigNumber;
    sizeDeltaUsd: BigNumber;
    triggerPrice: BigNumber;
    triggerAboveThreshold: boolean;
    tpOrderHistoryKey: string;
    slOrderHistoryKey: string;
}
export interface GmxAdapterOpenPositionResult {
    sizeDeltaUsd: BigNumber;
    afterTrade: GmxAdapterAccountDetails;
    isTradeSafe: boolean;
    liquidityWarning?: InsufficientLiquidityError;
    aggregatorFundingFeeUsd: BigNumber;
    gmxPosFeeUsd: BigNumber;
    boostFeeUsd: BigNumber;
    feeUsd: BigNumber;
    swapFeeRate: BigNumber;
    swapFeeUsd: BigNumber;
    swapOutCollateral: BigNumber;
    gmxAmountIn: BigNumber;
}
export interface GmxAdapterClosePositionResult {
    sizeDeltaUsd: BigNumber;
    collateralDeltaUsd: BigNumber;
    realizedPnlUsd: BigNumber;
    gmxUsdOutAfterFee: BigNumber;
    gmxCollateralOutAfterFee: BigNumber;
    boostFeeUsd: BigNumber;
    aggregatorFundingFeeUsd: BigNumber;
    feeUsd: BigNumber;
    repayCollateral: BigNumber;
    collateralOut: BigNumber;
    afterTrade: GmxAdapterAccountDetails;
    isTradeSafe: boolean;
}
export interface GmxAdapterWithdrawCollateralResult {
    collateralDeltaUsd: BigNumber;
    gmxUsdOutAfterFee: BigNumber;
    gmxCollateralOutAfterFee: BigNumber;
    aggregatorFundingFeeUsd: BigNumber;
    feeUsd: BigNumber;
    collateralOut: BigNumber;
    afterTrade: GmxAdapterAccountDetails;
    isTradeSafe: boolean;
}
export declare enum GmxAdapterOrderReceiver {
    MarketIncreasing = 0,
    MarketDecreasing = 1,
    LimitIncreasing = 2,
    LimitDecreasing = 3
}
export interface GmxTokenConfig {
    symbol: string;
    decimals: number;
    address: string;
    isAsset: boolean;
    isShortable: boolean;
    isStable: boolean;
    isNative: boolean;
    bitoroAssetId?: number;
}
export interface GmxCoreStorage {
    tokens: {
        [lowerCaseTokenAddress: string]: GmxTokenInfo;
    };
    totalTokenWeights: number;
    minProfitTime: number;
    minExecutionFee: BigNumber;
    liquidationFeeUsd: BigNumber;
    marginFeeRate: BigNumber;
    swapFeeRate: BigNumber;
    stableSwapFeeRate: BigNumber;
    taxRate: BigNumber;
    stableTaxRate: BigNumber;
    usdgSupply: BigNumber;
}
export interface GmxTokenInfo {
    config: GmxTokenConfig;
    poolAmount: BigNumber;
    reservedAmount: BigNumber;
    usdgAmount: BigNumber;
    weight: number;
    globalShortSizeUsd: BigNumber;
    maxGlobalShortSizeUsd: BigNumber;
    maxGlobalLongSizeUsd: BigNumber;
    contractMinPrice: BigNumber;
    contractMaxPrice: BigNumber;
    guaranteedUsd: BigNumber;
    minProfit: BigNumber;
    maxUsdgAmounts: BigNumber;
    redemptionAmount: BigNumber;
    bufferAmounts: BigNumber;
    fundingRate: BigNumber;
    cumulativeFundingRate: BigNumber;
    availableAmount: BigNumber;
    availableUsd: BigNumber;
    maxAvailableShortUsd: BigNumber;
    maxAvailableLongUsd: BigNumber;
    maxLongCapacityUsd: BigNumber;
}
export interface GmxCoreAccount {
    collateralTokenAddress: string;
    assetTokenAddress: string;
    isLong: boolean;
    sizeUsd: BigNumber;
    collateralUsd: BigNumber;
    lastIncreasedTime: number;
    entryPrice: BigNumber;
    entryFundingRate: BigNumber;
}
export interface GmxCoreAccountDetails {
    gmxAccount: GmxCoreAccount;
    computed: {
        size: BigNumber;
        collateral: BigNumber;
        minPrice: BigNumber;
        maxPrice: BigNumber;
        markPrice: BigNumber;
        marginBalanceUsd: BigNumber;
        isIMSafe: boolean;
        isMMSafe: boolean;
        leverage: BigNumber;
        fundingFeeUsd: BigNumber;
        pendingPnlUsd: BigNumber;
        pendingPnlAfterFundingUsd: BigNumber;
        pendingRoe: BigNumber;
        pnlUsd: BigNumber;
        liquidationPrice: BigNumber;
        withdrawableCollateralUsd: BigNumber;
    };
}
