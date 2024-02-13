import BigNumber from 'bignumber.js';
import { GmxTokenConfig, AggregatorSubAccount } from './types';
export declare const CHAIN_ID_TO_AGGREGATOR_READER_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_AGGREGATOR_FACTORY_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_AGGREGATOR_VAULT_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_AGGREGATOR_POSITION_MANAGER_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_AGGREGATOR_POSITION_ROUTER_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_AGGREGATOR_ORDER_BOOK_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_AGGREGATOR_ROUTER_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_AGGREGATOR_SHORT_FUNDING_ASSET_ID: {
    [chainID: number]: number;
};
export declare const GMX_BASIS_POINTS_DECIMALS = 4;
export declare const GMX_FUNDING_RATE_DECIMALS = 6;
export declare const GMX_PRICE_DECIMALS = 30;
export declare const GMX_MAX_LEVERAGE = 100;
export declare const GMX_CORE_INITIAL_LEVERAGE: BigNumber;
export declare const GMX_AGGREGATOR_BORROW_RATE: BigNumber;
export declare const GMX_POSITION_FEE_RATE: BigNumber;
export declare const GMX_TOKENS: {
    [chainID: number]: GmxTokenConfig[];
};
export declare const MOCK_SUB_ACCOUNT: AggregatorSubAccount;
export declare const CHAIN_ID_TO_ETH_ORACLE_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_BTC_ORACLE_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_USDC_ORACLE_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_LINK_ORACLE_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_UNI_ORACLE_ADDRESS: {
    [chainID: number]: string;
};
