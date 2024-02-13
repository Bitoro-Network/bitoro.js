import { GmxTokenInfo, GmxCoreAccount, GmxCoreAccountDetails, GmxCoreStorage } from './types';
import { BigNumber } from 'bignumber.js';
import { InsufficientLiquidityError } from '../types';
export declare function computeGmxCoreAccount(storage: GmxCoreStorage, pos: GmxCoreAccount, assetApiPrice: BigNumber): GmxCoreAccountDetails;
export declare function computeGmxCoreIncrease(storage: GmxCoreStorage, pos: GmxCoreAccount, assetApiPrice: BigNumber, sizeDeltaUsd: BigNumber, collateralDeltaUsd: BigNumber): {
    afterTrade: GmxCoreAccountDetails;
    isTradeSafe: boolean;
    feeUsd: BigNumber;
    liquidityWarning?: InsufficientLiquidityError;
};
export declare function computeGmxCoreDecrease(storage: GmxCoreStorage, pos: GmxCoreAccount, assetApiPrice: BigNumber, sizeDeltaUsd: BigNumber, // in USD
collateralDeltaUsd: BigNumber): {
    afterTrade: GmxCoreAccountDetails;
    isTradeSafe: boolean;
    feeUsd: BigNumber;
    realizedPnlUsd: BigNumber;
    usdOutAfterFee: BigNumber;
    collateralOutAfterFee: BigNumber;
};
export declare function getGmxCorePrice(token: GmxTokenInfo, apiPrice: BigNumber | null): {
    minPrice: BigNumber;
    maxPrice: BigNumber;
};
export declare function computeGmxCoreSwap(storage: GmxCoreStorage, fromToken: GmxTokenInfo, toToken: GmxTokenInfo, fromAmount: BigNumber, fromTokenApiPrice: BigNumber | null, // CAUTION: if swapping execute immediately, you should pass null
toTokenApiPrice: BigNumber | null): {
    toAmount: BigNumber;
    feeRate: BigNumber;
    feeUsd: BigNumber;
    liquidityWarning?: InsufficientLiquidityError;
};
export declare function getGmxCoreTokenFeeRate(storage: GmxCoreStorage, token: GmxTokenInfo, usdgDelta: BigNumber, feeRate: BigNumber, taxRate: BigNumber, increment: boolean): BigNumber;
export declare function getGmxCoreTargetUsdgAmount(storage: GmxCoreStorage, token: GmxTokenInfo): BigNumber;
export declare function computeGmxCoreUsdToTokenMin(usd: BigNumber, token: GmxTokenInfo, tokenApiPrice: BigNumber | null): BigNumber;
export declare function computeGmxCoreTokenToUsdMin(tokenAmount: BigNumber, token: GmxTokenInfo, tokenApiPrice: BigNumber | null): BigNumber;
export declare function calculateGmxCoreSwapBySwapOut(storage: GmxCoreStorage, fromToken: GmxTokenInfo, toToken: GmxTokenInfo, toAmount: BigNumber, fromTokenApiPrice: BigNumber | null, toTokenApiPrice: BigNumber | null): {
    fromAmount: BigNumber;
    toAmount: BigNumber;
    feeRate: BigNumber;
    feeUsd: BigNumber;
};
