import BigNumber from 'bignumber.js';
import { BytesLike } from 'ethers';
import { Hexable } from 'ethers/lib/utils';
import { SignerOrProvider } from '../types';
import { AggregatorSubAccount, GmxAdapterStorage, AggregatorOrderCategory, GmxAdapterOrderReceiver, GmxTokenConfig } from './types';
import { CallOverrides, ethers } from 'ethers';
import { Reader as AggregatorReader } from '../abi/aggregator/Reader';
export declare function fromGmxUsd(n: ethers.BigNumber): BigNumber;
export declare function getAggregatorReaderContract(signerOrProvider: SignerOrProvider, contractAddress?: string): Promise<AggregatorReader>;
export declare function getGmxAdapterStorage(reader: AggregatorReader, chainId: number, gmxPositionManager: string, gmxPositionRouter: string, gmxOrderBook: string, aggregatorTokenAddresses?: string[], gmxTokenAddresses?: string[], overrides?: CallOverrides): Promise<GmxAdapterStorage>;
export declare function getAggregatorPositionsAndOrders(reader: AggregatorReader, chainId: number, gmxPositionRouter: string, gmxOrderBook: string, account: string, overrides?: CallOverrides): Promise<{
    subAccounts: AggregatorSubAccount[];
}>;
export declare function decodeGmxAdapterOrderHistoryKey(key: BytesLike | Hexable, gmxCollateral: GmxTokenConfig): {
    category: AggregatorOrderCategory;
    receiver: GmxAdapterOrderReceiver;
    gmxOrderIndex: number;
    borrow: BigNumber;
    placeOrderTime: number;
};
