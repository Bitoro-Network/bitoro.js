import BigNumber from 'bignumber.js';
import { BytesLike, ethers, CallOverrides } from 'ethers';
import { Hexable } from 'ethers/lib/utils';
import { ChainStorage, DecodedSubAccountId, SignerOrProvider, SubAccount } from './types';
import { Reader } from './abi/Reader';
/**
 * SubAccountId =
 *         96             88        80       72        0
 * +---------+--------------+---------+--------+--------+
 * | Account | collateralId | assetId | isLong | unused |
 * +---------+--------------+---------+--------+--------+
 */
export declare function encodeSubAccountId(account: BytesLike | Hexable, collateralId: number, assetId: number, isLong: boolean): string;
export declare function decodeSubAccountId(subAccountId: BytesLike | Hexable): DecodedSubAccountId;
export declare function getReaderContract(signerOrProvider: SignerOrProvider, contractAddress?: string): Promise<Reader>;
export declare function getSubAccounts(reader: Reader, subAccountIds: BytesLike[], overrides?: CallOverrides): Promise<{
    [subAccountId: string]: SubAccount;
}>;
export declare function getSubAccountsAndOrders(reader: Reader, subAccountIds: BytesLike[], orderIds: number[], overrides?: CallOverrides): Promise<{
    subAccounts: {
        [subAccountId: string]: SubAccount;
    };
    orders: {
        [orderId: number]: [string, string, string];
    };
}>;
export declare function getChainStorage(reader: Reader, overrides?: CallOverrides): Promise<ChainStorage>;
export declare function fromUnit(n: ethers.BigNumber, decimals: number): BigNumber;
export declare function fromWei(n: ethers.BigNumber): BigNumber;
export declare function fromRate(n: number): BigNumber;
export declare function and64(v1: number, v2: number): number;
export declare function test64(v1: number, mask: number): boolean;
