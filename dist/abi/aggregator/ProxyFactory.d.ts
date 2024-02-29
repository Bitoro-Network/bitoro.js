import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace ProxyFactory {
    type ClosePositionArgsStruct = {
        projectId: PromiseOrValue<BigNumberish>;
        collateralToken: PromiseOrValue<string>;
        assetToken: PromiseOrValue<string>;
        isLong: PromiseOrValue<boolean>;
        collateralUsd: PromiseOrValue<BigNumberish>;
        sizeUsd: PromiseOrValue<BigNumberish>;
        priceUsd: PromiseOrValue<BigNumberish>;
        flags: PromiseOrValue<BigNumberish>;
        referralCode: PromiseOrValue<BytesLike>;
    };
    type ClosePositionArgsStructOutput = [
        BigNumber,
        string,
        string,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string
    ] & {
        projectId: BigNumber;
        collateralToken: string;
        assetToken: string;
        isLong: boolean;
        collateralUsd: BigNumber;
        sizeUsd: BigNumber;
        priceUsd: BigNumber;
        flags: number;
        referralCode: string;
    };
    type ClosePositionArgsV2Struct = {
        projectId: PromiseOrValue<BigNumberish>;
        collateralToken: PromiseOrValue<string>;
        assetToken: PromiseOrValue<string>;
        isLong: PromiseOrValue<boolean>;
        collateralUsd: PromiseOrValue<BigNumberish>;
        sizeUsd: PromiseOrValue<BigNumberish>;
        priceUsd: PromiseOrValue<BigNumberish>;
        tpPriceUsd: PromiseOrValue<BigNumberish>;
        slPriceUsd: PromiseOrValue<BigNumberish>;
        flags: PromiseOrValue<BigNumberish>;
        referralCode: PromiseOrValue<BytesLike>;
    };
    type ClosePositionArgsV2StructOutput = [
        BigNumber,
        string,
        string,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string
    ] & {
        projectId: BigNumber;
        collateralToken: string;
        assetToken: string;
        isLong: boolean;
        collateralUsd: BigNumber;
        sizeUsd: BigNumber;
        priceUsd: BigNumber;
        tpPriceUsd: BigNumber;
        slPriceUsd: BigNumber;
        flags: number;
        referralCode: string;
    };
    type OpenPositionArgsStruct = {
        projectId: PromiseOrValue<BigNumberish>;
        collateralToken: PromiseOrValue<string>;
        assetToken: PromiseOrValue<string>;
        isLong: PromiseOrValue<boolean>;
        tokenIn: PromiseOrValue<string>;
        amountIn: PromiseOrValue<BigNumberish>;
        minOut: PromiseOrValue<BigNumberish>;
        borrow: PromiseOrValue<BigNumberish>;
        sizeUsd: PromiseOrValue<BigNumberish>;
        priceUsd: PromiseOrValue<BigNumberish>;
        flags: PromiseOrValue<BigNumberish>;
        referralCode: PromiseOrValue<BytesLike>;
    };
    type OpenPositionArgsStructOutput = [
        BigNumber,
        string,
        string,
        boolean,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string
    ] & {
        projectId: BigNumber;
        collateralToken: string;
        assetToken: string;
        isLong: boolean;
        tokenIn: string;
        amountIn: BigNumber;
        minOut: BigNumber;
        borrow: BigNumber;
        sizeUsd: BigNumber;
        priceUsd: BigNumber;
        flags: number;
        referralCode: string;
    };
    type OpenPositionArgsV2Struct = {
        projectId: PromiseOrValue<BigNumberish>;
        collateralToken: PromiseOrValue<string>;
        assetToken: PromiseOrValue<string>;
        isLong: PromiseOrValue<boolean>;
        tokenIn: PromiseOrValue<string>;
        amountIn: PromiseOrValue<BigNumberish>;
        minOut: PromiseOrValue<BigNumberish>;
        borrow: PromiseOrValue<BigNumberish>;
        sizeUsd: PromiseOrValue<BigNumberish>;
        priceUsd: PromiseOrValue<BigNumberish>;
        tpPriceUsd: PromiseOrValue<BigNumberish>;
        slPriceUsd: PromiseOrValue<BigNumberish>;
        flags: PromiseOrValue<BigNumberish>;
        referralCode: PromiseOrValue<BytesLike>;
    };
    type OpenPositionArgsV2StructOutput = [
        BigNumber,
        string,
        string,
        boolean,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string
    ] & {
        projectId: BigNumber;
        collateralToken: string;
        assetToken: string;
        isLong: boolean;
        tokenIn: string;
        amountIn: BigNumber;
        minOut: BigNumber;
        borrow: BigNumber;
        sizeUsd: BigNumber;
        priceUsd: BigNumber;
        tpPriceUsd: BigNumber;
        slPriceUsd: BigNumber;
        flags: number;
        referralCode: string;
    };
    type BitoroOrderParamsStruct = {
        subAccountId: PromiseOrValue<BytesLike>;
        collateralAmount: PromiseOrValue<BigNumberish>;
        size: PromiseOrValue<BigNumberish>;
        price: PromiseOrValue<BigNumberish>;
        profitTokenId: PromiseOrValue<BigNumberish>;
        flags: PromiseOrValue<BigNumberish>;
        deadline: PromiseOrValue<BigNumberish>;
        referralCode: PromiseOrValue<BytesLike>;
        extra: IBitoroOrderBook.PositionOrderExtraStruct;
    };
    type BitoroOrderParamsStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        string,
        IBitoroOrderBook.PositionOrderExtraStructOutput
    ] & {
        subAccountId: string;
        collateralAmount: BigNumber;
        size: BigNumber;
        price: BigNumber;
        profitTokenId: number;
        flags: number;
        deadline: number;
        referralCode: string;
        extra: IBitoroOrderBook.PositionOrderExtraStructOutput;
    };
    type OrderParamsStruct = {
        orderKey: PromiseOrValue<BytesLike>;
        collateralDelta: PromiseOrValue<BigNumberish>;
        sizeDelta: PromiseOrValue<BigNumberish>;
        triggerPrice: PromiseOrValue<BigNumberish>;
        triggerAboveThreshold: PromiseOrValue<boolean>;
    };
    type OrderParamsStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
    ] & {
        orderKey: string;
        collateralDelta: BigNumber;
        sizeDelta: BigNumber;
        triggerPrice: BigNumber;
        triggerAboveThreshold: boolean;
    };
}
export declare namespace IBitoroOrderBook {
    type PositionOrderExtraStruct = {
        tpPrice: PromiseOrValue<BigNumberish>;
        slPrice: PromiseOrValue<BigNumberish>;
        tpslProfitTokenId: PromiseOrValue<BigNumberish>;
        tpslDeadline: PromiseOrValue<BigNumberish>;
    };
    type PositionOrderExtraStructOutput = [
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        tpPrice: BigNumber;
        slPrice: BigNumber;
        tpslProfitTokenId: number;
        tpslDeadline: number;
    };
}
export interface ProxyFactoryInterface extends utils.Interface {
    functions: {
        "borrowAsset(uint256,address,uint256,uint256)": FunctionFragment;
        "cancelOrders(uint256,address,address,bool,bytes32[])": FunctionFragment;
        "cancelTimeoutOrders(uint256,address,address,address,bool,bytes32[])": FunctionFragment;
        "closePosition((uint256,address,address,bool,uint256,uint256,uint96,uint8,bytes32))": FunctionFragment;
        "closePositionV2((uint256,address,address,bool,uint256,uint256,uint96,uint96,uint96,uint8,bytes32))": FunctionFragment;
        "createProxy(uint256,address,address,bool)": FunctionFragment;
        "getAssetId(uint256,address)": FunctionFragment;
        "getBorrowStates(uint256,address)": FunctionFragment;
        "getConfigVersions(uint256,address)": FunctionFragment;
        "getProjectAssetConfig(uint256,address)": FunctionFragment;
        "getProjectConfig(uint256)": FunctionFragment;
        "getProxiesOf(address)": FunctionFragment;
        "getProxy(bytes32)": FunctionFragment;
        "getProxyAddress(uint256,address,address,address,bool)": FunctionFragment;
        "implementation()": FunctionFragment;
        "initialize(address,address)": FunctionFragment;
        "isKeeper(address)": FunctionFragment;
        "liquidatePosition(uint256,address,address,address,bool,uint256)": FunctionFragment;
        "openPosition((uint256,address,address,bool,address,uint256,uint256,uint256,uint256,uint96,uint8,bytes32))": FunctionFragment;
        "openPositionV2((uint256,address,address,bool,address,uint256,uint256,uint256,uint256,uint96,uint96,uint96,uint8,bytes32))": FunctionFragment;
        "openPositionV3((uint256,address,address,bool,address,uint256,uint256,uint256,uint256,uint96,uint96,uint96,uint8,bytes32),(bytes32,uint96,uint96,uint96,uint8,uint8,uint32,bytes32,(uint96,uint96,uint8,uint32)),uint256)": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "repayAsset(uint256,address,uint256,uint256,uint256)": FunctionFragment;
        "setBorrowConfig(uint256,address,uint8,uint256)": FunctionFragment;
        "setKeeper(address,bool)": FunctionFragment;
        "setMaintainer(address,bool)": FunctionFragment;
        "setBitoroOrderBook(address)": FunctionFragment;
        "setProjectAssetConfig(uint256,address,uint256[])": FunctionFragment;
        "setProjectConfig(uint256,uint256[])": FunctionFragment;
        "setReferralManager(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "updateOrder(uint256,address,address,bool,(bytes32,uint256,uint256,uint256,bool)[])": FunctionFragment;
        "upgradeTo(uint256,address)": FunctionFragment;
        "weth()": FunctionFragment;
        "withdraw(uint256,address,address,address,bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "borrowAsset" | "cancelOrders" | "cancelTimeoutOrders" | "closePosition" | "closePositionV2" | "createProxy" | "getAssetId" | "getBorrowStates" | "getConfigVersions" | "getProjectAssetConfig" | "getProjectConfig" | "getProxiesOf" | "getProxy" | "getProxyAddress" | "implementation" | "initialize" | "isKeeper" | "liquidatePosition" | "openPosition" | "openPositionV2" | "openPositionV3" | "owner" | "renounceOwnership" | "repayAsset" | "setBorrowConfig" | "setKeeper" | "setMaintainer" | "setBitoroOrderBook" | "setProjectAssetConfig" | "setProjectConfig" | "setReferralManager" | "transferOwnership" | "updateOrder" | "upgradeTo" | "weth" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "borrowAsset", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "cancelOrders", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "cancelTimeoutOrders", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BytesLike>[]
    ]): string;
    encodeFunctionData(functionFragment: "closePosition", values: [ProxyFactory.ClosePositionArgsStruct]): string;
    encodeFunctionData(functionFragment: "closePositionV2", values: [ProxyFactory.ClosePositionArgsV2Struct]): string;
    encodeFunctionData(functionFragment: "createProxy", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "getAssetId", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getBorrowStates", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getConfigVersions", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getProjectAssetConfig", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getProjectConfig", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getProxiesOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getProxy", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getProxyAddress", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "isKeeper", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "liquidatePosition", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "openPosition", values: [ProxyFactory.OpenPositionArgsStruct]): string;
    encodeFunctionData(functionFragment: "openPositionV2", values: [ProxyFactory.OpenPositionArgsV2Struct]): string;
    encodeFunctionData(functionFragment: "openPositionV3", values: [
        ProxyFactory.OpenPositionArgsV2Struct,
        ProxyFactory.BitoroOrderParamsStruct,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "repayAsset", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setBorrowConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setKeeper", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setMaintainer", values: [PromiseOrValue<string>, PromiseOrValue<boolean>]): string;
    encodeFunctionData(functionFragment: "setBitoroOrderBook", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "setProjectAssetConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>[]
    ]): string;
    encodeFunctionData(functionFragment: "setProjectConfig", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]): string;
    encodeFunctionData(functionFragment: "setReferralManager", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "updateOrder", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>,
        ProxyFactory.OrderParamsStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<boolean>
    ]): string;
    decodeFunctionResult(functionFragment: "borrowAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelTimeoutOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closePositionV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAssetId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBorrowStates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfigVersions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProjectAssetConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProjectConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProxiesOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProxyAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "liquidatePosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openPosition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openPositionV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "openPositionV3", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "repayAsset", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBorrowConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setKeeper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaintainer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBitoroOrderBook", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProjectAssetConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProjectConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setReferralManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    events: {
        "CreateProxy(uint256,bytes32,address,address,bytes32,address,address,uint8,bool)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "BitoroCall(address,uint256,bytes)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "SetBorrowConfig(uint256,address,uint8,uint8,uint256,uint256)": EventFragment;
        "SetGmxReferralCode(bytes32)": EventFragment;
        "SetKeeper(address,bool)": EventFragment;
        "SetMaintainer(address,bool)": EventFragment;
        "SetProjectAssetConfig(uint256,address,uint256[],uint256)": EventFragment;
        "SetProjectConfig(uint256,uint256[],uint256)": EventFragment;
        "Upgraded(uint256,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CreateProxy"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BitoroCall"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetBorrowConfig"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetGmxReferralCode"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetKeeper"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetMaintainer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetProjectAssetConfig"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SetProjectConfig"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface CreateProxyEventObject {
    projectId: BigNumber;
    proxyId: string;
    owner: string;
    proxy: string;
    gmxPositionKey: string;
    assetToken: string;
    collateralToken: string;
    collateralTokenId: number;
    isLong: boolean;
}
export type CreateProxyEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    string,
    string,
    string,
    string,
    number,
    boolean
], CreateProxyEventObject>;
export type CreateProxyEventFilter = TypedEventFilter<CreateProxyEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface BitoroCallEventObject {
    target: string;
    value: BigNumber;
    data: string;
}
export type BitoroCallEvent = TypedEvent<[
    string,
    BigNumber,
    string
], BitoroCallEventObject>;
export type BitoroCallEventFilter = TypedEventFilter<BitoroCallEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface SetBorrowConfigEventObject {
    projectId: BigNumber;
    assetToken: string;
    prevAssetId: number;
    newAssetId: number;
    prevLimit: BigNumber;
    newLimit: BigNumber;
}
export type SetBorrowConfigEvent = TypedEvent<[
    BigNumber,
    string,
    number,
    number,
    BigNumber,
    BigNumber
], SetBorrowConfigEventObject>;
export type SetBorrowConfigEventFilter = TypedEventFilter<SetBorrowConfigEvent>;
export interface SetGmxReferralCodeEventObject {
    gmxReferralCode: string;
}
export type SetGmxReferralCodeEvent = TypedEvent<[
    string
], SetGmxReferralCodeEventObject>;
export type SetGmxReferralCodeEventFilter = TypedEventFilter<SetGmxReferralCodeEvent>;
export interface SetKeeperEventObject {
    keeper: string;
    enable: boolean;
}
export type SetKeeperEvent = TypedEvent<[
    string,
    boolean
], SetKeeperEventObject>;
export type SetKeeperEventFilter = TypedEventFilter<SetKeeperEvent>;
export interface SetMaintainerEventObject {
    maintainer: string;
    enable: boolean;
}
export type SetMaintainerEvent = TypedEvent<[
    string,
    boolean
], SetMaintainerEventObject>;
export type SetMaintainerEventFilter = TypedEventFilter<SetMaintainerEvent>;
export interface SetProjectAssetConfigEventObject {
    projectId: BigNumber;
    assetToken: string;
    values: BigNumber[];
    version: BigNumber;
}
export type SetProjectAssetConfigEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber[],
    BigNumber
], SetProjectAssetConfigEventObject>;
export type SetProjectAssetConfigEventFilter = TypedEventFilter<SetProjectAssetConfigEvent>;
export interface SetProjectConfigEventObject {
    projectId: BigNumber;
    values: BigNumber[];
    version: BigNumber;
}
export type SetProjectConfigEvent = TypedEvent<[
    BigNumber,
    BigNumber[],
    BigNumber
], SetProjectConfigEventObject>;
export type SetProjectConfigEventFilter = TypedEventFilter<SetProjectConfigEvent>;
export interface UpgradedEventObject {
    projectId: BigNumber;
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[
    BigNumber,
    string
], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface ProxyFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProxyFactoryInterface;
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
        borrowAsset(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, toBorrow: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelOrders(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        cancelTimeoutOrders(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        closePosition(args: ProxyFactory.ClosePositionArgsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        closePositionV2(args: ProxyFactory.ClosePositionArgsV2Struct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        createProxy(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getAssetId(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[number]>;
        getBorrowStates(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalBorrow: BigNumber;
            borrowLimit: BigNumber;
            badDebt: BigNumber;
        }>;
        getConfigVersions(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            number
        ] & {
            projectConfigVersion: number;
            assetConfigVersion: number;
        }>;
        getProjectAssetConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getProjectConfig(projectId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getProxiesOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[string[]]>;
        getProxy(accountKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[string]>;
        getProxyAddress(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<[string]>;
        implementation(overrides?: CallOverrides): Promise<[string]>;
        initialize(weth_: PromiseOrValue<string>, liquidityPool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        isKeeper(keeper: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        liquidatePosition(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, liquidatePrice: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        openPosition(args: ProxyFactory.OpenPositionArgsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        openPositionV2(args: ProxyFactory.OpenPositionArgsV2Struct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        openPositionV3(args: ProxyFactory.OpenPositionArgsV2Struct, bitoroParams: ProxyFactory.BitoroOrderParamsStruct, bitoroValue: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        repayAsset(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, toRepay: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, badDebt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBorrowConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, newAssetId: PromiseOrValue<BigNumberish>, newLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setKeeper(keeper: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setMaintainer(maintainer: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setBitoroOrderBook(bitoroOrderBook: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setProjectAssetConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setProjectConfig(projectId: PromiseOrValue<BigNumberish>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setReferralManager(referralManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        updateOrder(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, orderParams: ProxyFactory.OrderParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(projectId: PromiseOrValue<BigNumberish>, newImplementation_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        weth(overrides?: CallOverrides): Promise<[string]>;
        withdraw(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    borrowAsset(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, toBorrow: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelOrders(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    cancelTimeoutOrders(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    closePosition(args: ProxyFactory.ClosePositionArgsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    closePositionV2(args: ProxyFactory.ClosePositionArgsV2Struct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    createProxy(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getAssetId(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
    getBorrowStates(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalBorrow: BigNumber;
        borrowLimit: BigNumber;
        badDebt: BigNumber;
    }>;
    getConfigVersions(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        number,
        number
    ] & {
        projectConfigVersion: number;
        assetConfigVersion: number;
    }>;
    getProjectAssetConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
    getProjectConfig(projectId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
    getProxiesOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
    getProxy(accountKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
    getProxyAddress(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
    implementation(overrides?: CallOverrides): Promise<string>;
    initialize(weth_: PromiseOrValue<string>, liquidityPool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    isKeeper(keeper: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    liquidatePosition(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, liquidatePrice: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    openPosition(args: ProxyFactory.OpenPositionArgsStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    openPositionV2(args: ProxyFactory.OpenPositionArgsV2Struct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    openPositionV3(args: ProxyFactory.OpenPositionArgsV2Struct, bitoroParams: ProxyFactory.BitoroOrderParamsStruct, bitoroValue: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    repayAsset(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, toRepay: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, badDebt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBorrowConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, newAssetId: PromiseOrValue<BigNumberish>, newLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setKeeper(keeper: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setMaintainer(maintainer: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setBitoroOrderBook(bitoroOrderBook: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setProjectAssetConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setProjectConfig(projectId: PromiseOrValue<BigNumberish>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setReferralManager(referralManager: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    updateOrder(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, orderParams: ProxyFactory.OrderParamsStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(projectId: PromiseOrValue<BigNumberish>, newImplementation_: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    weth(overrides?: CallOverrides): Promise<string>;
    withdraw(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        borrowAsset(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, toBorrow: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        cancelOrders(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, keys: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        cancelTimeoutOrders(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, keys: PromiseOrValue<BytesLike>[], overrides?: CallOverrides): Promise<void>;
        closePosition(args: ProxyFactory.ClosePositionArgsStruct, overrides?: CallOverrides): Promise<void>;
        closePositionV2(args: ProxyFactory.ClosePositionArgsV2Struct, overrides?: CallOverrides): Promise<void>;
        createProxy(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
        getAssetId(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<number>;
        getBorrowStates(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            totalBorrow: BigNumber;
            borrowLimit: BigNumber;
            badDebt: BigNumber;
        }>;
        getConfigVersions(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            number,
            number
        ] & {
            projectConfigVersion: number;
            assetConfigVersion: number;
        }>;
        getProjectAssetConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber[]>;
        getProjectConfig(projectId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber[]>;
        getProxiesOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<string[]>;
        getProxy(accountKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<string>;
        getProxyAddress(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<string>;
        implementation(overrides?: CallOverrides): Promise<string>;
        initialize(weth_: PromiseOrValue<string>, liquidityPool: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        isKeeper(keeper: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        liquidatePosition(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, liquidatePrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        openPosition(args: ProxyFactory.OpenPositionArgsStruct, overrides?: CallOverrides): Promise<void>;
        openPositionV2(args: ProxyFactory.OpenPositionArgsV2Struct, overrides?: CallOverrides): Promise<void>;
        openPositionV3(args: ProxyFactory.OpenPositionArgsV2Struct, bitoroParams: ProxyFactory.BitoroOrderParamsStruct, bitoroValue: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        repayAsset(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, toRepay: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, badDebt: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setBorrowConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, newAssetId: PromiseOrValue<BigNumberish>, newLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setKeeper(keeper: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setMaintainer(maintainer: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
        setBitoroOrderBook(bitoroOrderBook: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        setProjectAssetConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        setProjectConfig(projectId: PromiseOrValue<BigNumberish>, values: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<void>;
        setReferralManager(referralManager: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        updateOrder(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, orderParams: ProxyFactory.OrderParamsStruct[], overrides?: CallOverrides): Promise<void>;
        upgradeTo(projectId: PromiseOrValue<BigNumberish>, newImplementation_: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        weth(overrides?: CallOverrides): Promise<string>;
        withdraw(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "CreateProxy(uint256,bytes32,address,address,bytes32,address,address,uint8,bool)"(projectId?: null, proxyId?: null, owner?: null, proxy?: null, gmxPositionKey?: null, assetToken?: null, collateralToken?: null, collateralTokenId?: null, isLong?: null): CreateProxyEventFilter;
        CreateProxy(projectId?: null, proxyId?: null, owner?: null, proxy?: null, gmxPositionKey?: null, assetToken?: null, collateralToken?: null, collateralTokenId?: null, isLong?: null): CreateProxyEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "BitoroCall(address,uint256,bytes)"(target?: null, value?: null, data?: null): BitoroCallEventFilter;
        BitoroCall(target?: null, value?: null, data?: null): BitoroCallEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "SetBorrowConfig(uint256,address,uint8,uint8,uint256,uint256)"(projectId?: null, assetToken?: null, prevAssetId?: null, newAssetId?: null, prevLimit?: null, newLimit?: null): SetBorrowConfigEventFilter;
        SetBorrowConfig(projectId?: null, assetToken?: null, prevAssetId?: null, newAssetId?: null, prevLimit?: null, newLimit?: null): SetBorrowConfigEventFilter;
        "SetGmxReferralCode(bytes32)"(gmxReferralCode?: null): SetGmxReferralCodeEventFilter;
        SetGmxReferralCode(gmxReferralCode?: null): SetGmxReferralCodeEventFilter;
        "SetKeeper(address,bool)"(keeper?: null, enable?: null): SetKeeperEventFilter;
        SetKeeper(keeper?: null, enable?: null): SetKeeperEventFilter;
        "SetMaintainer(address,bool)"(maintainer?: null, enable?: null): SetMaintainerEventFilter;
        SetMaintainer(maintainer?: null, enable?: null): SetMaintainerEventFilter;
        "SetProjectAssetConfig(uint256,address,uint256[],uint256)"(projectId?: null, assetToken?: null, values?: null, version?: null): SetProjectAssetConfigEventFilter;
        SetProjectAssetConfig(projectId?: null, assetToken?: null, values?: null, version?: null): SetProjectAssetConfigEventFilter;
        "SetProjectConfig(uint256,uint256[],uint256)"(projectId?: null, values?: null, version?: null): SetProjectConfigEventFilter;
        SetProjectConfig(projectId?: null, values?: null, version?: null): SetProjectConfigEventFilter;
        "Upgraded(uint256,address)"(projectId?: null, implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
        Upgraded(projectId?: null, implementation?: PromiseOrValue<string> | null): UpgradedEventFilter;
    };
    estimateGas: {
        borrowAsset(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, toBorrow: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelOrders(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        cancelTimeoutOrders(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        closePosition(args: ProxyFactory.ClosePositionArgsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        closePositionV2(args: ProxyFactory.ClosePositionArgsV2Struct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        createProxy(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getAssetId(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getBorrowStates(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getConfigVersions(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getProjectAssetConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getProjectConfig(projectId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        getProxiesOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getProxy(accountKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getProxyAddress(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<BigNumber>;
        implementation(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(weth_: PromiseOrValue<string>, liquidityPool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        isKeeper(keeper: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        liquidatePosition(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, liquidatePrice: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        openPosition(args: ProxyFactory.OpenPositionArgsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        openPositionV2(args: ProxyFactory.OpenPositionArgsV2Struct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        openPositionV3(args: ProxyFactory.OpenPositionArgsV2Struct, bitoroParams: ProxyFactory.BitoroOrderParamsStruct, bitoroValue: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        repayAsset(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, toRepay: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, badDebt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBorrowConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, newAssetId: PromiseOrValue<BigNumberish>, newLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setKeeper(keeper: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setMaintainer(maintainer: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setBitoroOrderBook(bitoroOrderBook: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setProjectAssetConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setProjectConfig(projectId: PromiseOrValue<BigNumberish>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setReferralManager(referralManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        updateOrder(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, orderParams: ProxyFactory.OrderParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        upgradeTo(projectId: PromiseOrValue<BigNumberish>, newImplementation_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        borrowAsset(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, toBorrow: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelOrders(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        cancelTimeoutOrders(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, keys: PromiseOrValue<BytesLike>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        closePosition(args: ProxyFactory.ClosePositionArgsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        closePositionV2(args: ProxyFactory.ClosePositionArgsV2Struct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        createProxy(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getAssetId(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBorrowStates(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getConfigVersions(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProjectAssetConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProjectConfig(projectId: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProxiesOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProxy(accountKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getProxyAddress(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(weth_: PromiseOrValue<string>, liquidityPool: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        isKeeper(keeper: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        liquidatePosition(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, liquidatePrice: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        openPosition(args: ProxyFactory.OpenPositionArgsStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        openPositionV2(args: ProxyFactory.OpenPositionArgsV2Struct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        openPositionV3(args: ProxyFactory.OpenPositionArgsV2Struct, bitoroParams: ProxyFactory.BitoroOrderParamsStruct, bitoroValue: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        repayAsset(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, toRepay: PromiseOrValue<BigNumberish>, fee: PromiseOrValue<BigNumberish>, badDebt: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBorrowConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, newAssetId: PromiseOrValue<BigNumberish>, newLimit: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setKeeper(keeper: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setMaintainer(maintainer: PromiseOrValue<string>, enable: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setBitoroOrderBook(bitoroOrderBook: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setProjectAssetConfig(projectId: PromiseOrValue<BigNumberish>, assetToken: PromiseOrValue<string>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setProjectConfig(projectId: PromiseOrValue<BigNumberish>, values: PromiseOrValue<BigNumberish>[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setReferralManager(referralManager: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        updateOrder(projectId: PromiseOrValue<BigNumberish>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, orderParams: ProxyFactory.OrderParamsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(projectId: PromiseOrValue<BigNumberish>, newImplementation_: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(projectId: PromiseOrValue<BigNumberish>, account: PromiseOrValue<string>, collateralToken: PromiseOrValue<string>, assetToken: PromiseOrValue<string>, isLong: PromiseOrValue<boolean>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}