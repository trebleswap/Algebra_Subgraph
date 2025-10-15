import {
  Address,
  BigInt,
} from "@graphprotocol/graph-ts"

  
// Initialize a Token Definition with the attributes
export class StaticTokenDefinition {
  address : Address
  symbol: string
  name: string
  decimals: BigInt

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address
    this.symbol = symbol
    this.name = name
    this.decimals = decimals
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<StaticTokenDefinition> {
    const staticDefinitions: Array<StaticTokenDefinition> = [
      new StaticTokenDefinition(
        Address.fromString("0x9f3f1fa0822463f592c1725ED08a9cF261958627"),
        "WTARA",
        "Wrapped Taraxa",
        BigInt.fromI32(18)
      ),
      new StaticTokenDefinition(
        Address.fromString("0x69D411CbF6dBaD54Bfe36f81d0a39922625bC78c"),
        "USDT",
        "Tether USD",
        BigInt.fromI32(6)
      ),
      new StaticTokenDefinition(
        Address.fromString("0xacB8b71500B616c20fE18c48fc965D0981538D54"),
        "GRUMPY",
        "GRUMPY ON TARA",
        BigInt.fromI32(18)
      ),
      new StaticTokenDefinition(
        Address.fromString("0x96B86CCe868FcC6681d8AB2c8E53C93E9750bA3A"),
        "PKEY",
        "PuzzleKey",
        BigInt.fromI32(18)
      ),
      new StaticTokenDefinition(
        Address.fromString("0x0920de6EFd143Df36fFc796CA1728cBf31e7352f"),
        "PINS",
        "Tarapin Turtles",
        BigInt.fromI32(18)
      ),
      new StaticTokenDefinition(
        Address.fromString("0xaad94Afea296DCF8c97D05dbf3733A245c3Ea78F"),
        "CHDPU",
        "ChadPu",
        BigInt.fromI32(18)
      ),
      new StaticTokenDefinition(
        Address.fromString("0xEDA40f838f514AAfCfA82911be5130bc9CaA09E8"),
        "SMASH",
        "Taraxa Hulk Smash",
        BigInt.fromI32(18)
      ),
      new StaticTokenDefinition(
        Address.fromString("0x1aecb537C5A4d59b2DE757F0b1C0DA86Eb573ff1"),
        "FREAKY",
        "FREAKY SONIC",
        BigInt.fromI32(18)
      ),
      new StaticTokenDefinition(
        Address.fromString("0x2F38caB64A252a87c68414BF24A1d01F977E6fbe"),
        "FARTAX",
        "FARTAXA",
        BigInt.fromI32(18)
      )
    ]
    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address) : StaticTokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if(staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }

}
