"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpreadType = exports.PreMinedTokenTotalSupply = exports.PositionOrderFlags = exports.OrderType = exports.CHAIN_ID_TO_REFERRAL_MANAGER_ADDRESS = exports.CHAIN_ID_TO_VAULT_ADDRESS = exports.CHAIN_ID_TO_REWARD_MANAGER_ADDRESS = exports.CHAIN_ID_TO_BITORO_VESTER_ADDRESS = exports.CHAIN_ID_TO_BLP_VESTER_ADDRESS = exports.CHAIN_ID_TO_VOTING_ESCROW_ADDRESS = exports.CHAIN_ID_TO_BLP_FEE_REWARD_TRACKER_ADDRESS = exports.CHAIN_ID_TO_REWARD_ROUTER_ADDRESS = exports.CHAIN_ID_TO_READER_ADDRESS = exports.CHAIN_ID_TO_LIQUIDITY_MANAGER_ADDRESS = exports.CHAIN_ID_TO_ORDER_BOOK_ADDRESS = exports.CHAIN_ID_TO_LIQUIDITY_POOL_ADDRESS = exports.CHAIN_ID_TO_BLP_ADDRESS = exports.CHAIN_ID_TO_BITORO_ADDRESS = exports.CHAIN_ID_TO_BCB_ADDRESS = exports.CHAIN_ID_TO_PROTOCOL_OWNED_LIQUIDITY_ADDRESS = exports.MAIN_CHAIN_IDS = exports._3 = exports._2 = exports._1 = exports._0 = exports.ASSET_IS_STRICT_STABLE = exports.ASSET_IS_ENABLED = exports.ASSET_USE_STABLE_TOKEN_FOR_PROFIT = exports.ASSET_IS_SHORTABLE = exports.ASSET_IS_OPENABLE = exports.ASSET_IS_TRADABLE = exports.ASSET_CAN_ADD_REMOVE_LIQUIDITY = exports.ASSET_IS_STABLE = exports.RATIO_DECIMALS = exports.DECIMALS = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
exports.DECIMALS = 18;
exports.RATIO_DECIMALS = 5;
exports.ASSET_IS_STABLE = 0x00000000000001; // is a usdt, usdc, ...
exports.ASSET_CAN_ADD_REMOVE_LIQUIDITY = 0x00000000000002; // can call addLiquidity and removeLiquidity with this token
exports.ASSET_IS_TRADABLE = 0x00000000000100; // allowed to be assetId
exports.ASSET_IS_OPENABLE = 0x00000000010000; // can open position
exports.ASSET_IS_SHORTABLE = 0x00000001000000; // allow shorting this asset
exports.ASSET_USE_STABLE_TOKEN_FOR_PROFIT = 0x00000100000000; // take profit will get stable coin
exports.ASSET_IS_ENABLED = 0x00010000000000; // allowed to be assetId and collateralId
exports.ASSET_IS_STRICT_STABLE = 0x01000000000000; // assetPrice is always 1 unless volatility exceeds strictStableDeviation
exports._0 = new bignumber_js_1.default('0');
exports._1 = new bignumber_js_1.default('1');
exports._2 = new bignumber_js_1.default('2');
exports._3 = new bignumber_js_1.default('3');
exports.MAIN_CHAIN_IDS = [
    421611, // arb rinkeby
    42161 // arb1
];
exports.CHAIN_ID_TO_PROTOCOL_OWNED_LIQUIDITY_ADDRESS = {
    // arb1
    42161: '0x18891480b9dd2aC5eF03220C45713d780b5CFdeF'
};
exports.CHAIN_ID_TO_BCB_ADDRESS = {
    // arb1
    42161: '0x4e352cf164e64adcbad318c3a1e222e9eba4ce42'
};
exports.CHAIN_ID_TO_BITORO_ADDRESS = {
    // arb1
    42161: '0x8BB2Ac0DCF1E86550534cEE5E9C8DED4269b679B'
};
exports.CHAIN_ID_TO_BLP_ADDRESS = {
    // arb1
    42161: '0x7CbaF5a14D953fF896E5B3312031515c858737C8',
    // avalanche
    43114: '0xAf2D365e668bAaFEdcFd256c0FBbe519e594E390',
    // bsc
    56: '0x07145Ad7C7351c6FE86b6B841fC9Bed74eb475A7',
    // fantom
    250: '0xDDAde9a8dA4851960DFcff1AE4A18EE75C39eDD2',
    // optimism
    10: '0x0509474f102b5cd3f1f09e1E91feb25938eF0f17'
};
exports.CHAIN_ID_TO_LIQUIDITY_POOL_ADDRESS = {
    // arb1
    42161: '0x3e0199792Ce69DC29A0a36146bFa68bd7C8D6633',
    // avalanche
    43114: '0x0bA2e492e8427fAd51692EE8958eBf936bEE1d84',
    // bsc
    56: '0x855E99F768FaD76DD0d3EB7c446C0b759C96D520',
    // fantom
    250: '0x2e81F443A11a943196c88afcB5A0D807721A88E6',
    // optimism
    10: '0xc6BD76FA1E9e789345e003B361e4A0037DFb7260'
};
exports.CHAIN_ID_TO_ORDER_BOOK_ADDRESS = {
    // arb1
    42161: '0xa19fD5aB6C8DCffa2A295F78a5Bb4aC543AAF5e3',
    // avalanche
    43114: '0x5898c3E218a8501533d771C86e2fA37743ea2aDd',
    // bsc
    56: '0xa67aA293642C4e02D1b9F360b007C0dBDc451A08',
    // fantom
    250: '0x0c30b10462CdED51C3CA31e7C51019b7d25a965B',
    // optimism
    10: '0x6Fde9892Fd5302ac3c68688085BD5b031A63BC9D'
};
exports.CHAIN_ID_TO_LIQUIDITY_MANAGER_ADDRESS = {
    // arb1
    42161: '0x02FAe054ACD7FB1615471319c4E3029DFbC2B23C',
    // avalanche
    43114: '0x7c7fe685FD4c6185db22529556202c797D010113',
    // bsc
    56: '0x0c30b10462CdED51C3CA31e7C51019b7d25a965B',
    // fantom
    250: '0xee85CDdCe0CF068091081eA0fcd53f279aa3B09F',
    // optimism
    10: '0xFEc3704f4A02cB0EE6C7d52Cbf72b11E0441E9d5'
};
exports.CHAIN_ID_TO_READER_ADDRESS = {
    // arb1
    42161: '0xF64B4bD682E792e0BA78956B86F2Cee946d2E7D6',
    // avalanche
    43114: '0xCE443B8c1C3E3edb3b9F3B2B482FaaC09A95B01d',
    // bsc
    56: '0x9897A73a606606394FA2324D16f3926f5963a9C3',
    // fantom
    250: '0x30acc119F8b60C9cb92b8E3c4c7f8830c82f707E',
    // optimism
    10: '0xdF88Fe94EF674D8c1ab1743AD88717E7AE893a44'
};
exports.CHAIN_ID_TO_REWARD_ROUTER_ADDRESS = {
    // arb1
    42161: '0xaf9C4F6A0ceB02d4217Ff73f3C95BbC8c7320ceE'
};
exports.CHAIN_ID_TO_BLP_FEE_REWARD_TRACKER_ADDRESS = {
    // arb1
    42161: '0x290450cDea757c68E4Fe6032ff3886D204292914'
};
exports.CHAIN_ID_TO_VOTING_ESCROW_ADDRESS = {
    // arb1
    42161: '0xA65bA125a25b51539a3d10910557b28215097810'
};
exports.CHAIN_ID_TO_BLP_VESTER_ADDRESS = {
    // arb1
    42161: '0xBCF8c124975DE6277D8397A3Cad26E2333620226'
};
exports.CHAIN_ID_TO_BITORO_VESTER_ADDRESS = {
    // arb1
    42161: '0xD7e864658DdE98B1A1d70ce6d84D78e0A8e8aD18'
};
exports.CHAIN_ID_TO_REWARD_MANAGER_ADDRESS = {
    // arb1
    42161: '0xaf9C4F6A0ceB02d4217Ff73f3C95BbC8c7320ceE'
};
exports.CHAIN_ID_TO_VAULT_ADDRESS = {
    // arb1
    42161: '0x917952280770Daa800E1B4912Ea08450Bf71d57e',
    // avalanche
    43114: '0x29a28cC3FdC128693ef6a596eF45c43ff63B7062',
    // bsc
    56: '0x8D751570BA1Fd8a8ae89E4B27d18bf6C321Aab0a',
    // fantom
    250: '0xdAF2064F52F123EE1D410e97C2df549c23a99683',
    // optimism
    10: '0x39d653884B611E0A8dbdb9720Ad5D75642fd544b'
};
exports.CHAIN_ID_TO_REFERRAL_MANAGER_ADDRESS = {
    // arb1
    42161: '0xa68d96F26112377abdF3d6b9fcde9D54f2604C2a',
    // avalanche
    43114: '0x1444edF22cd6C891391f3644b435eF6b8270C4B0',
    // bsc
    56: '0x3EfE4639eb082e22209fee29aAbaf14Ade5bF82B',
    // fantom
    250: '0x3EfE4639eb082e22209fee29aAbaf14Ade5bF82B',
    // optimism
    10: '0xc9296e12e2Fe55605d9F6dB5412EaA1938F0B404'
};
var OrderType;
(function (OrderType) {
    OrderType[OrderType["Invalid"] = 0] = "Invalid";
    OrderType[OrderType["Position"] = 1] = "Position";
    OrderType[OrderType["Liquidity"] = 2] = "Liquidity";
    OrderType[OrderType["Withdrawal"] = 3] = "Withdrawal";
    OrderType[OrderType["Rebalance"] = 4] = "Rebalance";
})(OrderType || (exports.OrderType = OrderType = {}));
var PositionOrderFlags;
(function (PositionOrderFlags) {
    PositionOrderFlags[PositionOrderFlags["OpenPosition"] = 128] = "OpenPosition";
    PositionOrderFlags[PositionOrderFlags["MarketOrder"] = 64] = "MarketOrder";
    PositionOrderFlags[PositionOrderFlags["WithdrawAllIfEmpty"] = 32] = "WithdrawAllIfEmpty";
    PositionOrderFlags[PositionOrderFlags["TriggerOrder"] = 16] = "TriggerOrder";
    PositionOrderFlags[PositionOrderFlags["TpSlStrategy"] = 8] = "TpSlStrategy";
    //                     for close-position-order, this flag means ignore limitPrice and profitTokenId, and use extra.tpPrice, extra.slPrice, extra.tpslProfitTokenId instead.
    PositionOrderFlags[PositionOrderFlags["ShouldReachMinProfit"] = 4] = "ShouldReachMinProfit";
})(PositionOrderFlags || (exports.PositionOrderFlags = PositionOrderFlags = {}));
// do not forget toWei(PreMinedTokenTotalSupply)
exports.PreMinedTokenTotalSupply = '1000000000000000000';
var SpreadType;
(function (SpreadType) {
    SpreadType[SpreadType["Ask"] = 0] = "Ask";
    SpreadType[SpreadType["Bid"] = 1] = "Bid";
})(SpreadType || (exports.SpreadType = SpreadType = {}));
//# sourceMappingURL=constants.js.map