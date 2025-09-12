/* eslint-disable prefer-const */
import { BigDecimal} from '@graphprotocol/graph-ts'

// Addresses for analytics subgraph 
export const FACTORY_ADDRESS = '0x10253594A832f967994b44f33411940533302ACb'
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0x69D57B9D705eaD73a5d2f2476C30c55bD755cc2F'

export const REFERENCE_TOKEN = '0xB63B9f0eb4A6E6f191529D71d4D88cc8900Df2C9' // Wrapped Native Token
export const STABLE_TOKEN_POOL = '0xDd571223F8605805154B3f0c154FC0E1DDAD5eb6' // USDC/WETH pool

// Minimum reference token locked in pool for pricing calculations
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('40000')

// Token lists for tracking volume and liquidity
export const WHITELIST_TOKENS: string[] = [
  '0xB63B9f0eb4A6E6f191529D71d4D88cc8900Df2C9',
  '0xAF988C3f7CB2AceAbB15f96b19388a259b6C438f', 
  '0x61D66bC21fED820938021B06e9b2291f3FB91945',
  '0xAf368c91793CB22739386DFCbBb2F1A9e4bCBeBf',
  '0xb76d91340F5CE3577f0a056D29f6e3Eb4E88B140',
  '0xb1b385542B6E80F77B94393Ba8342c3Af699f15c',
  '0xaE4EFbc7736f963982aACb17EFA37fCBAb924cB3',
  '0xF9775085d726E782E83585033B58606f7731AB18',
  '0xecAc9C5F704e954931349Da37F60E39f515c11c1',
  '0x7048c9e4aBD0cf0219E95a17A8C6908dfC4f0Ee4'
]

// Stable coins for USD pricing (tokens with stable $1 value)
export const STABLE_COINS: string[] = [
  '0xAF988C3f7CB2AceAbB15f96b19388a259b6C438f'
]

// Addresses for farming subgraph
// Farming contracts
export const ETERNAL_FARMING_ADDRESS = '0x50FCbF85d23aF7C91f94842FeCd83d16665d27bA'  

// Addresses for limit order subgraph
// Limit order contract
export const LIMIT_ORDER_ADDRESS = '0x05F9E353559da6f2Bfe9A0980D5C3e84eA5d4238'
