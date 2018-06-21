## Contract development
`npm i -g truffle`
`truffle init` (or unbox)
  contracts, migrations, test, truffle.js, truffle-config

add `2_deploy_contracts.js` to migrations:
```
'use strict';

const NotASecurity = artifacts.require('NotASecurity');

module.exports = (deployer) => {
  deployer.deploy(NotASecurity, { gas: 4700000 });
}
```


`truffle compile` -> build/contracts
  sometimes you might need to rm -rf `build`
web3
`truffle develop`
  -> doesn't give you much, but simplest way to interact with your contract
  -> brings you into a js console with a web3 instance and 10 accounts; connects to test blockchain
  -> gives you a contract instance `NotASecurity`
  -> can also run truffle commands (ex. `migrate`)
  -> run `migrate`, then `NotASecurity.isDeployed()`
  -> `let inst; NotASecurity.deployed().then(i => inst = i)`
  -> `inst.symbol()`

`truffle test`

## Web Development
`npm i web3`
`npm i truffle-contract`

