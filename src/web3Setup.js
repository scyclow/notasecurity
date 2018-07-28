import Web3 from 'web3';

export const CONTRACT_ADDRESS = '0x3a49bf3a4e4b8eb1231327839ba504b94e3e4cef'


export default async function web3Setup() {
  window.web3 = new Web3(window.web3.currentProvider)
}

export async function simpleBuy(amount) {
  console.log(amount)
  const to = CONTRACT_ADDRESS;
  const _from = await web3.eth.getCoinbase();

  return web3.eth.sendTransaction({
    amount,
    to,
    from: _from
  })
}
