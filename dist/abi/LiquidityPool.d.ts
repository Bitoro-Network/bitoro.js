import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type AssetStruct = {
    symbol: BytesLike;
    tokenAddress: string;
    id: BigNumberish;
    decimals: BigNumberish;
    flags: BigNumberish;
    _flagsPadding: BigNumberish;
    initialMarginRate: BigNumberish;
    maintenanceMarginRate: BigNumberish;
    minProfitRate: BigNumberish;
    minProfitTime: BigNumberish;
    positionFeeRate: BigNumberish;
    referenceOracle: string;
    referenceDeviation: BigNumberish;
    referenceOracleType: BigNumberish;
    halfSpread: BigNumberish;
    credit: BigNumberish;
    _reserved2: BigNumberish;
    collectedFee: BigNumberish;
    liquidationFeeRate: BigNumberish;
    spotLiquidity: BigNumberish;
    maxLongPositionSize: BigNumberish;
    totalLongPosition: BigNumberish;
    averageLongPrice: BigNumberish;
    maxShortPositionSize: BigNumberish;
    totalShortPosition: BigNumberish;
    averageShortPrice: BigNumberish;
    bitoroTokenAddress: string;
    spotWeight: BigNumberish;
    longFundingBaseRate8H: BigNumberish;
    longFundingLimitRate8H: BigNumberish;
    longCumulativeFundingRate: BigNumberish;
    shortCumulativeFunding: BigNumberish;
};
export type AssetStructOutput = [
    string,
    string,
    number,
    number,
    BigNumber,
    number,
    number,
    number,
    number,
    number,
    number,
    string,
    number,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    number,
    number,
    number,
    BigNumber,
    BigNumber
] & {
    symbol: string;
    tokenAddress: string;
    id: number;
    decimals: number;
    flags: BigNumber;
    _flagsPadding: number;
    initialMarginRate: number;
    maintenanceMarginRate: number;
    minProfitRate: number;
    minProfitTime: number;
    positionFeeRate: number;
    referenceOracle: string;
    referenceDeviation: number;
    referenceOracleType: number;
    halfSpread: number;
    credit: BigNumber;
    _reserved2: BigNumber;
    collectedFee: BigNumber;
    liquidationFeeRate: number;
    spotLiquidity: BigNumber;
    maxLongPositionSize: BigNumber;
    totalLongPosition: BigNumber;
    averageLongPrice: BigNumber;
    maxShortPositionSize: BigNumber;
    totalShortPosition: BigNumber;
    averageShortPrice: BigNumber;
    bitoroTokenAddress: string;
    spotWeight: number;
    longFundingBaseRate8H: number;
    longFundingLimitRate8H: number;
    longCumulativeFundingRate: BigNumber;
    shortCumulativeFunding: BigNumber;
};
export declare namespace Events {
    type ClosePositionArgsStruct = {
        subAccountId: BytesLike;
        collateralId: BigNumberish;
        profitAssetId: BigNumberish;
        isLong: boolean;
        amount: BigNumberish;
        assetPrice: BigNumberish;
        collateralPrice: BigNumberish;
        profitAssetPrice: BigNumberish;
        feeUsd: BigNumberish;
        hasProfit: boolean;
        pnlUsd: BigNumberish;
        remainPosition: BigNumberish;
        remainCollateral: BigNumberish;
    };
    type ClosePositionArgsStructOutput = [
        string,
        number,
        number,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        subAccountId: string;
        collateralId: number;
        profitAssetId: number;
        isLong: boolean;
        amount: BigNumber;
        assetPrice: BigNumber;
        collateralPrice: BigNumber;
        profitAssetPrice: BigNumber;
        feeUsd: BigNumber;
        hasProfit: boolean;
        pnlUsd: BigNumber;
        remainPosition: BigNumber;
        remainCollateral: BigNumber;
    };
    type LiquidateArgsStruct = {
        subAccountId: BytesLike;
        collateralId: BigNumberish;
        profitAssetId: BigNumberish;
        isLong: boolean;
        amount: BigNumberish;
        assetPrice: BigNumberish;
        collateralPrice: BigNumberish;
        profitAssetPrice: BigNumberish;
        feeUsd: BigNumberish;
        hasProfit: boolean;
        pnlUsd: BigNumberish;
        remainCollateral: BigNumberish;
    };
    type LiquidateArgsStructOutput = [
        string,
        number,
        number,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        subAccountId: string;
        collateralId: number;
        profitAssetId: number;
        isLong: boolean;
        amount: BigNumber;
        assetPrice: BigNumber;
        collateralPrice: BigNumber;
        profitAssetPrice: BigNumber;
        feeUsd: BigNumber;
        hasProfit: boolean;
        pnlUsd: BigNumber;
        remainCollateral: BigNumber;
    };
    type OpenPositionArgsStruct = {
        subAccountId: BytesLike;
        collateralId: BigNumberish;
        isLong: boolean;
        amount: BigNumberish;
        assetPrice: BigNumberish;
        collateralPrice: BigNumberish;
        newEntryPrice: BigNumberish;
        feeUsd: BigNumberish;
        remainPosition: BigNumberish;
        remainCollateral: BigNumberish;
    };
    type OpenPositionArgsStructOutput = [
        string,
        number,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        subAccountId: string;
        collateralId: number;
        isLong: boolean;
        amount: BigNumber;
        assetPrice: BigNumber;
        collateralPrice: BigNumber;
        newEntryPrice: BigNumber;
        feeUsd: BigNumber;
        remainPosition: BigNumber;
        remainCollateral: BigNumber;
    };
    type WithdrawProfitArgsStruct = {
        subAccountId: BytesLike;
        collateralId: BigNumberish;
        profitAssetId: BigNumberish;
        isLong: boolean;
        withdrawRawAmount: BigNumberish;
        assetPrice: BigNumberish;
        collateralPrice: BigNumberish;
        profitAssetPrice: BigNumberish;
        entryPrice: BigNumberish;
        feeUsd: BigNumberish;
    };
    type WithdrawProfitArgsStructOutput = [
        string,
        number,
        number,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        subAccountId: string;
        collateralId: number;
        profitAssetId: number;
        isLong: boolean;
        withdrawRawAmount: BigNumber;
        assetPrice: BigNumber;
        collateralPrice: BigNumber;
        profitAssetPrice: BigNumber;
        entryPrice: BigNumber;
        feeUsd: BigNumber;
    };
}
export interface LiquidityPoolInterface extends utils.Interface {
    contractName: "LiquidityPool";
    functions: {
        "addAsset(uint8,bytes32,uint8,bool,address,address)": FunctionFragment;
        "addLiquidity(address,uint8,uint256,uint96,uint96,uint96,uint96)": FunctionFragment;
        "borrowAsset(address,uint8,uint256,uint256)": FunctionFragment;
        "claimBrokerGasRebate(address)": FunctionFragment;
        "closePosition(bytes32,uint96,uint8,uint96,uint96,uint96)": FunctionFragment;
        "depositCollateral(bytes32,uint256)": FunctionFragment;
        "getAllAssetInfo()": FunctionFragment;
        "getAssetAddress(uint8)": FunctionFragment;
        "getAssetInfo(uint8)": FunctionFragment;
        "getLiquidityPoolStorage()": FunctionFragment;
        "getSubAccount(bytes32)": FunctionFragment;
        "initialize(address,address,address,address,address,address)": FunctionFragment;
        "liquidate(bytes32,uint8,uint96,uint96,uint96)": FunctionFragment;
        "openPosition(bytes32,uint96,uint96,uint96)": FunctionFragment;
        "owner()": FunctionFragment;
        "rebalance(address,uint8,uint8,uint96,uint96,bytes32,uint96,uint96)": FunctionFragment;
        "redeemBitoroToken(address,uint8,uint96)": FunctionFragment;
        "removeLiquidity(address,uint96,uint8,uint96,uint96,uint96,uint96)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "repayAsset(address,uint8,uint256,uint256,uint256)": FunctionFragment;
        "setAssetFlags(uint8,bool,bool,bool,bool,bool,bool,bool,uint32)": FunctionFragment;
        "setAssetParams(uint8,bytes32,uint32,uint32,uint32,uint32,uint32,uint32,uint96,uint96,uint32)": FunctionFragment;
        "setEmergencyNumbers(uint96,uint96)": FunctionFragment;
        "setFundingParams(uint8,uint32,uint32)": FunctionFragment;
        "setLiquidityManager(address,bool)": FunctionFragment;
        "setMaintainer(address)": FunctionFragment;
        "setNumbers(uint32,uint32,uint32,uint32,uint96)": FunctionFragment;
        "setReferenceOracle(uint8,uint8,address,uint32)": FunctionFragment;
        "takeOwnership()": FunctionFragment;
        "transferLiquidityIn(uint8[],uint256[])": FunctionFragment;
        "transferLiquidityOut(uint8[],uint256[])": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateFundingState(uint32,uint8[],uint32[],uint96[])": FunctionFragment;
        "upgradeChainedProxy(address)": FunctionFragment;
        "withdrawAllCollateral(bytes32)": FunctionFragment;
        "withdrawCollateral(bytes32,uint256,uint96,uint96)": FunctionFragment;
        "withdrawCollectedFee(uint8[])": FunctionFragment;
        "withdrawProfit(bytes32,uint256,uint8,uint96,uint96,uint96)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addAsset", values: [BigNumberish, BytesLike, BigNumberish, boolean, string, string]): string;
    encodeFunctionData(functionFragment: "addLiquidity", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "borrowAsset", values: [string, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claimBrokerGasRebate", values: [string]): string;
    encodeFunctionData(functionFragment: "closePosition", values: [
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "depositCollateral", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAllAssetInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAssetAddress", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAssetInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLiquidityPoolStorage", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSubAccount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string, string, string]): string;
    encodeFunctionData(functionFragment: "liquidate", values: [BytesLike, BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "openPosition", values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "rebalance", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "redeemBitoroToken", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "removeLiquidity", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "repayAsset", values: [string, BigNumberish, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setAssetFlags", values: [
        BigNumberish,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "setAssetParams", values: [
        BigNumberish,
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "setEmergencyNumbers", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setFundingParams", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setLiquidityManager", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setMaintainer", values: [string]): string;
    encodeFunctionData(functionFragment: "setNumbers", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "setReferenceOracle", values: [BigNumberish, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "takeOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferLiquidityIn", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "transferLiquidityOut", values: [BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "updateFundingState", values: [BigNumberish, BigNumberish[], BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "upgradeChainedProxy", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawAllCollateral", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawCollateral", values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawCollectedFee", values: [BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "withdrawProfit", values: [
        BytesLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "addAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "borrowAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimBrokerGasRebate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAssetInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLiquidityPoolStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "redeemBitoroToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeLiquidity", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAssetFlags", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAssetParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEmergencyNumbers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFundingParams", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setLiquidityManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaintainer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setNumbers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReferenceOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "takeOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferLiquidityIn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferLiquidityOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFundingState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeChainedProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawAllCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawCollateral", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawCollectedFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawProfit", data: BytesLike): Result;
    events: {
        "AddAsset(uint8,bytes32,uint8,bool,address,address)": EventFragment;
        "AddLiquidity(address,uint8,uint96,uint96,uint96,uint96)": EventFragment;
        "BorrowAsset(uint8,address,address,uint256,uint256)": EventFragment;
        "ClaimBrokerGasRebate(address,uint32,uint256)": EventFragment;
        "ClosePosition(address,uint8,tuple)": EventFragment;
        "CollectedFee(uint8,uint96)": EventFragment;
        "DepositCollateral(bytes32,address,uint8,uint256,uint96)": EventFragment;
        "IssueBitoroToken(uint8,bool,uint96)": EventFragment;
        "Liquidate(address,uint8,tuple)": EventFragment;
        "OpenPosition(address,uint8,tuple)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "PrepareToTransferOwnership(address)": EventFragment;
        "Rebalance(address,uint8,uint8,uint96,uint96,uint96,uint96)": EventFragment;
        "RedeemBitoroToken(address,uint8,uint96)": EventFragment;
        "RemoveLiquidity(address,uint8,uint96,uint96,uint96,uint96)": EventFragment;
        "RepayAsset(uint8,address,address,uint256,uint256,uint256)": EventFragment;
        "SetAssetFlags(uint8,uint56,uint32)": EventFragment;
        "SetAssetParams(uint8,bytes32,uint32,uint32,uint32,uint32,uint32,uint32,uint96,uint96,uint32)": EventFragment;
        "SetBrokerGasRebate(uint96)": EventFragment;
        "SetFundingInterval(uint32,uint32)": EventFragment;
        "SetFundingParams(uint8,uint32,uint32)": EventFragment;
        "SetLiquidityFee(uint32,uint32)": EventFragment;
        "SetLiquidityManager(address,bool)": EventFragment;
        "SetMaintainer(address)": EventFragment;
        "SetBlpPriceRange(uint96,uint96)": EventFragment;
        "SetReferenceOracle(uint8,uint8,address,uint32)": EventFragment;
        "SetStrictStableDeviation(uint32)": EventFragment;
        "TransferLiquidity(address,address,uint8,uint256)": EventFragment;
        "UpdateFundingRate(uint8,uint32,uint128,uint32,uint128)": EventFragment;
        "UpdateSequence(uint32)": EventFragment;
        "UpgradeChainedProxy(address,address)": EventFragment;
        "WithdrawCollateral(bytes32,address,uint8,uint256,uint96)": EventFragment;
        "WithdrawCollectedFee(uint8,uint96)": EventFragment;
        "WithdrawProfit(address,uint8,tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AddAsset"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AddLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BorrowAsset"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimBrokerGasRebate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClosePosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CollectedFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DepositCollateral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "IssueBitoroToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Liquidate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OpenPosition"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrepareToTransferOwnership"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Rebalance"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RedeemBitoroToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RemoveLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RepayAsset"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetAssetFlags"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetAssetParams"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetBrokerGasRebate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetFundingInterval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetFundingParams"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetLiquidityFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetLiquidityManager"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMaintainer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetBlpPriceRange"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetReferenceOracle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetStrictStableDeviation"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferLiquidity"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateFundingRate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateSequence"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpgradeChainedProxy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawCollateral"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawCollectedFee"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawProfit"): EventFragment;
}
export type AddAssetEvent = TypedEvent<[
    number,
    string,
    number,
    boolean,
    string,
    string
], {
    id: number;
    symbol: string;
    decimals: number;
    isStable: boolean;
    tokenAddress: string;
    bitoroTokenAddress: string;
}>;
export type AddAssetEventFilter = TypedEventFilter<AddAssetEvent>;
export type AddLiquidityEvent = TypedEvent<[
    string,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    trader: string;
    tokenId: number;
    tokenPrice: BigNumber;
    blpPrice: BigNumber;
    blpAmount: BigNumber;
    fee: BigNumber;
}>;
export type AddLiquidityEventFilter = TypedEventFilter<AddLiquidityEvent>;
export type BorrowAssetEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    BigNumber
], {
    assetId: number;
    project: string;
    borrower: string;
    rawBorrowAmount: BigNumber;
    rawFee: BigNumber;
}>;
export type BorrowAssetEventFilter = TypedEventFilter<BorrowAssetEvent>;
export type ClaimBrokerGasRebateEvent = TypedEvent<[
    string,
    number,
    BigNumber
], {
    receiver: string;
    transactions: number;
    rawAmount: BigNumber;
}>;
export type ClaimBrokerGasRebateEventFilter = TypedEventFilter<ClaimBrokerGasRebateEvent>;
export type ClosePositionEvent = TypedEvent<[
    string,
    number,
    Events.ClosePositionArgsStructOutput
], {
    trader: string;
    assetId: number;
    args: Events.ClosePositionArgsStructOutput;
}>;
export type ClosePositionEventFilter = TypedEventFilter<ClosePositionEvent>;
export type CollectedFeeEvent = TypedEvent<[
    number,
    BigNumber
], {
    tokenId: number;
    fee: BigNumber;
}>;
export type CollectedFeeEventFilter = TypedEventFilter<CollectedFeeEvent>;
export type DepositCollateralEvent = TypedEvent<[
    string,
    string,
    number,
    BigNumber,
    BigNumber
], {
    subAccountId: string;
    trader: string;
    collateralId: number;
    rawAmount: BigNumber;
    wadAmount: BigNumber;
}>;
export type DepositCollateralEventFilter = TypedEventFilter<DepositCollateralEvent>;
export type IssueBitoroTokenEvent = TypedEvent<[
    number,
    boolean,
    BigNumber
], {
    tokenId: number;
    isStable: boolean;
    bitoroTokenAmount: BigNumber;
}>;
export type IssueBitoroTokenEventFilter = TypedEventFilter<IssueBitoroTokenEvent>;
export type LiquidateEvent = TypedEvent<[
    string,
    number,
    Events.LiquidateArgsStructOutput
], {
    trader: string;
    assetId: number;
    args: Events.LiquidateArgsStructOutput;
}>;
export type LiquidateEventFilter = TypedEventFilter<LiquidateEvent>;
export type OpenPositionEvent = TypedEvent<[
    string,
    number,
    Events.OpenPositionArgsStructOutput
], {
    trader: string;
    assetId: number;
    args: Events.OpenPositionArgsStructOutput;
}>;
export type OpenPositionEventFilter = TypedEventFilter<OpenPositionEvent>;
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export type PrepareToTransferOwnershipEvent = TypedEvent<[
    string
], {
    pendingOwner: string;
}>;
export type PrepareToTransferOwnershipEventFilter = TypedEventFilter<PrepareToTransferOwnershipEvent>;
export type RebalanceEvent = TypedEvent<[
    string,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    rebalancer: string;
    tokenId0: number;
    tokenId1: number;
    price0: BigNumber;
    price1: BigNumber;
    rawAmount0: BigNumber;
    rawAmount1: BigNumber;
}>;
export type RebalanceEventFilter = TypedEventFilter<RebalanceEvent>;
export type RedeemBitoroTokenEvent = TypedEvent<[
    string,
    number,
    BigNumber
], {
    trader: string;
    tokenId: number;
    bitoroTokenAmount: BigNumber;
}>;
export type RedeemBitoroTokenEventFilter = TypedEventFilter<RedeemBitoroTokenEvent>;
export type RemoveLiquidityEvent = TypedEvent<[
    string,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
], {
    trader: string;
    tokenId: number;
    tokenPrice: BigNumber;
    blpPrice: BigNumber;
    blpAmount: BigNumber;
    fee: BigNumber;
}>;
export type RemoveLiquidityEventFilter = TypedEventFilter<RemoveLiquidityEvent>;
export type RepayAssetEvent = TypedEvent<[
    number,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], {
    assetId: number;
    project: string;
    repayer: string;
    rawRepayAmount: BigNumber;
    rawFee: BigNumber;
    badDebt: BigNumber;
}>;
export type RepayAssetEventFilter = TypedEventFilter<RepayAssetEvent>;
export type SetAssetFlagsEvent = TypedEvent<[
    number,
    BigNumber,
    number
], {
    assetId: number;
    newFlags: BigNumber;
    newHalfSpread: number;
}>;
export type SetAssetFlagsEventFilter = TypedEventFilter<SetAssetFlagsEvent>;
export type SetAssetParamsEvent = TypedEvent<[
    number,
    string,
    number,
    number,
    number,
    number,
    number,
    number,
    BigNumber,
    BigNumber,
    number
], {
    assetId: number;
    symbol: string;
    newInitialMarginRate: number;
    newMaintenanceMarginRate: number;
    newPositionFeeRate: number;
    newLiquidationFeeRate: number;
    newMinProfitRate: number;
    newMinProfitTime: number;
    newMaxLongPositionSize: BigNumber;
    newMaxShortPositionSize: BigNumber;
    newSpotWeight: number;
}>;
export type SetAssetParamsEventFilter = TypedEventFilter<SetAssetParamsEvent>;
export type SetBrokerGasRebateEvent = TypedEvent<[
    BigNumber
], {
    newBrokerGasRebate: BigNumber;
}>;
export type SetBrokerGasRebateEventFilter = TypedEventFilter<SetBrokerGasRebateEvent>;
export type SetFundingIntervalEvent = TypedEvent<[
    number,
    number
], {
    oldFundingInterval: number;
    newFundingInterval: number;
}>;
export type SetFundingIntervalEventFilter = TypedEventFilter<SetFundingIntervalEvent>;
export type SetFundingParamsEvent = TypedEvent<[
    number,
    number,
    number
], {
    assetId: number;
    newBaseRate8H: number;
    newLimitRate8H: number;
}>;
export type SetFundingParamsEventFilter = TypedEventFilter<SetFundingParamsEvent>;
export type SetLiquidityFeeEvent = TypedEvent<[
    number,
    number
], {
    newLiquidityBaseFeeRate: number;
    newLiquidityDynamicFeeRate: number;
}>;
export type SetLiquidityFeeEventFilter = TypedEventFilter<SetLiquidityFeeEvent>;
export type SetLiquidityManagerEvent = TypedEvent<[
    string,
    boolean
], {
    newLiquidityManager: string;
    isAdd: boolean;
}>;
export type SetLiquidityManagerEventFilter = TypedEventFilter<SetLiquidityManagerEvent>;
export type SetMaintainerEvent = TypedEvent<[
    string
], {
    newMaintainer: string;
}>;
export type SetMaintainerEventFilter = TypedEventFilter<SetMaintainerEvent>;
export type SetBlpPriceRangeEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    newLowerBound: BigNumber;
    newUpperBound: BigNumber;
}>;
export type SetBlpPriceRangeEventFilter = TypedEventFilter<SetBlpPriceRangeEvent>;
export type SetReferenceOracleEvent = TypedEvent<[
    number,
    number,
    string,
    number
], {
    assetId: number;
    referenceOracleType: number;
    referenceOracle: string;
    referenceDeviation: number;
}>;
export type SetReferenceOracleEventFilter = TypedEventFilter<SetReferenceOracleEvent>;
export type SetStrictStableDeviationEvent = TypedEvent<[
    number
], {
    newStrictStableDeviation: number;
}>;
export type SetStrictStableDeviationEventFilter = TypedEventFilter<SetStrictStableDeviationEvent>;
export type TransferLiquidityEvent = TypedEvent<[
    string,
    string,
    number,
    BigNumber
], {
    sender: string;
    recipient: string;
    assetId: number;
    amount: BigNumber;
}>;
export type TransferLiquidityEventFilter = TypedEventFilter<TransferLiquidityEvent>;
export type UpdateFundingRateEvent = TypedEvent<[
    number,
    number,
    BigNumber,
    number,
    BigNumber
], {
    tokenId: number;
    longFundingRate: number;
    longCumulativeFundingRate: BigNumber;
    shortFundingRate: number;
    shortCumulativeFunding: BigNumber;
}>;
export type UpdateFundingRateEventFilter = TypedEventFilter<UpdateFundingRateEvent>;
export type UpdateSequenceEvent = TypedEvent<[number], {
    sequence: number;
}>;
export type UpdateSequenceEventFilter = TypedEventFilter<UpdateSequenceEvent>;
export type UpgradeChainedProxyEvent = TypedEvent<[
    string,
    string
], {
    prevNextHop: string;
    nextHop: string;
}>;
export type UpgradeChainedProxyEventFilter = TypedEventFilter<UpgradeChainedProxyEvent>;
export type WithdrawCollateralEvent = TypedEvent<[
    string,
    string,
    number,
    BigNumber,
    BigNumber
], {
    subAccountId: string;
    trader: string;
    collateralId: number;
    rawAmount: BigNumber;
    wadAmount: BigNumber;
}>;
export type WithdrawCollateralEventFilter = TypedEventFilter<WithdrawCollateralEvent>;
export type WithdrawCollectedFeeEvent = TypedEvent<[
    number,
    BigNumber
], {
    assetId: number;
    collectedFee: BigNumber;
}>;
export type WithdrawCollectedFeeEventFilter = TypedEventFilter<WithdrawCollectedFeeEvent>;
export type WithdrawProfitEvent = TypedEvent<[
    string,
    number,
    Events.WithdrawProfitArgsStructOutput
], {
    trader: string;
    assetId: number;
    args: Events.WithdrawProfitArgsStructOutput;
}>;
export type WithdrawProfitEventFilter = TypedEventFilter<WithdrawProfitEvent>;
export interface LiquidityPool extends BaseContract {
    contractName: "LiquidityPool";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: LiquidityPoolInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addAsset(assetId: BigNumberish, symbol: BytesLike, decimals: BigNumberish, isStable: boolean, tokenAddress: string, bitoroTokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addLiquidity(trader: string, tokenId: BigNumberish, rawAmount: BigNumberish, tokenPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        borrowAsset(borrower: string, assetId: BigNumberish, rawBorrowAmount: BigNumberish, rawFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimBrokerGasRebate(receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        closePosition(subAccountId: BytesLike, amount: BigNumberish, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositCollateral(subAccountId: BytesLike, rawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllAssetInfo(overrides?: CallOverrides): Promise<[AssetStructOutput[]]>;
        getAssetAddress(assetId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getAssetInfo(assetId: BigNumberish, overrides?: CallOverrides): Promise<[AssetStructOutput]>;
        getLiquidityPoolStorage(overrides?: CallOverrides): Promise<[
            number[],
            [BigNumber, BigNumber]
        ] & {
            u32s: number[];
            u96s: [BigNumber, BigNumber];
        }>;
        getSubAccount(subAccountId: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number,
            BigNumber,
            BigNumber
        ] & {
            collateral: BigNumber;
            size: BigNumber;
            lastIncreasedTime: number;
            entryPrice: BigNumber;
            entryFunding: BigNumber;
        }>;
        initialize(nextHop: string, blp: string, orderBook: string, weth: string, nativeUnwrapper: string, vault: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        liquidate(subAccountId: BytesLike, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        openPosition(subAccountId: BytesLike, amount: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        rebalance(rebalancer: string, tokenId0: BigNumberish, tokenId1: BigNumberish, rawAmount0: BigNumberish, maxRawAmount1: BigNumberish, userData: BytesLike, price0: BigNumberish, price1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        redeemBitoroToken(trader: string, tokenId: BigNumberish, bitoroTokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeLiquidity(trader: string, blpAmount: BigNumberish, tokenId: BigNumberish, tokenPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        repayAsset(repayer: string, assetId: BigNumberish, rawRepayAmount: BigNumberish, rawFee: BigNumberish, rawBadDebt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAssetFlags(assetId: BigNumberish, isTradable: boolean, isOpenable: boolean, isShortable: boolean, useStableTokenForProfit: boolean, isEnabled: boolean, isStrictStable: boolean, canAddRemoveLiquidity: boolean, newHalfSpread: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAssetParams(assetId: BigNumberish, symbol: BytesLike, newInitialMarginRate: BigNumberish, newMaintenanceMarginRate: BigNumberish, newPositionFeeRate: BigNumberish, newLiquidationFeeRate: BigNumberish, newMinProfitRate: BigNumberish, newMinProfitTime: BigNumberish, newMaxLongPositionSize: BigNumberish, newMaxShortPositionSize: BigNumberish, newSpotWeight: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setEmergencyNumbers(newBlpPriceLowerBound: BigNumberish, newBlpPriceUpperBound: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFundingParams(assetId: BigNumberish, newBaseRate8H: BigNumberish, newLimitRate8H: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setLiquidityManager(newLiquidityManager: string, isAdd: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaintainer(newMaintainer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setNumbers(newFundingInterval: BigNumberish, newLiquidityBaseFeeRate: BigNumberish, newLiquidityDynamicFeeRate: BigNumberish, newStrictStableDeviation: BigNumberish, newBrokerGasRebate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setReferenceOracle(assetId: BigNumberish, referenceOracleType: BigNumberish, referenceOracle: string, referenceDeviation: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferLiquidityIn(assetIds: BigNumberish[], rawAmounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferLiquidityOut(assetIds: BigNumberish[], rawAmounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateFundingState(stableUtilization: BigNumberish, unstableTokenIds: BigNumberish[], unstableUtilizations: BigNumberish[], unstablePrices: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeChainedProxy(nextHop: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawAllCollateral(subAccountId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawCollateral(subAccountId: BytesLike, rawAmount: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawCollectedFee(assetIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawProfit(subAccountId: BytesLike, rawAmount: BigNumberish, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addAsset(assetId: BigNumberish, symbol: BytesLike, decimals: BigNumberish, isStable: boolean, tokenAddress: string, bitoroTokenAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addLiquidity(trader: string, tokenId: BigNumberish, rawAmount: BigNumberish, tokenPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    borrowAsset(borrower: string, assetId: BigNumberish, rawBorrowAmount: BigNumberish, rawFee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimBrokerGasRebate(receiver: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    closePosition(subAccountId: BytesLike, amount: BigNumberish, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositCollateral(subAccountId: BytesLike, rawAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllAssetInfo(overrides?: CallOverrides): Promise<AssetStructOutput[]>;
    getAssetAddress(assetId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getAssetInfo(assetId: BigNumberish, overrides?: CallOverrides): Promise<AssetStructOutput>;
    getLiquidityPoolStorage(overrides?: CallOverrides): Promise<[
        number[],
        [BigNumber, BigNumber]
    ] & {
        u32s: number[];
        u96s: [BigNumber, BigNumber];
    }>;
    getSubAccount(subAccountId: BytesLike, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        number,
        BigNumber,
        BigNumber
    ] & {
        collateral: BigNumber;
        size: BigNumber;
        lastIncreasedTime: number;
        entryPrice: BigNumber;
        entryFunding: BigNumber;
    }>;
    initialize(nextHop: string, blp: string, orderBook: string, weth: string, nativeUnwrapper: string, vault: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    liquidate(subAccountId: BytesLike, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    openPosition(subAccountId: BytesLike, amount: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    rebalance(rebalancer: string, tokenId0: BigNumberish, tokenId1: BigNumberish, rawAmount0: BigNumberish, maxRawAmount1: BigNumberish, userData: BytesLike, price0: BigNumberish, price1: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    redeemBitoroToken(trader: string, tokenId: BigNumberish, bitoroTokenAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeLiquidity(trader: string, blpAmount: BigNumberish, tokenId: BigNumberish, tokenPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    repayAsset(repayer: string, assetId: BigNumberish, rawRepayAmount: BigNumberish, rawFee: BigNumberish, rawBadDebt: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAssetFlags(assetId: BigNumberish, isTradable: boolean, isOpenable: boolean, isShortable: boolean, useStableTokenForProfit: boolean, isEnabled: boolean, isStrictStable: boolean, canAddRemoveLiquidity: boolean, newHalfSpread: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAssetParams(assetId: BigNumberish, symbol: BytesLike, newInitialMarginRate: BigNumberish, newMaintenanceMarginRate: BigNumberish, newPositionFeeRate: BigNumberish, newLiquidationFeeRate: BigNumberish, newMinProfitRate: BigNumberish, newMinProfitTime: BigNumberish, newMaxLongPositionSize: BigNumberish, newMaxShortPositionSize: BigNumberish, newSpotWeight: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setEmergencyNumbers(newBlpPriceLowerBound: BigNumberish, newBlpPriceUpperBound: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFundingParams(assetId: BigNumberish, newBaseRate8H: BigNumberish, newLimitRate8H: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setLiquidityManager(newLiquidityManager: string, isAdd: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaintainer(newMaintainer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setNumbers(newFundingInterval: BigNumberish, newLiquidityBaseFeeRate: BigNumberish, newLiquidityDynamicFeeRate: BigNumberish, newStrictStableDeviation: BigNumberish, newBrokerGasRebate: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setReferenceOracle(assetId: BigNumberish, referenceOracleType: BigNumberish, referenceOracle: string, referenceDeviation: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    takeOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferLiquidityIn(assetIds: BigNumberish[], rawAmounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferLiquidityOut(assetIds: BigNumberish[], rawAmounts: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateFundingState(stableUtilization: BigNumberish, unstableTokenIds: BigNumberish[], unstableUtilizations: BigNumberish[], unstablePrices: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeChainedProxy(nextHop: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawAllCollateral(subAccountId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawCollateral(subAccountId: BytesLike, rawAmount: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawCollectedFee(assetIds: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawProfit(subAccountId: BytesLike, rawAmount: BigNumberish, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addAsset(assetId: BigNumberish, symbol: BytesLike, decimals: BigNumberish, isStable: boolean, tokenAddress: string, bitoroTokenAddress: string, overrides?: CallOverrides): Promise<void>;
        addLiquidity(trader: string, tokenId: BigNumberish, rawAmount: BigNumberish, tokenPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        borrowAsset(borrower: string, assetId: BigNumberish, rawBorrowAmount: BigNumberish, rawFee: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claimBrokerGasRebate(receiver: string, overrides?: CallOverrides): Promise<BigNumber>;
        closePosition(subAccountId: BytesLike, amount: BigNumberish, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        depositCollateral(subAccountId: BytesLike, rawAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getAllAssetInfo(overrides?: CallOverrides): Promise<AssetStructOutput[]>;
        getAssetAddress(assetId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getAssetInfo(assetId: BigNumberish, overrides?: CallOverrides): Promise<AssetStructOutput>;
        getLiquidityPoolStorage(overrides?: CallOverrides): Promise<[
            number[],
            [BigNumber, BigNumber]
        ] & {
            u32s: number[];
            u96s: [BigNumber, BigNumber];
        }>;
        getSubAccount(subAccountId: BytesLike, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            number,
            BigNumber,
            BigNumber
        ] & {
            collateral: BigNumber;
            size: BigNumber;
            lastIncreasedTime: number;
            entryPrice: BigNumber;
            entryFunding: BigNumber;
        }>;
        initialize(nextHop: string, blp: string, orderBook: string, weth: string, nativeUnwrapper: string, vault: string, overrides?: CallOverrides): Promise<void>;
        liquidate(subAccountId: BytesLike, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        openPosition(subAccountId: BytesLike, amount: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        rebalance(rebalancer: string, tokenId0: BigNumberish, tokenId1: BigNumberish, rawAmount0: BigNumberish, maxRawAmount1: BigNumberish, userData: BytesLike, price0: BigNumberish, price1: BigNumberish, overrides?: CallOverrides): Promise<void>;
        redeemBitoroToken(trader: string, tokenId: BigNumberish, bitoroTokenAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        removeLiquidity(trader: string, blpAmount: BigNumberish, tokenId: BigNumberish, tokenPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        repayAsset(repayer: string, assetId: BigNumberish, rawRepayAmount: BigNumberish, rawFee: BigNumberish, rawBadDebt: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setAssetFlags(assetId: BigNumberish, isTradable: boolean, isOpenable: boolean, isShortable: boolean, useStableTokenForProfit: boolean, isEnabled: boolean, isStrictStable: boolean, canAddRemoveLiquidity: boolean, newHalfSpread: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setAssetParams(assetId: BigNumberish, symbol: BytesLike, newInitialMarginRate: BigNumberish, newMaintenanceMarginRate: BigNumberish, newPositionFeeRate: BigNumberish, newLiquidationFeeRate: BigNumberish, newMinProfitRate: BigNumberish, newMinProfitTime: BigNumberish, newMaxLongPositionSize: BigNumberish, newMaxShortPositionSize: BigNumberish, newSpotWeight: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setEmergencyNumbers(newBlpPriceLowerBound: BigNumberish, newBlpPriceUpperBound: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setFundingParams(assetId: BigNumberish, newBaseRate8H: BigNumberish, newLimitRate8H: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setLiquidityManager(newLiquidityManager: string, isAdd: boolean, overrides?: CallOverrides): Promise<void>;
        setMaintainer(newMaintainer: string, overrides?: CallOverrides): Promise<void>;
        setNumbers(newFundingInterval: BigNumberish, newLiquidityBaseFeeRate: BigNumberish, newLiquidityDynamicFeeRate: BigNumberish, newStrictStableDeviation: BigNumberish, newBrokerGasRebate: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setReferenceOracle(assetId: BigNumberish, referenceOracleType: BigNumberish, referenceOracle: string, referenceDeviation: BigNumberish, overrides?: CallOverrides): Promise<void>;
        takeOwnership(overrides?: CallOverrides): Promise<void>;
        transferLiquidityIn(assetIds: BigNumberish[], rawAmounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        transferLiquidityOut(assetIds: BigNumberish[], rawAmounts: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        updateFundingState(stableUtilization: BigNumberish, unstableTokenIds: BigNumberish[], unstableUtilizations: BigNumberish[], unstablePrices: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        upgradeChainedProxy(nextHop: string, overrides?: CallOverrides): Promise<void>;
        withdrawAllCollateral(subAccountId: BytesLike, overrides?: CallOverrides): Promise<void>;
        withdrawCollateral(subAccountId: BytesLike, rawAmount: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;
        withdrawCollectedFee(assetIds: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        withdrawProfit(subAccountId: BytesLike, rawAmount: BigNumberish, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AddAsset(uint8,bytes32,uint8,bool,address,address)"(id?: BigNumberish | null, symbol?: null, decimals?: null, isStable?: null, tokenAddress?: null, bitoroTokenAddress?: null): AddAssetEventFilter;
        AddAsset(id?: BigNumberish | null, symbol?: null, decimals?: null, isStable?: null, tokenAddress?: null, bitoroTokenAddress?: null): AddAssetEventFilter;
        "AddLiquidity(address,uint8,uint96,uint96,uint96,uint96)"(trader?: string | null, tokenId?: BigNumberish | null, tokenPrice?: null, blpPrice?: null, blpAmount?: null, fee?: null): AddLiquidityEventFilter;
        AddLiquidity(trader?: string | null, tokenId?: BigNumberish | null, tokenPrice?: null, blpPrice?: null, blpAmount?: null, fee?: null): AddLiquidityEventFilter;
        "BorrowAsset(uint8,address,address,uint256,uint256)"(assetId?: BigNumberish | null, project?: string | null, borrower?: string | null, rawBorrowAmount?: null, rawFee?: null): BorrowAssetEventFilter;
        BorrowAsset(assetId?: BigNumberish | null, project?: string | null, borrower?: string | null, rawBorrowAmount?: null, rawFee?: null): BorrowAssetEventFilter;
        "ClaimBrokerGasRebate(address,uint32,uint256)"(receiver?: string | null, transactions?: null, rawAmount?: null): ClaimBrokerGasRebateEventFilter;
        ClaimBrokerGasRebate(receiver?: string | null, transactions?: null, rawAmount?: null): ClaimBrokerGasRebateEventFilter;
        "ClosePosition(address,uint8,tuple)"(trader?: string | null, assetId?: BigNumberish | null, args?: null): ClosePositionEventFilter;
        ClosePosition(trader?: string | null, assetId?: BigNumberish | null, args?: null): ClosePositionEventFilter;
        "CollectedFee(uint8,uint96)"(tokenId?: null, fee?: null): CollectedFeeEventFilter;
        CollectedFee(tokenId?: null, fee?: null): CollectedFeeEventFilter;
        "DepositCollateral(bytes32,address,uint8,uint256,uint96)"(subAccountId?: BytesLike | null, trader?: string | null, collateralId?: null, rawAmount?: null, wadAmount?: null): DepositCollateralEventFilter;
        DepositCollateral(subAccountId?: BytesLike | null, trader?: string | null, collateralId?: null, rawAmount?: null, wadAmount?: null): DepositCollateralEventFilter;
        "IssueBitoroToken(uint8,bool,uint96)"(tokenId?: BigNumberish | null, isStable?: null, bitoroTokenAmount?: null): IssueBitoroTokenEventFilter;
        IssueBitoroToken(tokenId?: BigNumberish | null, isStable?: null, bitoroTokenAmount?: null): IssueBitoroTokenEventFilter;
        "Liquidate(address,uint8,tuple)"(trader?: string | null, assetId?: BigNumberish | null, args?: null): LiquidateEventFilter;
        Liquidate(trader?: string | null, assetId?: BigNumberish | null, args?: null): LiquidateEventFilter;
        "OpenPosition(address,uint8,tuple)"(trader?: string | null, assetId?: BigNumberish | null, args?: null): OpenPositionEventFilter;
        OpenPosition(trader?: string | null, assetId?: BigNumberish | null, args?: null): OpenPositionEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "PrepareToTransferOwnership(address)"(pendingOwner?: string | null): PrepareToTransferOwnershipEventFilter;
        PrepareToTransferOwnership(pendingOwner?: string | null): PrepareToTransferOwnershipEventFilter;
        "Rebalance(address,uint8,uint8,uint96,uint96,uint96,uint96)"(rebalancer?: string | null, tokenId0?: null, tokenId1?: null, price0?: null, price1?: null, rawAmount0?: null, rawAmount1?: null): RebalanceEventFilter;
        Rebalance(rebalancer?: string | null, tokenId0?: null, tokenId1?: null, price0?: null, price1?: null, rawAmount0?: null, rawAmount1?: null): RebalanceEventFilter;
        "RedeemBitoroToken(address,uint8,uint96)"(trader?: null, tokenId?: null, bitoroTokenAmount?: null): RedeemBitoroTokenEventFilter;
        RedeemBitoroToken(trader?: null, tokenId?: null, bitoroTokenAmount?: null): RedeemBitoroTokenEventFilter;
        "RemoveLiquidity(address,uint8,uint96,uint96,uint96,uint96)"(trader?: string | null, tokenId?: BigNumberish | null, tokenPrice?: null, blpPrice?: null, blpAmount?: null, fee?: null): RemoveLiquidityEventFilter;
        RemoveLiquidity(trader?: string | null, tokenId?: BigNumberish | null, tokenPrice?: null, blpPrice?: null, blpAmount?: null, fee?: null): RemoveLiquidityEventFilter;
        "RepayAsset(uint8,address,address,uint256,uint256,uint256)"(assetId?: BigNumberish | null, project?: string | null, repayer?: string | null, rawRepayAmount?: null, rawFee?: null, badDebt?: null): RepayAssetEventFilter;
        RepayAsset(assetId?: BigNumberish | null, project?: string | null, repayer?: string | null, rawRepayAmount?: null, rawFee?: null, badDebt?: null): RepayAssetEventFilter;
        "SetAssetFlags(uint8,uint56,uint32)"(assetId?: BigNumberish | null, newFlags?: null, newHalfSpread?: null): SetAssetFlagsEventFilter;
        SetAssetFlags(assetId?: BigNumberish | null, newFlags?: null, newHalfSpread?: null): SetAssetFlagsEventFilter;
        "SetAssetParams(uint8,bytes32,uint32,uint32,uint32,uint32,uint32,uint32,uint96,uint96,uint32)"(assetId?: BigNumberish | null, symbol?: null, newInitialMarginRate?: null, newMaintenanceMarginRate?: null, newPositionFeeRate?: null, newLiquidationFeeRate?: null, newMinProfitRate?: null, newMinProfitTime?: null, newMaxLongPositionSize?: null, newMaxShortPositionSize?: null, newSpotWeight?: null): SetAssetParamsEventFilter;
        SetAssetParams(assetId?: BigNumberish | null, symbol?: null, newInitialMarginRate?: null, newMaintenanceMarginRate?: null, newPositionFeeRate?: null, newLiquidationFeeRate?: null, newMinProfitRate?: null, newMinProfitTime?: null, newMaxLongPositionSize?: null, newMaxShortPositionSize?: null, newSpotWeight?: null): SetAssetParamsEventFilter;
        "SetBrokerGasRebate(uint96)"(newBrokerGasRebate?: null): SetBrokerGasRebateEventFilter;
        SetBrokerGasRebate(newBrokerGasRebate?: null): SetBrokerGasRebateEventFilter;
        "SetFundingInterval(uint32,uint32)"(oldFundingInterval?: null, newFundingInterval?: null): SetFundingIntervalEventFilter;
        SetFundingInterval(oldFundingInterval?: null, newFundingInterval?: null): SetFundingIntervalEventFilter;
        "SetFundingParams(uint8,uint32,uint32)"(assetId?: BigNumberish | null, newBaseRate8H?: null, newLimitRate8H?: null): SetFundingParamsEventFilter;
        SetFundingParams(assetId?: BigNumberish | null, newBaseRate8H?: null, newLimitRate8H?: null): SetFundingParamsEventFilter;
        "SetLiquidityFee(uint32,uint32)"(newLiquidityBaseFeeRate?: null, newLiquidityDynamicFeeRate?: null): SetLiquidityFeeEventFilter;
        SetLiquidityFee(newLiquidityBaseFeeRate?: null, newLiquidityDynamicFeeRate?: null): SetLiquidityFeeEventFilter;
        "SetLiquidityManager(address,bool)"(newLiquidityManager?: string | null, isAdd?: null): SetLiquidityManagerEventFilter;
        SetLiquidityManager(newLiquidityManager?: string | null, isAdd?: null): SetLiquidityManagerEventFilter;
        "SetMaintainer(address)"(newMaintainer?: string | null): SetMaintainerEventFilter;
        SetMaintainer(newMaintainer?: string | null): SetMaintainerEventFilter;
        "SetBlpPriceRange(uint96,uint96)"(newLowerBound?: null, newUpperBound?: null): SetBlpPriceRangeEventFilter;
        SetBlpPriceRange(newLowerBound?: null, newUpperBound?: null): SetBlpPriceRangeEventFilter;
        "SetReferenceOracle(uint8,uint8,address,uint32)"(assetId?: BigNumberish | null, referenceOracleType?: null, referenceOracle?: null, referenceDeviation?: null): SetReferenceOracleEventFilter;
        SetReferenceOracle(assetId?: BigNumberish | null, referenceOracleType?: null, referenceOracle?: null, referenceDeviation?: null): SetReferenceOracleEventFilter;
        "SetStrictStableDeviation(uint32)"(newStrictStableDeviation?: null): SetStrictStableDeviationEventFilter;
        SetStrictStableDeviation(newStrictStableDeviation?: null): SetStrictStableDeviationEventFilter;
        "TransferLiquidity(address,address,uint8,uint256)"(sender?: string | null, recipient?: string | null, assetId?: null, amount?: null): TransferLiquidityEventFilter;
        TransferLiquidity(sender?: string | null, recipient?: string | null, assetId?: null, amount?: null): TransferLiquidityEventFilter;
        "UpdateFundingRate(uint8,uint32,uint128,uint32,uint128)"(tokenId?: BigNumberish | null, longFundingRate?: null, longCumulativeFundingRate?: null, shortFundingRate?: null, shortCumulativeFunding?: null): UpdateFundingRateEventFilter;
        UpdateFundingRate(tokenId?: BigNumberish | null, longFundingRate?: null, longCumulativeFundingRate?: null, shortFundingRate?: null, shortCumulativeFunding?: null): UpdateFundingRateEventFilter;
        "UpdateSequence(uint32)"(sequence?: null): UpdateSequenceEventFilter;
        UpdateSequence(sequence?: null): UpdateSequenceEventFilter;
        "UpgradeChainedProxy(address,address)"(prevNextHop?: null, nextHop?: null): UpgradeChainedProxyEventFilter;
        UpgradeChainedProxy(prevNextHop?: null, nextHop?: null): UpgradeChainedProxyEventFilter;
        "WithdrawCollateral(bytes32,address,uint8,uint256,uint96)"(subAccountId?: BytesLike | null, trader?: string | null, collateralId?: null, rawAmount?: null, wadAmount?: null): WithdrawCollateralEventFilter;
        WithdrawCollateral(subAccountId?: BytesLike | null, trader?: string | null, collateralId?: null, rawAmount?: null, wadAmount?: null): WithdrawCollateralEventFilter;
        "WithdrawCollectedFee(uint8,uint96)"(assetId?: BigNumberish | null, collectedFee?: null): WithdrawCollectedFeeEventFilter;
        WithdrawCollectedFee(assetId?: BigNumberish | null, collectedFee?: null): WithdrawCollectedFeeEventFilter;
        "WithdrawProfit(address,uint8,tuple)"(trader?: string | null, assetId?: BigNumberish | null, args?: null): WithdrawProfitEventFilter;
        WithdrawProfit(trader?: string | null, assetId?: BigNumberish | null, args?: null): WithdrawProfitEventFilter;
    };
    estimateGas: {
        addAsset(assetId: BigNumberish, symbol: BytesLike, decimals: BigNumberish, isStable: boolean, tokenAddress: string, bitoroTokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addLiquidity(trader: string, tokenId: BigNumberish, rawAmount: BigNumberish, tokenPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        borrowAsset(borrower: string, assetId: BigNumberish, rawBorrowAmount: BigNumberish, rawFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimBrokerGasRebate(receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        closePosition(subAccountId: BytesLike, amount: BigNumberish, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositCollateral(subAccountId: BytesLike, rawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllAssetInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getAssetAddress(assetId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getAssetInfo(assetId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLiquidityPoolStorage(overrides?: CallOverrides): Promise<BigNumber>;
        getSubAccount(subAccountId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(nextHop: string, blp: string, orderBook: string, weth: string, nativeUnwrapper: string, vault: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        liquidate(subAccountId: BytesLike, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        openPosition(subAccountId: BytesLike, amount: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        rebalance(rebalancer: string, tokenId0: BigNumberish, tokenId1: BigNumberish, rawAmount0: BigNumberish, maxRawAmount1: BigNumberish, userData: BytesLike, price0: BigNumberish, price1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        redeemBitoroToken(trader: string, tokenId: BigNumberish, bitoroTokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeLiquidity(trader: string, blpAmount: BigNumberish, tokenId: BigNumberish, tokenPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        repayAsset(repayer: string, assetId: BigNumberish, rawRepayAmount: BigNumberish, rawFee: BigNumberish, rawBadDebt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAssetFlags(assetId: BigNumberish, isTradable: boolean, isOpenable: boolean, isShortable: boolean, useStableTokenForProfit: boolean, isEnabled: boolean, isStrictStable: boolean, canAddRemoveLiquidity: boolean, newHalfSpread: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAssetParams(assetId: BigNumberish, symbol: BytesLike, newInitialMarginRate: BigNumberish, newMaintenanceMarginRate: BigNumberish, newPositionFeeRate: BigNumberish, newLiquidationFeeRate: BigNumberish, newMinProfitRate: BigNumberish, newMinProfitTime: BigNumberish, newMaxLongPositionSize: BigNumberish, newMaxShortPositionSize: BigNumberish, newSpotWeight: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setEmergencyNumbers(newBlpPriceLowerBound: BigNumberish, newBlpPriceUpperBound: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFundingParams(assetId: BigNumberish, newBaseRate8H: BigNumberish, newLimitRate8H: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setLiquidityManager(newLiquidityManager: string, isAdd: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaintainer(newMaintainer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setNumbers(newFundingInterval: BigNumberish, newLiquidityBaseFeeRate: BigNumberish, newLiquidityDynamicFeeRate: BigNumberish, newStrictStableDeviation: BigNumberish, newBrokerGasRebate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setReferenceOracle(assetId: BigNumberish, referenceOracleType: BigNumberish, referenceOracle: string, referenceDeviation: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferLiquidityIn(assetIds: BigNumberish[], rawAmounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferLiquidityOut(assetIds: BigNumberish[], rawAmounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateFundingState(stableUtilization: BigNumberish, unstableTokenIds: BigNumberish[], unstableUtilizations: BigNumberish[], unstablePrices: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeChainedProxy(nextHop: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawAllCollateral(subAccountId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawCollateral(subAccountId: BytesLike, rawAmount: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawCollectedFee(assetIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawProfit(subAccountId: BytesLike, rawAmount: BigNumberish, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addAsset(assetId: BigNumberish, symbol: BytesLike, decimals: BigNumberish, isStable: boolean, tokenAddress: string, bitoroTokenAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addLiquidity(trader: string, tokenId: BigNumberish, rawAmount: BigNumberish, tokenPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        borrowAsset(borrower: string, assetId: BigNumberish, rawBorrowAmount: BigNumberish, rawFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimBrokerGasRebate(receiver: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        closePosition(subAccountId: BytesLike, amount: BigNumberish, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositCollateral(subAccountId: BytesLike, rawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllAssetInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetAddress(assetId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAssetInfo(assetId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLiquidityPoolStorage(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubAccount(subAccountId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(nextHop: string, blp: string, orderBook: string, weth: string, nativeUnwrapper: string, vault: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        liquidate(subAccountId: BytesLike, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        openPosition(subAccountId: BytesLike, amount: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rebalance(rebalancer: string, tokenId0: BigNumberish, tokenId1: BigNumberish, rawAmount0: BigNumberish, maxRawAmount1: BigNumberish, userData: BytesLike, price0: BigNumberish, price1: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        redeemBitoroToken(trader: string, tokenId: BigNumberish, bitoroTokenAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeLiquidity(trader: string, blpAmount: BigNumberish, tokenId: BigNumberish, tokenPrice: BigNumberish, blpPrice: BigNumberish, currentAssetValue: BigNumberish, targetAssetValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        repayAsset(repayer: string, assetId: BigNumberish, rawRepayAmount: BigNumberish, rawFee: BigNumberish, rawBadDebt: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAssetFlags(assetId: BigNumberish, isTradable: boolean, isOpenable: boolean, isShortable: boolean, useStableTokenForProfit: boolean, isEnabled: boolean, isStrictStable: boolean, canAddRemoveLiquidity: boolean, newHalfSpread: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAssetParams(assetId: BigNumberish, symbol: BytesLike, newInitialMarginRate: BigNumberish, newMaintenanceMarginRate: BigNumberish, newPositionFeeRate: BigNumberish, newLiquidationFeeRate: BigNumberish, newMinProfitRate: BigNumberish, newMinProfitTime: BigNumberish, newMaxLongPositionSize: BigNumberish, newMaxShortPositionSize: BigNumberish, newSpotWeight: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setEmergencyNumbers(newBlpPriceLowerBound: BigNumberish, newBlpPriceUpperBound: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFundingParams(assetId: BigNumberish, newBaseRate8H: BigNumberish, newLimitRate8H: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setLiquidityManager(newLiquidityManager: string, isAdd: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaintainer(newMaintainer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setNumbers(newFundingInterval: BigNumberish, newLiquidityBaseFeeRate: BigNumberish, newLiquidityDynamicFeeRate: BigNumberish, newStrictStableDeviation: BigNumberish, newBrokerGasRebate: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setReferenceOracle(assetId: BigNumberish, referenceOracleType: BigNumberish, referenceOracle: string, referenceDeviation: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        takeOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferLiquidityIn(assetIds: BigNumberish[], rawAmounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferLiquidityOut(assetIds: BigNumberish[], rawAmounts: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateFundingState(stableUtilization: BigNumberish, unstableTokenIds: BigNumberish[], unstableUtilizations: BigNumberish[], unstablePrices: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeChainedProxy(nextHop: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawAllCollateral(subAccountId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawCollateral(subAccountId: BytesLike, rawAmount: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawCollectedFee(assetIds: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawProfit(subAccountId: BytesLike, rawAmount: BigNumberish, profitAssetId: BigNumberish, collateralPrice: BigNumberish, assetPrice: BigNumberish, profitAssetPrice: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
