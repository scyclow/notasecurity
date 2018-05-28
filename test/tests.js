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
    const totalSupply = (await Contract.totalSupply())
    const balance = (await Contract.balanceOf(alice))

    expect(decimals.toNumber()).to.equal(18)
    expect(symbol).to.equal('NOS')
    expect(name).to.equal('NotASecurity')
    assert(totalSupply.equals(balance))
    expect(totalSupply > 0).to.equal(true)
  })

  it('should allow investors to buy NOS', async () => {
    const aliceBalance0 = (await Contract.balanceOf(alice))
    const amountToBuy = 50
    await Contract.buy({ from: alice, value: amountToBuy })
    await Contract.sendTransaction({ from: bob, value: amountToBuy })

    const totalSupply = (await Contract.totalSupply())
    const aliceBalance = (await Contract.balanceOf(alice))
    const bobBalance = (await Contract.balanceOf(bob))

    const expectedSupply = aliceBalance0.plus(amountToBuy).plus(amountToBuy)
    const expectedBalance = aliceBalance0.plus(amountToBuy)

    assert(totalSupply.equals(expectedSupply))
    assert(aliceBalance.equals(expectedBalance))
    assert(bobBalance.equals(amountToBuy))
  });

  it('should allow investors to transfer NOS', async () => {
    const aliceBalance0 = (await Contract.balanceOf(alice))
    const amountToBuy = 50
    await Contract.buy({ from: alice, value: amountToBuy })
    const transfer = await Contract.transfer(bob, amountToBuy, { from: alice })

    const totalSupply = (await Contract.totalSupply())
    const aliceBalance = (await Contract.balanceOf(alice))
    const bobBalance = (await Contract.balanceOf(bob))

    assert(totalSupply.equals(aliceBalance0.plus(amountToBuy)))
    assert(aliceBalance.equals(aliceBalance0))
    assert(bobBalance.equals(amountToBuy))

    expect(transfer.logs[0].event).to.equal('Transfer')
  })

  it('should handle allowances properly', async () => {
    const aliceBalance0 = await Contract.balanceOf(alice)
    const totalSupply0 = await Contract.totalSupply()

    // Approval
    const approval = await Contract.approve(bob, aliceBalance0)
    const allowance1 = await Contract.allowance(alice, bob)
    const totalSupply1 = await Contract.totalSupply()

    assert(allowance1.equals(aliceBalance0))
    assert(totalSupply1.equals(totalSupply0))

    // Transfer
    const failedTransfer = await Contract.transferFrom(alice, charlie, allowance1, { from: diane })
      .catch(() => false)
    expect(failedTransfer).to.equal(false)

    const transfer = await Contract.transferFrom(alice, charlie, allowance1, { from: bob })
    const allowance2 = await Contract.allowance(alice, bob)
    const totalSupply2 = await Contract.totalSupply()
    const aliceBalance2 = await Contract.balanceOf(alice)
    const charlieBalance2 = await Contract.balanceOf(charlie)

    assert(charlieBalance2.equals(aliceBalance0))
    assert(aliceBalance2.equals(0))
    assert(allowance2.equals(0))
    assert(totalSupply2.equals(totalSupply0))

    const failedTransfer2 = await Contract.transferFrom(alice, charlie, allowance1, { from: bob })
      .catch(() => false)
    expect(failedTransfer2).to.equal(false)

    expect(transfer.logs[0].event).to.equal('Transfer')
    expect(approval.logs[0].event).to.equal('Approval')
  })

  it.only('should redistribute incoming ethereum according to tokenholder ratios', async () => {
    const aliceEthBalance0 = web3.eth.getBalance(alice)
    const bobEthBalance0 = web3.eth.getBalance(bob)
    const amountToBuy = (await Contract.balanceOf(alice)).times(2)

    const receipt = await Contract.buy({ from: bob, value: amountToBuy })
    const gasUsed = receipt.receipt.gasUsed;
    const tx = await web3.eth.getTransaction(receipt.tx);
    const {gasPrice} = tx;

    const gasCost = gasPrice * gasUsed
    const aliceEthBalance1 = web3.eth.getBalance(alice)
    const bobEthBalance1 = web3.eth.getBalance(bob)
    const charlieEthBalance1 = web3.eth.getBalance(charlie)

    assert(aliceEthBalance1.equals(aliceEthBalance0.plus(amountToBuy)), '1')
    assert(bobEthBalance1.equals(bobEthBalance0.minus(amountToBuy).minus(gasCost)), `${bobEthBalance1}, ${bobEthBalance0}, ${amountToBuy}`)

    await Contract.buy({ from: charlie, value: 3 })

    const aliceEthBalance2 = web3.eth.getBalance(alice)
    const bobEthBalance2 = web3.eth.getBalance(bob)
    const charlieEthBalance2 = web3.eth.getBalance(charlie)

    assert(aliceEthBalance2.equals(aliceEthBalance1.plus(1)), `${aliceEthBalance2.toNumber()}, ${aliceEthBalance1.plus(1).toNumber()}`)
    for(let i = 1; i < 11; i++) {
      console.log(await Contract.benefactors(i))
    }
    assert(bobEthBalance2.equals(bobEthBalance1.plus(2)), `${bobEthBalance2}, ${bobEthBalance1}`)
    assert(charlieEthBalance2.equals(charlieEthBalance1.minus(3).minus(gasCost)), '5')
  })
})
