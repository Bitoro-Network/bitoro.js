import { BigNumber } from 'bignumber.js';
import { Asset } from '../types';
import { GmxAdapterAccountDetails, GmxAdapterClosePositionResult, GmxAdapterOpenPositionResult, GmxAdapterStorage, AggregatorSubAccount, GmxAdapterWithdrawCollateralResult } from './types';
export declare function computeGmxAdapterAccount(assets: Asset[], // BITORO storage
storage: GmxAdapterStorage, // aggregator storage
pos: AggregatorSubAccount, assetApiPrice: BigNumber): GmxAdapterAccountDetails;
export declare function computeGmxAdapterAccountSimulateKeeper(assets: Asset[], // BITORO storage
storage: GmxAdapterStorage, // aggregator storage
pos: AggregatorSubAccount, assetApiPrice: BigNumber): GmxAdapterAccountDetails;
export declare function computeGmxAdapterOpenPosition(assets: Asset[], // BITORO storage
storage: GmxAdapterStorage, // aggregator storage
pos: AggregatorSubAccount, assetApiPrice: BigNumber, // asset price
borrowCollateral: BigNumber, // in collateral token
sizeDeltaUsd: BigNumber, // position size
swapInTokenAddress: string, // swapIn token
swapInAmount: BigNumber): GmxAdapterOpenPositionResult;
export declare function computeGmxAdapterClosePosition(assets: Asset[], // BITORO storage
storage: GmxAdapterStorage, // aggregator storage
pos: AggregatorSubAccount, assetApiPrice: BigNumber, sizeDeltaUsd: BigNumber, // position size
collateralDeltaUsd: BigNumber): GmxAdapterClosePositionResult;
export declare function computeGmxAdapterWithdrawCollateralWithUsd(assets: Asset[], // BITORO storage
storage: GmxAdapterStorage, // aggregator storage
pos: AggregatorSubAccount, assetApiPrice: BigNumber, collateralDeltaUsd: BigNumber): GmxAdapterWithdrawCollateralResult;
export declare function computeGmxAdapterWithdrawCollateral(assets: Asset[], // BITORO storage
storage: GmxAdapterStorage, // aggregator storage
pos: AggregatorSubAccount, assetApiPrice: BigNumber, withdrawCollateral: BigNumber): GmxAdapterWithdrawCollateralResult;
export declare function computeGmxAdapterMaxWithdrawCollateral(assets: Asset[], // BITORO storage
storage: GmxAdapterStorage, // aggregator storage
pos: AggregatorSubAccount, assetApiPrice: BigNumber): GmxAdapterWithdrawCollateralResult;
export declare function calculateGmxAdapterOpenPositionWithSize(assets: Asset[], // BITORO storage
storage: GmxAdapterStorage, // aggregator storage
collateralTokenAddress: string, // key
assetTokenAddress: string, // key
isLong: boolean, // key
assetApiPrice: BigNumber, // asset price
leverage: BigNumber, positionAmount: BigNumber, // in asset
swapInTokenAddress: string, // swapIn token. will use contract price because swapping executes immediately
enableBorrow: boolean): {
    borrowCollateral: BigNumber;
    sizeDeltaUsd: BigNumber;
    borrowUsd: BigNumber;
    swapOutUsd: BigNumber;
    swapOutCollateral: BigNumber;
    swapInAmount: BigNumber;
};
export declare function calculateGmxAdapterOpenPositionWithSizeUsd(assets: Asset[], // BITORO storage
storage: GmxAdapterStorage, // aggregator storage
collateralTokenAddress: string, // key
assetTokenAddress: string, // key
isLong: boolean, // key
assetApiPrice: BigNumber, // asset price
leverage: BigNumber, sizeUsd: BigNumber, // in usd
swapInTokenAddress: string, // swapIn token. will use contract price because swapping executes immediately
enableBorrow: boolean): {
    borrowCollateral: BigNumber;
    sizeDeltaUsd: BigNumber;
    borrowUsd: BigNumber;
    swapOutUsd: BigNumber;
    swapOutCollateral: BigNumber;
    swapInAmount: BigNumber;
};
export declare function calculateGmxAdapterOpenPositionWithCost(assets: Asset[], // BITORO storage
storage: GmxAdapterStorage, // aggregator storage
collateralTokenAddress: string, // key
assetTokenAddress: string, // key
isLong: boolean, // key
assetApiPrice: BigNumber, // asset price
leverage: BigNumber, swapInTokenAddress: string, // swapIn token
swapInAmount: BigNumber, // swapIn amount. in swapIn token
enableBorrow: boolean): {
    borrowCollateral: BigNumber;
    sizeDeltaUsd: BigNumber;
    borrowUsd: BigNumber;
    swapOutUsd: BigNumber;
    swapOutCollateral: BigNumber;
};
export declare function calculateGmxAdapterClosePositionCollateralUsd(assets: Asset[], // BITORO storage
storage: GmxAdapterStorage, // aggregator storage
pos: AggregatorSubAccount, assetApiPrice: BigNumber, amount: BigNumber): BigNumber;
