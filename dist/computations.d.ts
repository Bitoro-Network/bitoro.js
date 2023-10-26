import { SubAccountDetails, SubAccount, Asset, PriceDict, OpenPositionResult, ClosePositionResult, WithdrawProfitResult, LiquidityPool, WithdrawCollateralResult } from './types';
import { SpreadType } from './constants';
import BigNumber from 'bignumber.js';
export declare function computeSubAccount(assets: Asset[], subAccountId: string, subAccount: SubAccount, collateralPrice: BigNumber, assetPrice: BigNumber): SubAccountDetails;
export declare function computeTradingPrice(assets: Asset[], subAccountId: string, prices: PriceDict, // given by off-chain broker
isOpenPosition: boolean): {
    assetPrice: BigNumber;
    collateralPrice: BigNumber;
};
export declare function computeLiquidityPrice(assets: Asset[], prices: PriceDict, // given by off-chain broker
tokenId: number, isAddLiquidity: boolean): BigNumber;
export declare function computePositionPnlUsd(asset: Asset, subAccount: SubAccount, isLong: boolean, amount: BigNumber, assetPrice: BigNumber): {
    pendingPnlUsd: BigNumber;
    pnlUsd: BigNumber;
};
export declare function computeFundingFeeUsd(subAccount: SubAccount, asset: Asset, isLong: boolean, assetPrice: BigNumber): BigNumber;
export declare function computeOpenPosition(assets: Asset[], subAccountId: string, subAccount: SubAccount, prices: PriceDict, amount: BigNumber, brokerGasFee: BigNumber): OpenPositionResult;
export declare function computeClosePosition(assets: Asset[], subAccountId: string, subAccount: SubAccount, profitAssetId: number, prices: PriceDict, amount: BigNumber, brokerGasFee: BigNumber): ClosePositionResult;
export declare function computeWithdrawCollateral(assets: Asset[], subAccountId: string, subAccount: SubAccount, prices: PriceDict, amount: BigNumber): WithdrawCollateralResult;
export declare function computeWithdrawProfit(assets: Asset[], subAccountId: string, subAccount: SubAccount, profitAssetId: number, prices: PriceDict, amount: BigNumber): WithdrawProfitResult;
export declare function computeRealizeProfit(profitUsd: BigNumber, feeUsd: BigNumber, profitAsset: Asset, profitAssetPrice: BigNumber): {
    deductUsd: BigNumber;
    profitAssetTransferred: BigNumber;
    bitoroTokenTransferred: BigNumber;
};
export declare function computeRealizeLoss(subAccount: SubAccount, collateralPrice: BigNumber, lossUsd: BigNumber, isThrowBankrupt: boolean): void;
export declare function computeLiquidityFeeRate(poolConfig: LiquidityPool, currentAssetValue: BigNumber, targetAssetValue: BigNumber, isAdd: boolean, deltaValue: BigNumber): BigNumber;
export declare function computeFundingRate8H(pool: LiquidityPool, asset: Asset, stableUtilization: BigNumber, unstableUtilization: BigNumber): {
    longFundingRate8H: BigNumber;
    shortFundingRate8H: BigNumber;
};
/**
 * Funding rate formula
 *
 * ^ fr           / limit
 * |            /
 * |          /
 * |        /
 * |______/ base
 * |    .
 * |  .
 * |.
 * +-------------------> %util
 *
 * NOTE: this function always returns 8h funding rate. if fundingInterval is 1h, the fee will be
 *       fundingRate8H / 8 every hour.
 */
export declare function computeSingleFundingRate8H(baseRate8H: BigNumber, limitRate8H: BigNumber, utilization: BigNumber): BigNumber;
/**
 * @dev check price and add spread, where spreadType should be:
 *
 *      subAccount.isLong   openPosition   closePosition   addLiquidity   removeLiquidity
 *      long                ask            bid
 *      short               bid            ask
 *      N/A                                                bid            ask
 */
export declare function computePriceWithSpread(asset: Asset, price: BigNumber, spreadType: SpreadType): BigNumber;
