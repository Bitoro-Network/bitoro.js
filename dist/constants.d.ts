import BigNumber from 'bignumber.js';
export declare const DECIMALS = 18;
export declare const RATIO_DECIMALS = 5;
export declare const ASSET_IS_STABLE = 1;
export declare const ASSET_CAN_ADD_REMOVE_LIQUIDITY = 2;
export declare const ASSET_IS_TRADABLE = 256;
export declare const ASSET_IS_OPENABLE = 65536;
export declare const ASSET_IS_SHORTABLE = 16777216;
export declare const ASSET_USE_STABLE_TOKEN_FOR_PROFIT = 4294967296;
export declare const ASSET_IS_ENABLED = 1099511627776;
export declare const ASSET_IS_STRICT_STABLE = 281474976710656;
export declare const _0: BigNumber;
export declare const _1: BigNumber;
export declare const _2: BigNumber;
export declare const _3: BigNumber;
export declare const MAIN_CHAIN_IDS: number[];
export declare const CHAIN_ID_TO_PROTOCOL_OWNED_LIQUIDITY_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_BCB_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_BITORO_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_BLP_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_LIQUIDITY_POOL_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_ORDER_BOOK_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_LIQUIDITY_MANAGER_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_READER_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_REWARD_ROUTER_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_BLP_FEE_REWARD_TRACKER_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_VOTING_ESCROW_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_BLP_VESTER_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_BITORO_VESTER_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_REWARD_MANAGER_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_VAULT_ADDRESS: {
    [chainID: number]: string;
};
export declare const CHAIN_ID_TO_REFERRAL_MANAGER_ADDRESS: {
    [chainID: number]: string;
};
export declare enum OrderType {
    Invalid = 0,
    Position = 1,
    Liquidity = 2,
    Withdrawal = 3,
    Rebalance = 4
}
export declare enum PositionOrderFlags {
    OpenPosition = 128,
    MarketOrder = 64,
    WithdrawAllIfEmpty = 32,
    TriggerOrder = 16,
    TpSlStrategy = 8,
    ShouldReachMinProfit = 4
}
export declare const PreMinedTokenTotalSupply = "1000000000000000000";
export declare enum SpreadType {
    Ask = 0,
    Bid = 1
}
