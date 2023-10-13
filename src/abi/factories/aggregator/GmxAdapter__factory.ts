/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  GmxAdapter,
  GmxAdapterInterface,
} from "../../aggregator/GmxAdapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "enum LibGmx.OrderCategory",
        name: "category",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum LibGmx.OrderReceiver",
        name: "receiver",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "borrow",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "AddPendingOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "boostFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cumulativeDebt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cumulativeFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debtEntryFunding",
        type: "uint256",
      },
    ],
    name: "BorrowAsset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "CancelOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "indexToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "collateralUsd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sizeUsd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceUsd",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isMarket",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "gmxOrderIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "executionFee",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct ClosePositionContext",
        name: "context",
        type: "tuple",
      },
    ],
    name: "ClosePosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "indexToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidationPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "estimateliquidationFee",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "sizeUsd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "collateralUsd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "averagePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "entryFundingRate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveAmount",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "realisedPnlUsd",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "lastIncreasedTime",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IGmxVault.Position",
        name: "position",
        type: "tuple",
      },
    ],
    name: "LiquidatePosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "indexToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amountIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sizeUsd",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "priceUsd",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isMarket",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "borrow",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountOut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gmxOrderIndex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "executionFee",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct OpenPositionContext",
        name: "context",
        type: "tuple",
      },
    ],
    name: "OpenPosition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "RemovePendingOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paidDebt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paidFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "boostFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "badDebt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cumulativeDebt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cumulativeFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debtEntryFunding",
        type: "uint256",
      },
    ],
    name: "RepayAsset",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "SetBoostRate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousLiquidityPool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newLiquidityPool",
        type: "address",
      },
    ],
    name: "SetLiquidityPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "cumulativeDebt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cumulativeFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isLiquidation",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "userWithdrawal",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paidDebt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "paidFee",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "keys",
        type: "bytes32[]",
      },
    ],
    name: "cancelOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "keys",
        type: "bytes32[]",
      },
    ],
    name: "cancelTimeoutOrders",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "collateralUsd",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sizeUsd",
        type: "uint256",
      },
      {
        internalType: "uint96",
        name: "priceUsd",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "tpPriceUsd",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "slPriceUsd",
        type: "uint96",
      },
      {
        internalType: "uint8",
        name: "flags",
        type: "uint8",
      },
    ],
    name: "closePosition",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "debtStates",
    outputs: [
      {
        internalType: "uint256",
        name: "cumulativeDebt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "cumulativeFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "debtEntryFunding",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPendingGmxOrderKeys",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderKey",
        type: "bytes32",
      },
    ],
    name: "getTpslOrderKeys",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "projectId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "liquidityPool",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isLong",
        type: "bool",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "liquidatePrice",
        type: "uint256",
      },
    ],
    name: "liquidatePosition",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "bitoroAccountState",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "cumulativeDebt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cumulativeFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "debtEntryFunding",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "collateralToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "indexToken",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "deprecated0",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isLong",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "collateralDecimals",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "liquidationFee",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isLiquidating",
            type: "bool",
          },
          {
            internalType: "bytes32[18]",
            name: "reserved",
            type: "bytes32[18]",
          },
        ],
        internalType: "struct AccountState",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "swapInToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "swapInAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minSwapOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "borrow",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sizeUsd",
        type: "uint256",
      },
      {
        internalType: "uint96",
        name: "priceUsd",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "tpPriceUsd",
        type: "uint96",
      },
      {
        internalType: "uint96",
        name: "slPriceUsd",
        type: "uint96",
      },
      {
        internalType: "uint8",
        name: "flags",
        type: "uint8",
      },
    ],
    name: "openPosition",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderKey",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "collateralDelta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sizeDelta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "triggerPrice",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "triggerAboveThreshold",
        type: "bool",
      },
    ],
    name: "updateOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

export class GmxAdapter__factory {
  static readonly abi = _abi;
  static createInterface(): GmxAdapterInterface {
    return new utils.Interface(_abi) as GmxAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GmxAdapter {
    return new Contract(address, _abi, signerOrProvider) as GmxAdapter;
  }
}
