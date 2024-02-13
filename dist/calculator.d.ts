import { SubAccount, Asset, PriceDict } from './types';
import BigNumber from 'bignumber.js';
export declare function calculateOpenPositionWithCollateral(assets: Asset[], subAccountId: string, subAccount: SubAccount, prices: PriceDict, leverage: BigNumber, collateralAmount: BigNumber, brokerGasFee: BigNumber): BigNumber;
export declare function calculateClosePositionCollateralAmount(assets: Asset[], subAccountId: string, subAccount: SubAccount, prices: PriceDict, profitAssetId: number, deltaPosition: BigNumber, brokerGasFee: BigNumber): BigNumber;
export declare function binarySearchRight(f: (x: BigNumber) => boolean, guess: BigNumber | null, upperLimit?: BigNumber | null, // x* < upperLimit
maxIteration?: number | null, tolerance?: BigNumber | null): BigNumber;
export declare function binarySearchLeft(f: (x: BigNumber) => boolean, guess: BigNumber | null, upperLimit?: BigNumber | null, // x* < upperLimit
maxIteration?: number | null, tolerance?: BigNumber | null): BigNumber;
