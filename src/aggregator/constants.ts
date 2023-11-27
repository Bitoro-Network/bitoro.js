import BigNumber from 'bignumber.js'
import { GmxTokenConfig, AggregatorProjectId, AggregatorSubAccount } from './types'
import { _0 } from '../constants'

export const CHAIN_ID_TO_AGGREGATOR_READER_ADDRESS: { [chainID: number]: string } = {
  // arb1
  42161: '0xC788d41b133Ae70f20518B5215B84f6126B5DbD5'
}

export const CHAIN_ID_TO_AGGREGATOR_FACTORY_ADDRESS: { [chainID: number]: string } = {
  // arb1
  42161: '0x5C98E98D149e5b813D16FE89E6373bFD4503445f'
}

export const CHAIN_ID_TO_AGGREGATOR_VAULT_ADDRESS: { [chainID: number]: string } = {
  // arb1
  42161: '0x489ee077994B6658eAfA855C308275EAd8097C4A'
}

export const CHAIN_ID_TO_AGGREGATOR_POSITION_MANAGER_ADDRESS: { [chainID: number]: string } = {
  // arb1
  42161: '0x75E42e6f01baf1D6022bEa862A28774a9f8a4A0C'
}

export const CHAIN_ID_TO_AGGREGATOR_POSITION_ROUTER_ADDRESS: { [chainID: number]: string } = {
  // arb1
  42161: '0xb87a436B93fFE9D75c5cFA7bAcFff96430b09868'
}

export const CHAIN_ID_TO_AGGREGATOR_ORDER_BOOK_ADDRESS: { [chainID: number]: string } = {
  // arb1
  42161: '0x09f77E8A13De9a35a7231028187e9fD5DB8a2ACB'
}

export const CHAIN_ID_TO_AGGREGATOR_ROUTER_ADDRESS: { [chainID: number]: string } = {
  // arb1
  42161: '0xaBBc5F99639c9B6bCb58544ddf04EFA6802F4064'
}

export const CHAIN_ID_TO_AGGREGATOR_SHORT_FUNDING_ASSET_ID: { [chainID: number]: number } = {
  42161: 3
}

export const GMX_BASIS_POINTS_DECIMALS = 4
export const GMX_FUNDING_RATE_DECIMALS = 6
export const GMX_PRICE_DECIMALS = 30
export const GMX_MAX_LEVERAGE = 100
export const GMX_CORE_INITIAL_LEVERAGE = new BigNumber('30')
export const GMX_AGGREGATOR_BORROW_RATE = new BigNumber('0.005')

// should be gmx Timelock.marginFeeBasisPoints (instead of Vault.marginFeeBasisPoints). we
// override it just like their UI
export const GMX_POSITION_FEE_RATE = new BigNumber('0.0010')

export const GMX_TOKENS: { [chainID: number]: GmxTokenConfig[] } = {
  // arb1
  42161: [
    {
      symbol: 'ETH',
      decimals: 18,
      address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      isAsset: true,
      isShortable: true,
      isStable: false,
      isNative: true,
      bitoroAssetId: 3
    },
    {
      symbol: 'BTC',
      decimals: 8,
      address: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f',
      isAsset: true,
      isShortable: true,
      isStable: false,
      isNative: false,
      bitoroAssetId: 4
    },
    {
      symbol: 'USDC.e',
      decimals: 6,
      address: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
      isAsset: false,
      isShortable: false,
      isStable: true,
      isNative: false,
      bitoroAssetId: 0
    },
    {
      symbol: 'USDC',
      decimals: 6,
      address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
      isAsset: false,
      isShortable: false,
      isStable: true,
      isNative: false,
      bitoroAssetId: 11
    },
    {
      symbol: 'USDT',
      decimals: 6,
      address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9',
      isAsset: false,
      isShortable: false,
      isStable: true,
      isNative: false,
      bitoroAssetId: 1
    },
    {
      symbol: 'DAI',
      decimals: 18,
      address: '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1',
      isAsset: false,
      isShortable: false,
      isStable: true,
      isNative: false,
      bitoroAssetId: 2
    },
    {
      symbol: 'LINK',
      decimals: 18,
      address: '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4',
      isAsset: true,
      isStable: false,
      isShortable: true,
      isNative: false,
      bitoroAssetId: undefined
    },
    {
      symbol: 'UNI',
      decimals: 18,
      address: '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0',
      isAsset: true,
      isStable: false,
      isShortable: true,
      isNative: false,
      bitoroAssetId: undefined
    }
  ]
}

export const MOCK_SUB_ACCOUNT: AggregatorSubAccount = {
  proxyAddress: '',
  projectId: AggregatorProjectId.Gmx,
  account: '',
  collateralTokenAddress: '',
  assetTokenAddress: '',
  isLong: true,
  isLiquidating: false,
  cumulativeDebt: _0,
  cumulativeFee: _0,
  debtEntryFunding: _0,
  proxyCollateralBalance: _0,
  proxyEthBalance: _0,
  priceImpactFee: _0,
  gmx: {
    collateralTokenAddress: '',
    assetTokenAddress: '',
    isLong: true,
    sizeUsd: _0,
    collateralUsd: _0,
    lastIncreasedTime: 0,
    entryPrice: _0,
    entryFundingRate: _0
  },
  gmxOrders: []
}

// reference oracle contract addresses
export const CHAIN_ID_TO_ETH_ORACLE_ADDRESS: { [chainID: number]: string } = {
  // arb1
  42161: '0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612',
  // bnb
  56: '0x9ef1B8c0E4F7dc8bF5719Ea496883DC6401d5b2e',
  // optimism
  10: '0x13e3Ee699D1909E989722E753853AE30b17e08c5',
  // avalanche
  43114: '0x976B3D034E162d8bD72D6b9C989d545b839003b0',
  // fantom
  250: '0x11DdD3d147E5b83D01cee7070027092397d63658'
}

export const CHAIN_ID_TO_BTC_ORACLE_ADDRESS: { [chainID: number]: string } = {
  // arb1
  42161: '0x6ce185860a4963106506C203335A2910413708e9',
  // bnb
  56: '0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf',
  // optimism
  10: '0xD702DD976Fb76Fffc2D3963D037dfDae5b04E593',
  // avalanche
  43114: '0x2779D32d5166BAaa2B2b658333bA7e6Ec0C65743',
  // fantom
  250: '0x8e94C22142F4A64b99022ccDd994f4e9EC86E4B4'
}

export const CHAIN_ID_TO_USDC_ORACLE_ADDRESS: { [chainID: number]: string } = {
  // arb1
  42161: '0x50834F3163758fcC1Df9973b6e91f0F0F0434aD3',
  // bnb
  56: '0x51597f405303C4377E36123cBc172b13269EA163',
  // optimism
  10: '0x16a9FA2FDa030272Ce99B29CF780dFA30361E0f3',
  // avalanche
  43114: '0xF096872672F44d6EBA71458D74fe67F9a77a23B9',
  // fantom
  250: '0x2553f4eeb82d5A26427b8d1106C51499CBa5D99c'
}

export const CHAIN_ID_TO_LINK_ORACLE_ADDRESS: { [chainID: number]: string } = {
  // arb1
  42161: '0x86E53CF1B870786351Da77A57575e79CB55812CB',
  // bnb
  56: '0xca236E327F629f9Fc2c30A4E95775EbF0B89fac8',
  // optimism
  10: '0xCc232dcFAAE6354cE191Bd574108c1aD03f86450',
  // avalanche
  43114: '0x49ccd9ca821EfEab2b98c60dC60F518E765EDe9a',
  // fantom
  250: '0x221C773d8647BC3034e91a0c47062e26D20d97B4'
}

export const CHAIN_ID_TO_UNI_ORACLE_ADDRESS: { [chainID: number]: string } = {
  // arb1
  42161: '0x9C917083fDb403ab5ADbEC26Ee294f6EcAda2720',
  // bnb
  56: '0xb57f259E7C24e56a1dA00F66b55A5640d9f9E7e4',
  // optimism
  10: '0x11429eE838cC01071402f21C219870cbAc0a59A0',
  // avalanche
  43114: '0x9a1372f9b1B71B3A5a72E092AE67E172dBd7Daaa',
  // fantom
  250: ''
}
