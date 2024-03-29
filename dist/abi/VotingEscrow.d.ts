import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface VotingEscrowInterface extends utils.Interface {
    contractName: "VotingEscrow";
    functions: {
        "_balanceOf(address,uint256)": FunctionFragment;
        "averageUnlockTime()": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "balanceOfAt(address,uint256)": FunctionFragment;
        "checkpoint()": FunctionFragment;
        "decimals()": FunctionFragment;
        "deposit(address,uint256,uint256)": FunctionFragment;
        "depositFor(address,address,address,uint256,uint256)": FunctionFragment;
        "depositedBalances(address)": FunctionFragment;
        "epoch()": FunctionFragment;
        "findTimestampEpoch(uint256)": FunctionFragment;
        "findTimestampUserEpoch(address,uint256,uint256)": FunctionFragment;
        "find_block_epoch(uint256,uint256)": FunctionFragment;
        "getLastUserBlock(address)": FunctionFragment;
        "getLastUserSlope(address)": FunctionFragment;
        "increaseUnlockTime(uint256)": FunctionFragment;
        "increaseUnlockTimeFor(address,uint256)": FunctionFragment;
        "initialize(address,address,string,string,string)": FunctionFragment;
        "isHandler(address)": FunctionFragment;
        "locked(address)": FunctionFragment;
        "lockedAmount(address)": FunctionFragment;
        "lockedEnd(address)": FunctionFragment;
        "bcbToken()": FunctionFragment;
        "bitoroToken()": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "pointHistory(uint256)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setHandler(address,bool)": FunctionFragment;
        "slopeChanges(uint256)": FunctionFragment;
        "supply()": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "totalSupplyAt(uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "userPointEpoch(address)": FunctionFragment;
        "userPointHistory(address,uint256)": FunctionFragment;
        "userPointHistoryTime(address,uint256)": FunctionFragment;
        "version()": FunctionFragment;
        "withdraw()": FunctionFragment;
        "withdrawFor(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "_balanceOf", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "averageUnlockTime", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "balanceOfAt", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkpoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositFor", values: [string, string, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "depositedBalances", values: [string]): string;
    encodeFunctionData(functionFragment: "epoch", values?: undefined): string;
    encodeFunctionData(functionFragment: "findTimestampEpoch", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "findTimestampUserEpoch", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "find_block_epoch", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLastUserBlock", values: [string]): string;
    encodeFunctionData(functionFragment: "getLastUserSlope", values: [string]): string;
    encodeFunctionData(functionFragment: "increaseUnlockTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "increaseUnlockTimeFor", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string, string]): string;
    encodeFunctionData(functionFragment: "isHandler", values: [string]): string;
    encodeFunctionData(functionFragment: "locked", values: [string]): string;
    encodeFunctionData(functionFragment: "lockedAmount", values: [string]): string;
    encodeFunctionData(functionFragment: "lockedEnd", values: [string]): string;
    encodeFunctionData(functionFragment: "bcbToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "bitoroToken", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pointHistory", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setHandler", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "slopeChanges", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supply", values?: undefined): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupplyAt", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "userPointEpoch", values: [string]): string;
    encodeFunctionData(functionFragment: "userPointHistory", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "userPointHistoryTime", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFor", values: [string]): string;
    decodeFunctionResult(functionFragment: "_balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "averageUnlockTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositedBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "epoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "findTimestampEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "findTimestampUserEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "find_block_epoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastUserBlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastUserSlope", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseUnlockTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseUnlockTimeFor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isHandler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "locked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedEnd", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bcbToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bitoroToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pointHistory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setHandler", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slopeChanges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupplyAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userPointEpoch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userPointHistory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userPointHistoryTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFor", data: BytesLike): Result;
    events: {
        "Deposit(address,address,uint256,uint256,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Supply(uint256,uint256)": EventFragment;
        "Withdraw(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Supply"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}
export type DepositEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber
], {
    provider: string;
    token: string;
    value: BigNumber;
    locktime: BigNumber;
    ts: BigNumber;
}>;
export type DepositEventFilter = TypedEventFilter<DepositEvent>;
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export type SupplyEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    prevSupply: BigNumber;
    supply: BigNumber;
}>;
export type SupplyEventFilter = TypedEventFilter<SupplyEvent>;
export type WithdrawEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], {
    provider: string;
    value: BigNumber;
    ts: BigNumber;
}>;
export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;
export interface VotingEscrow extends BaseContract {
    contractName: "VotingEscrow";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VotingEscrowInterface;
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
        _balanceOf(addr: string, _t: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        averageUnlockTime(overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOf(addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfAt(addr: string, _block: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        checkpoint(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        decimals(overrides?: CallOverrides): Promise<[BigNumber]>;
        deposit(_token: string, _value: BigNumberish, _unlockTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositFor(_fundingAddr: string, _addr: string, _token: string, _value: BigNumberish, _unlockTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        depositedBalances(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            bcbAmount: BigNumber;
            bitoroAmount: BigNumber;
        }>;
        epoch(overrides?: CallOverrides): Promise<[BigNumber]>;
        findTimestampEpoch(_timestamp: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        findTimestampUserEpoch(_addr: string, _timestamp: BigNumberish, max_user_epoch: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        find_block_epoch(_block: BigNumberish, maxEpoch: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getLastUserBlock(addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getLastUserSlope(addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseUnlockTime(_unlockTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        increaseUnlockTimeFor(_addr: string, _unlockTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_bcbToken: string, _bitoroToken: string, _name: string, _symbol: string, _version: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isHandler(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        locked(arg0: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            amount: BigNumber;
            end: BigNumber;
        }>;
        lockedAmount(_addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        lockedEnd(_addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        bcbToken(overrides?: CallOverrides): Promise<[string]>;
        bitoroToken(overrides?: CallOverrides): Promise<[string]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pointHistory(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setHandler(_handler: string, _isActive: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        slopeChanges(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        supply(overrides?: CallOverrides): Promise<[BigNumber]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupplyAt(_block: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        userPointEpoch(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        userPointHistory(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        userPointHistoryTime(_addr: string, _idx: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        version(overrides?: CallOverrides): Promise<[string]>;
        withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawFor(_addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    _balanceOf(addr: string, _t: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    averageUnlockTime(overrides?: CallOverrides): Promise<BigNumber>;
    balanceOf(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfAt(addr: string, _block: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    checkpoint(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    decimals(overrides?: CallOverrides): Promise<BigNumber>;
    deposit(_token: string, _value: BigNumberish, _unlockTime: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositFor(_fundingAddr: string, _addr: string, _token: string, _value: BigNumberish, _unlockTime: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    depositedBalances(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        bcbAmount: BigNumber;
        bitoroAmount: BigNumber;
    }>;
    epoch(overrides?: CallOverrides): Promise<BigNumber>;
    findTimestampEpoch(_timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    findTimestampUserEpoch(_addr: string, _timestamp: BigNumberish, max_user_epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    find_block_epoch(_block: BigNumberish, maxEpoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getLastUserBlock(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
    getLastUserSlope(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
    increaseUnlockTime(_unlockTime: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    increaseUnlockTimeFor(_addr: string, _unlockTime: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_bcbToken: string, _bitoroToken: string, _name: string, _symbol: string, _version: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isHandler(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    locked(arg0: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
        amount: BigNumber;
        end: BigNumber;
    }>;
    lockedAmount(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;
    lockedEnd(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;
    bcbToken(overrides?: CallOverrides): Promise<string>;
    bitoroToken(overrides?: CallOverrides): Promise<string>;
    name(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    pointHistory(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
    }>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setHandler(_handler: string, _isActive: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    slopeChanges(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    supply(overrides?: CallOverrides): Promise<BigNumber>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupplyAt(_block: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    userPointEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    userPointHistory(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        bias: BigNumber;
        slope: BigNumber;
        ts: BigNumber;
        blk: BigNumber;
    }>;
    userPointHistoryTime(_addr: string, _idx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    version(overrides?: CallOverrides): Promise<string>;
    withdraw(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawFor(_addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _balanceOf(addr: string, _t: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        averageUnlockTime(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAt(addr: string, _block: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkpoint(overrides?: CallOverrides): Promise<void>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_token: string, _value: BigNumberish, _unlockTime: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositFor(_fundingAddr: string, _addr: string, _token: string, _value: BigNumberish, _unlockTime: BigNumberish, overrides?: CallOverrides): Promise<void>;
        depositedBalances(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            bcbAmount: BigNumber;
            bitoroAmount: BigNumber;
        }>;
        epoch(overrides?: CallOverrides): Promise<BigNumber>;
        findTimestampEpoch(_timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        findTimestampUserEpoch(_addr: string, _timestamp: BigNumberish, max_user_epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        find_block_epoch(_block: BigNumberish, maxEpoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLastUserBlock(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLastUserSlope(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        increaseUnlockTime(_unlockTime: BigNumberish, overrides?: CallOverrides): Promise<void>;
        increaseUnlockTimeFor(_addr: string, _unlockTime: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initialize(_bcbToken: string, _bitoroToken: string, _name: string, _symbol: string, _version: string, overrides?: CallOverrides): Promise<void>;
        isHandler(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        locked(arg0: string, overrides?: CallOverrides): Promise<[BigNumber, BigNumber] & {
            amount: BigNumber;
            end: BigNumber;
        }>;
        lockedAmount(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        lockedEnd(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        bcbToken(overrides?: CallOverrides): Promise<string>;
        bitoroToken(overrides?: CallOverrides): Promise<string>;
        name(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        pointHistory(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setHandler(_handler: string, _isActive: boolean, overrides?: CallOverrides): Promise<void>;
        slopeChanges(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supply(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAt(_block: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        userPointEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        userPointHistory(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            bias: BigNumber;
            slope: BigNumber;
            ts: BigNumber;
            blk: BigNumber;
        }>;
        userPointHistoryTime(_addr: string, _idx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<string>;
        withdraw(overrides?: CallOverrides): Promise<void>;
        withdrawFor(_addr: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Deposit(address,address,uint256,uint256,uint256)"(provider?: string | null, token?: string | null, value?: null, locktime?: BigNumberish | null, ts?: null): DepositEventFilter;
        Deposit(provider?: string | null, token?: string | null, value?: null, locktime?: BigNumberish | null, ts?: null): DepositEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Supply(uint256,uint256)"(prevSupply?: null, supply?: null): SupplyEventFilter;
        Supply(prevSupply?: null, supply?: null): SupplyEventFilter;
        "Withdraw(address,uint256,uint256)"(provider?: string | null, value?: null, ts?: null): WithdrawEventFilter;
        Withdraw(provider?: string | null, value?: null, ts?: null): WithdrawEventFilter;
    };
    estimateGas: {
        _balanceOf(addr: string, _t: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        averageUnlockTime(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfAt(addr: string, _block: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        checkpoint(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        deposit(_token: string, _value: BigNumberish, _unlockTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositFor(_fundingAddr: string, _addr: string, _token: string, _value: BigNumberish, _unlockTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        depositedBalances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        epoch(overrides?: CallOverrides): Promise<BigNumber>;
        findTimestampEpoch(_timestamp: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        findTimestampUserEpoch(_addr: string, _timestamp: BigNumberish, max_user_epoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        find_block_epoch(_block: BigNumberish, maxEpoch: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getLastUserBlock(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        getLastUserSlope(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        increaseUnlockTime(_unlockTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        increaseUnlockTimeFor(_addr: string, _unlockTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_bcbToken: string, _bitoroToken: string, _name: string, _symbol: string, _version: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isHandler(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        locked(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        lockedAmount(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        lockedEnd(_addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        bcbToken(overrides?: CallOverrides): Promise<BigNumber>;
        bitoroToken(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pointHistory(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setHandler(_handler: string, _isActive: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        slopeChanges(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        supply(overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupplyAt(_block: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        userPointEpoch(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        userPointHistory(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        userPointHistoryTime(_addr: string, _idx: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        version(overrides?: CallOverrides): Promise<BigNumber>;
        withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawFor(_addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _balanceOf(addr: string, _t: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        averageUnlockTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfAt(addr: string, _block: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checkpoint(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deposit(_token: string, _value: BigNumberish, _unlockTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositFor(_fundingAddr: string, _addr: string, _token: string, _value: BigNumberish, _unlockTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        depositedBalances(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        epoch(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        findTimestampEpoch(_timestamp: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        findTimestampUserEpoch(_addr: string, _timestamp: BigNumberish, max_user_epoch: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        find_block_epoch(_block: BigNumberish, maxEpoch: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastUserBlock(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getLastUserSlope(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseUnlockTime(_unlockTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        increaseUnlockTimeFor(_addr: string, _unlockTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_bcbToken: string, _bitoroToken: string, _name: string, _symbol: string, _version: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isHandler(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        locked(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockedAmount(_addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lockedEnd(_addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bcbToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        bitoroToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pointHistory(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setHandler(_handler: string, _isActive: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        slopeChanges(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupplyAt(_block: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        userPointEpoch(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userPointHistory(arg0: string, arg1: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        userPointHistoryTime(_addr: string, _idx: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdraw(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawFor(_addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
