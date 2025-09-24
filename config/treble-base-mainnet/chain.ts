/* eslint-disable prefer-const */
import { BigDecimal} from '@graphprotocol/graph-ts'

// Addresses for analytics subgraph 
export const FACTORY_ADDRESS = '0xac900f12fb25d514e3ccfe8572b153a9991ca4e7'
export const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = '0x457225b7a8310c2e0300686916c74b158183976e'

export const REFERENCE_TOKEN = '0x4200000000000000000000000000000000000006' // Wrapped Native Token
export const STABLE_TOKEN_POOL = '0x82e4c6da2d953f074329481ca3c770ba74a8961a' // USDC/WETH pool

// Minimum reference token locked in pool for pricing calculations
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('0.05')

// Token lists for tracking volume and liquidity
export const WHITELIST_TOKENS: string[] = [
  '0x4200000000000000000000000000000000000006', // WETH
  '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913', // USDC
  '0xb96450dcb16e4a30b999cb5f4087bae9c0ffac4e', // TREB
  '0x0b3e328455c4059eeb9e3f84b5543f74e24e7e1b' // VIRTUAL
]

// Stable coins for USD pricing (tokens with stable $1 value)
export const STABLE_COINS: string[] = [
  '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913', // USDC
]

// Addresses for farming subgraph
// Farming contracts
export const ETERNAL_FARMING_ADDRESS = '0x06d634c0edfc6787ec71acb99191225d5b4fe7b4'  

// Addresses for limit order subgraph
// Limit order contract
export const LIMIT_ORDER_ADDRESS = '0xf05bd4f8d61a3c0ba2b1ee6ed47f2d9b0e4edee1'
