/* eslint-disable prefer-const */
import { BigDecimal } from '@graphprotocol/graph-ts'

// Addresses for analytics subgraph
export const FACTORY_ADDRESS = '0xd13da0E99aCA00164e6883f3798cF96cA0FFD097'
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0x4dA91886FA03a2b020A71c8EF23934283CB7A937'

export const REFERENCE_TOKEN = '0x10d26F0491fA11c5853ED7C1f9817b098317DC46' // Wrapped Native Token
export const STABLE_TOKEN_POOL = '0xcE2759A8341c3c8d8B9834CFC65e60169Cd9A6Bb' // USDC/WETH pool

// Minimum reference token locked in pool for pricing calculations
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('0')

// Token lists for tracking volume and liquidity
export const WHITELIST_TOKENS: string[] = [
  '0x10d26F0491fA11c5853ED7C1f9817b098317DC46',
  '0x49b163c575948F0b95e0c459C301995147f27866',
  '0x21E56013a76a7F1F86cF7ee95c0a5670C7b7e44D',
  '0x4B545d0758eda6601B051259bD977125fbdA7ba2',
]

// Stable coins for USD pricing (tokens with stable $1 value)
export const STABLE_COINS: string[] = [
  '0x49b163c575948F0b95e0c459C301995147f27866',
  '0x21E56013a76a7F1F86cF7ee95c0a5670C7b7e44D',
  '0x4B545d0758eda6601B051259bD977125fbdA7ba2',
]

// Addresses for farming subgraph
// Farming contracts
export const ETERNAL_FARMING_ADDRESS = '0x714D34d49F155Ac332e00cD70070366a7B7CFBeC'

// Addresses for limit order subgraph
// Limit order contract
export const LIMIT_ORDER_ADDRESS = '0x05F9E353559da6f2Bfe9A0980D5C3e84eA5d4238'
