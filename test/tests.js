const { expect } = require('chai')
const NotASecurity = artifacts.require("NotASecurity");

contract('NotASecurity', (accounts) => {
  let Contract;
  const [alice, bob, charlie, diane, eve] = accounts

  beforeEach(async () => Contract = await NotASecurity.new())

  it('should initialize correctly', async () => {
    const decimals = await Contract.decimals()
    const symbol = await Contract.symbol()
    const name = await Contract.name()
    const totalSupply = (await Contract.totalSupply()).toNumber()
    const balance = (await Contract.balanceOf(alice)).toNumber()

    expect(decimals.toNumber()).to.equal(18)
    expect(symbol).to.equal('NOS')
    expect(name).to.equal('NotASecurity')
    expect(totalSupply).to.equal(balance)
    expect(totalSupply > 0).to.equal(true)
  })

  it('should allow investors to buy buy NOS', async () => {
    const aliceBalance0 = (await Contract.balanceOf(alice)).toNumber()
    const amountToBuy = 50
    await Contract.buy({ from: alice, value: amountToBuy })
    await Contract.sendTransaction({ from: bob, value: amountToBuy })

    const totalSupply = (await Contract.totalSupply()).toNumber()
    const aliceBalance = (await Contract.balanceOf(alice)).toNumber()
    const bobBalance = (await Contract.balanceOf(bob)).toNumber()

    expect(totalSupply).to.equal(aliceBalance0 + amountToBuy + amountToBuy)
    expect(aliceBalance - aliceBalance0).to.equal(amountToBuy)
    expect(bobBalance).to.equal(amountToBuy)
  });

  it('should allow investors to transfer NOS', async () => {
    const aliceBalance0 = (await Contract.balanceOf(alice)).toNumber()
    const amountToBuy = 50
    await Contract.buy({ from: alice, value: amountToBuy })
    const transfer = await Contract.transfer(bob, amountToBuy, { from: alice })

    const totalSupply = (await Contract.totalSupply()).toNumber()
    const aliceBalance = (await Contract.balanceOf(alice)).toNumber()
    const bobBalance = (await Contract.balanceOf(bob)).toNumber()

    expect(totalSupply).to.equal(aliceBalance0 + amountToBuy)
    expect(aliceBalance).to.equal(aliceBalance0)
    expect(bobBalance).to.equal(amountToBuy)

    expect(transfer.logs[0].event).to.equal('Transfer')

  })

  it('should handle allowances properly', async () => {
    const aliceBalance0 = (await Contract.balanceOf(alice)).toNumber()
    const totalSupply0 = (await Contract.totalSupply()).toNumber()

    // Approval
    const approval = await Contract.approve(bob, aliceBalance0)
    const allowance1 = (await Contract.allowance(alice, bob)).toNumber()
    const totalSupply1 = (await Contract.totalSupply()).toNumber()

    expect(allowance1).to.equal(aliceBalance0)
    expect(totalSupply1).to.equal(totalSupply0)

    // Transfer
    const transfer = await Contract.transferFrom(alice, charlie, allowance1, { from: bob })
    const allowance2 = (await Contract.allowance(alice, bob)).toNumber()
    const totalSupply2 = (await Contract.totalSupply()).toNumber()
    const aliceBalance2 = (await Contract.balanceOf(alice)).toNumber()
    const charlieBalance2 = (await Contract.balanceOf(charlie)).toNumber()

    expect(charlieBalance2).to.equal(aliceBalance0)
    expect(aliceBalance2).to.equal(0)
    expect(allowance2).to.equal(0)
    expect(totalSupply2).to.equal(totalSupply0)

    expect(transfer.logs[0].event).to.equal('Transfer')
    expect(approval.logs[0].event).to.equal('Approval')
  })
})
