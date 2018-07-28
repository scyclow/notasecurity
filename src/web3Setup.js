import NotASecurityArtifact from 'contracts/NotASecurity.json'
import Web3 from 'web3';
import contract from 'truffle-contract';

const NotASecurity = contract(NotASecurityArtifact);
export const CONTRACT_ADDRESS = '0x3a49bf3a4e4b8eb1231327839ba504b94e3e4cef'

if (window.web3) {
  try {
    window.web3 = new Web3(window.web3.currentProvider)
    NotASecurity.setProvider(window.web3.currentProvider);
  } catch(e) {}
}

export async function simpleBuy(amount) {
  const instance = NotASecurity.at(CONTRACT_ADDRESS);
  window.__i = instance;
  const to = CONTRACT_ADDRESS;
  const _from = await web3.eth.getCoinbase();

  return instance.buy({
    amount,
    to,
    from: _from
  })
}

export function buyOnMEW(amount) {
  window.open(
    `https://www.myetherwallet.com/?to=${CONTRACT_ADDRESS}&value=${amount}`,
    '_blank'
  )
}

