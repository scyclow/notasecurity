const { expect } = require('chai')
const NotASecurity = artifacts.require("NotASecurity");

contract('NotASecurity', (accounts) => {
  let INSTANCE;
  before(async () => INSTANCE = await NotASecurity.deployed())

  it('should allow investors to buy buy NAS', async () => {
    await INSTANCE.buy({ from: accounts[0], value: 50 })
    await INSTANCE.sendTransaction({ from: accounts[1], value: 50 })
    const totalSupply = await INSTANCE.totalSupply()
    const accountBalance0 = await INSTANCE.balanceOf(accounts[0])
    const accountBalance1 = await INSTANCE.balanceOf(accounts[1])

    expect(totalSupply.toNumber()).to.equal(110)
    expect(accountBalance0.toNumber()).to.equal(60)
    expect(accountBalance1.toNumber()).to.equal(50)
  })
})
