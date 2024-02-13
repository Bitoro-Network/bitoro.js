import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
export declare namespace Reader {
    type GmxCoreAccountStruct = {
        sizeUsd: PromiseOrValue<BigNumberish>;
        collateralUsd: PromiseOrValue<BigNumberish>;
        lastIncreasedTime: PromiseOrValue<BigNumberish>;
        entryPrice: PromiseOrValue<BigNumberish>;
        entryFundingRate: PromiseOrValue<BigNumberish>;
    };
    type GmxCoreAccountStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        sizeUsd: BigNumber;
        collateralUsd: BigNumber;
        lastIncreasedTime: BigNumber;
        entryPrice: BigNumber;
        entryFundingRate: BigNumber;
    };
    type GmxAdapterOrderStruct = {
        orderHistoryKey: PromiseOrValue<BytesLike>;
        isFillOrCancel: PromiseOrValue<boolean>;
        amountIn: PromiseOrValue<BigNumberish>;
        collateralDeltaUsd: PromiseOrValue<BigNumberish>;
        sizeDeltaUsd: PromiseOrValue<BigNumberish>;
        triggerPrice: PromiseOrValue<BigNumberish>;
        triggerAboveThreshold: PromiseOrValue<boolean>;
        tpOrderHistoryKey: PromiseOrValue<BytesLike>;
        slOrderHistoryKey: PromiseOrValue<BytesLike>;
    };
    type GmxAdapterOrderStructOutput = [
        string,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string
    ] & {
        orderHistoryKey: string;
        isFillOrCancel: boolean;
        amountIn: BigNumber;
        collateralDeltaUsd: BigNumber;
        sizeDeltaUsd: BigNumber;
        triggerPrice: BigNumber;
        triggerAboveThreshold: boolean;
        tpOrderHistoryKey: string;
        slOrderHistoryKey: string;
    };
    type AggregatorSubAccountStruct = {
        proxyAddress: PromiseOrValue<string>;
        projectId: PromiseOrValue<BigNumberish>;
        collateralAddress: PromiseOrValue<string>;
        assetAddress: PromiseOrValue<string>;
        isLong: PromiseOrValue<boolean>;
        isLiquidating: PromiseOrValue<boolean>;
        cumulativeDebt: PromiseOrValue<BigNumberish>;
        cumulativeFee: PromiseOrValue<BigNumberish>;
        debtEntryFunding: PromiseOrValue<BigNumberish>;
        proxyCollateralBalance: PromiseOrValue<BigNumberish>;
        proxyEthBalance: PromiseOrValue<BigNumberish>;
        priceImpactFee: PromiseOrValue<BigNumberish>;
        gmx: Reader.GmxCoreAccountStruct;
        gmxOrders: Reader.GmxAdapterOrderStruct[];
    };
    type AggregatorSubAccountStructOutput = [
        string,
        BigNumber,
        string,
        string,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        Reader.GmxCoreAccountStructOutput,
        Reader.GmxAdapterOrderStructOutput[]
    ] & {
        proxyAddress: string;
        projectId: BigNumber;
        collateralAddress: string;
        assetAddress: string;
        isLong: boolean;
        isLiquidating: boolean;
        cumulativeDebt: BigNumber;
        cumulativeFee: BigNumber;
        debtEntryFunding: BigNumber;
        proxyCollateralBalance: BigNumber;
        proxyEthBalance: BigNumber;
        priceImpactFee: BigNumber;
        gmx: Reader.GmxCoreAccountStructOutput;
        gmxOrders: Reader.GmxAdapterOrderStructOutput[];
    };
    type BitoroCollateralStruct = {
        boostFeeRate: PromiseOrValue<BigNumberish>;
        initialMarginRate: PromiseOrValue<BigNumberish>;
        maintenanceMarginRate: PromiseOrValue<BigNumberish>;
        liquidationFeeRate: PromiseOrValue<BigNumberish>;
        totalBorrow: PromiseOrValue<BigNumberish>;
        borrowLimit: PromiseOrValue<BigNumberish>;
    };
    type BitoroCollateralStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        boostFeeRate: BigNumber;
        initialMarginRate: BigNumber;
        maintenanceMarginRate: BigNumber;
        liquidationFeeRate: BigNumber;
        totalBorrow: BigNumber;
        borrowLimit: BigNumber;
    };
    type GmxTokenStruct = {
        minProfit: PromiseOrValue<BigNumberish>;
        weight: PromiseOrValue<BigNumberish>;
        maxUsdgAmounts: PromiseOrValue<BigNumberish>;
        maxGlobalShortSize: PromiseOrValue<BigNumberish>;
        maxGlobalLongSize: PromiseOrValue<BigNumberish>;
        poolAmount: PromiseOrValue<BigNumberish>;
        reservedAmount: PromiseOrValue<BigNumberish>;
        usdgAmount: PromiseOrValue<BigNumberish>;
        redemptionAmount: PromiseOrValue<BigNumberish>;
        bufferAmounts: PromiseOrValue<BigNumberish>;
        globalShortSize: PromiseOrValue<BigNumberish>;
        contractMinPrice: PromiseOrValue<BigNumberish>;
        contractMaxPrice: PromiseOrValue<BigNumberish>;
        guaranteedUsd: PromiseOrValue<BigNumberish>;
        fundingRate: PromiseOrValue<BigNumberish>;
        cumulativeFundingRate: PromiseOrValue<BigNumberish>;
    };
    type GmxTokenStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        minProfit: BigNumber;
        weight: BigNumber;
        maxUsdgAmounts: BigNumber;
        maxGlobalShortSize: BigNumber;
        maxGlobalLongSize: BigNumber;
        poolAmount: BigNumber;
        reservedAmount: BigNumber;
        usdgAmount: BigNumber;
        redemptionAmount: BigNumber;
        bufferAmounts: BigNumber;
        globalShortSize: BigNumber;
        contractMinPrice: BigNumber;
        contractMaxPrice: BigNumber;
        guaranteedUsd: BigNumber;
        fundingRate: BigNumber;
        cumulativeFundingRate: BigNumber;
    };
    type GmxCoreStorageStruct = {
        totalTokenWeights: PromiseOrValue<BigNumberish>;
        minProfitTime: PromiseOrValue<BigNumberish>;
        minExecutionFee: PromiseOrValue<BigNumberish>;
        liquidationFeeUsd: PromiseOrValue<BigNumberish>;
        _marginFeeBasisPoints: PromiseOrValue<BigNumberish>;
        swapFeeBasisPoints: PromiseOrValue<BigNumberish>;
        stableSwapFeeBasisPoints: PromiseOrValue<BigNumberish>;
        taxBasisPoints: PromiseOrValue<BigNumberish>;
        stableTaxBasisPoints: PromiseOrValue<BigNumberish>;
        usdgSupply: PromiseOrValue<BigNumberish>;
        tokens: Reader.GmxTokenStruct[];
    };
    type GmxCoreStorageStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        Reader.GmxTokenStructOutput[]
    ] & {
        totalTokenWeights: BigNumber;
        minProfitTime: BigNumber;
        minExecutionFee: BigNumber;
        liquidationFeeUsd: BigNumber;
        _marginFeeBasisPoints: BigNumber;
        swapFeeBasisPoints: BigNumber;
        stableSwapFeeBasisPoints: BigNumber;
        taxBasisPoints: BigNumber;
        stableTaxBasisPoints: BigNumber;
        usdgSupply: BigNumber;
        tokens: Reader.GmxTokenStructOutput[];
    };
    type GmxAdapterStorageStruct = {
        collaterals: Reader.BitoroCollateralStruct[];
        gmx: Reader.GmxCoreStorageStruct;
    };
    type GmxAdapterStorageStructOutput = [
        Reader.BitoroCollateralStructOutput[],
        Reader.GmxCoreStorageStructOutput
    ] & {
        collaterals: Reader.BitoroCollateralStructOutput[];
        gmx: Reader.GmxCoreStorageStructOutput;
    };
}
export interface ReaderInterface extends utils.Interface {
    functions: {
        "aggregatorFactory()": FunctionFragment;
        "getAggregatorSubAccountsOfAccount(address,address,address)": FunctionFragment;
        "getAggregatorSubAccountsOfProxy(address,address,address[])": FunctionFragment;
        "getGmxAdapterStorage(address,address,address,address[],address[])": FunctionFragment;
        "gmxVault()": FunctionFragment;
        "usdg()": FunctionFragment;
        "weth()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "aggregatorFactory" | "getAggregatorSubAccountsOfAccount" | "getAggregatorSubAccountsOfProxy" | "getGmxAdapterStorage" | "gmxVault" | "usdg" | "weth"): FunctionFragment;
    encodeFunctionData(functionFragment: "aggregatorFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAggregatorSubAccountsOfAccount", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "getAggregatorSubAccountsOfProxy", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>[]
    ]): string;
    encodeFunctionData(functionFragment: "getGmxAdapterStorage", values: [
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>,
        PromiseOrValue<string>[],
        PromiseOrValue<string>[]
    ]): string;
    encodeFunctionData(functionFragment: "gmxVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "usdg", values?: undefined): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    decodeFunctionResult(functionFragment: "aggregatorFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAggregatorSubAccountsOfAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAggregatorSubAccountsOfProxy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGmxAdapterStorage", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gmxVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "usdg", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    events: {};
}
export interface Reader extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ReaderInterface;
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
        aggregatorFactory(overrides?: CallOverrides): Promise<[string]>;
        getAggregatorSubAccountsOfAccount(gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            Reader.AggregatorSubAccountStructOutput[]
        ] & {
            subAccounts: Reader.AggregatorSubAccountStructOutput[];
        }>;
        getAggregatorSubAccountsOfProxy(gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, proxyAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[
            Reader.AggregatorSubAccountStructOutput[]
        ] & {
            subAccounts: Reader.AggregatorSubAccountStructOutput[];
        }>;
        getGmxAdapterStorage(gmxPositionManager: PromiseOrValue<string>, gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, aggregatorCollateralAddresses: PromiseOrValue<string>[], gmxTokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<[
            Reader.GmxAdapterStorageStructOutput
        ] & {
            store: Reader.GmxAdapterStorageStructOutput;
        }>;
        gmxVault(overrides?: CallOverrides): Promise<[string]>;
        usdg(overrides?: CallOverrides): Promise<[string]>;
        weth(overrides?: CallOverrides): Promise<[string]>;
    };
    aggregatorFactory(overrides?: CallOverrides): Promise<string>;
    getAggregatorSubAccountsOfAccount(gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Reader.AggregatorSubAccountStructOutput[]>;
    getAggregatorSubAccountsOfProxy(gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, proxyAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<Reader.AggregatorSubAccountStructOutput[]>;
    getGmxAdapterStorage(gmxPositionManager: PromiseOrValue<string>, gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, aggregatorCollateralAddresses: PromiseOrValue<string>[], gmxTokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<Reader.GmxAdapterStorageStructOutput>;
    gmxVault(overrides?: CallOverrides): Promise<string>;
    usdg(overrides?: CallOverrides): Promise<string>;
    weth(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        aggregatorFactory(overrides?: CallOverrides): Promise<string>;
        getAggregatorSubAccountsOfAccount(gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<Reader.AggregatorSubAccountStructOutput[]>;
        getAggregatorSubAccountsOfProxy(gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, proxyAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<Reader.AggregatorSubAccountStructOutput[]>;
        getGmxAdapterStorage(gmxPositionManager: PromiseOrValue<string>, gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, aggregatorCollateralAddresses: PromiseOrValue<string>[], gmxTokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<Reader.GmxAdapterStorageStructOutput>;
        gmxVault(overrides?: CallOverrides): Promise<string>;
        usdg(overrides?: CallOverrides): Promise<string>;
        weth(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        aggregatorFactory(overrides?: CallOverrides): Promise<BigNumber>;
        getAggregatorSubAccountsOfAccount(gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getAggregatorSubAccountsOfProxy(gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, proxyAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        getGmxAdapterStorage(gmxPositionManager: PromiseOrValue<string>, gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, aggregatorCollateralAddresses: PromiseOrValue<string>[], gmxTokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<BigNumber>;
        gmxVault(overrides?: CallOverrides): Promise<BigNumber>;
        usdg(overrides?: CallOverrides): Promise<BigNumber>;
        weth(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        aggregatorFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAggregatorSubAccountsOfAccount(gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, accountAddress: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAggregatorSubAccountsOfProxy(gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, proxyAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getGmxAdapterStorage(gmxPositionManager: PromiseOrValue<string>, gmxPositionRouter: PromiseOrValue<string>, gmxOrderBook: PromiseOrValue<string>, aggregatorCollateralAddresses: PromiseOrValue<string>[], gmxTokenAddresses: PromiseOrValue<string>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        gmxVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        usdg(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        weth(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
