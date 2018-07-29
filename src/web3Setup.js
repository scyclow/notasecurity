import Web3 from 'web3';

export const CONTRACT_ADDRESS = '0x3a49bf3a4e4b8eb1231327839ba504b94e3e4cef'



if (window.web3) {
  try {
    window.web3 = new Web3(window.web3.currentProvider)
  } catch(e) {}
}

export async function simpleBuy(amount) {
  const to = CONTRACT_ADDRESS;
  const _from = await web3.eth.getCoinbase();

  return web3.eth.sendTransaction({
    amount,
    to,
    from: _from
  })
}

export function buyOnMEW() {
  window.open(
    `https://www.myetherwallet.com/?to=0x3a49bf3a4e4b8eb1231327839ba504b94e3e4cef#send-transaction`,
    '_blank'
  )
}
