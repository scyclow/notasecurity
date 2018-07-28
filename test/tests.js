const { expect } = require('chai')
const NotASecurity = artifacts.require("NotASecurity");


contract('NotASecurity', (accounts) => {
  let Contract, kelly, lisa;

  const [alice, bob, charlie, diane, eve, fred, greg, harry, ian, julia] = accounts

  beforeEach(async () => {
    Contract = await NotASecurity.new(3000)

    kelly = web3.personal.newAccount('');
    lisa = web3.personal.newAccount('');
    web3.personal.unlockAccount(kelly, '');
    web3.personal.unlockAccount(lisa, '');
    web3.eth.sendTransaction({from: alice, to: kelly, value: web3.toWei(1, 'ether')});
    web3.eth.sendTransaction({from: alice, to: lisa, value: web3.toWei(1, 'ether')});
  })

  it('should initialize correctly', async () => {
    const decimals = await Contract.decimals()
    const symbol = await Contract.symbol()
    const name = await Contract.name()
    const totalSupply = (await Contract.totalSupply())
    const balance = (await Contract.balanceOf(alice))

    expect(decimals.toNumber()).to.equal(18)
    expect(symbol).to.equal('NOT')
    expect(name).to.equal('NotASecurity')
    assert(totalSupply.equals(balance))
    expect(totalSupply > 0).to.equal(true)
  })

  it('should allow investors to buy NOT', async () => {
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

  it('should allow investors to transfer NOT', async () => {
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

  async function getGasCost(receipt) {
    const {gasUsed} = receipt.receipt
    const tx = await web3.eth.getTransaction(receipt.tx)
    const {gasPrice} = tx
    return gasPrice * gasUsed
  }

  it('should redistribute incoming ethereum according to tokenholder ratios', async () => {
    const aliceEthBalance0 = web3.eth.getBalance(alice)
    const bobEthBalance0 = web3.eth.getBalance(bob)
    const amountToBuy = (await Contract.balanceOf(alice)).times(2)

    const receipt0 = await Contract.buy({ from: bob, value: amountToBuy })
    const gasCost0 = await getGasCost(receipt0)

    const aliceEthBalance1 = web3.eth.getBalance(alice)
    const bobEthBalance1 = web3.eth.getBalance(bob)
    const charlieEthBalance1 = web3.eth.getBalance(charlie)

    assert(bobEthBalance1.equals(bobEthBalance0.minus(amountToBuy).minus(gasCost0)), `${bobEthBalance1}, ${bobEthBalance0}, ${amountToBuy}`)
    assert(aliceEthBalance1.equals(aliceEthBalance0.plus(amountToBuy)))

    const receipt1 = await Contract.buy({ from: charlie, value: 3 })
    const gasCost1 = await getGasCost(receipt1)
    console.log(gasCost0, gasCost1)

    const aliceEthBalance2 = web3.eth.getBalance(alice)
    const bobEthBalance2 = web3.eth.getBalance(bob)
    const charlieEthBalance2 = web3.eth.getBalance(charlie)

    assert(aliceEthBalance2.equals(aliceEthBalance1.plus(1)), `${aliceEthBalance2.toNumber()}, ${aliceEthBalance1.plus(1).toNumber()}`)
    assert(bobEthBalance2.equals(bobEthBalance1.plus(2)), `${bobEthBalance2}, ${bobEthBalance1}`)
    assert(charlieEthBalance2.equals(charlieEthBalance1.minus(3).minus(gasCost1)), '5')
  })

  it('should only provide distributions to the top 10 token holders', async () => {
    await Contract.buy({ from: bob, value: 2000 })
    await Contract.buy({ from: charlie, value: 1500 })
    await Contract.buy({ from: diane, value: 1000 })
    await Contract.buy({ from: eve, value: 500 })
    await Contract.buy({ from: fred, value: 500 })
    await Contract.buy({ from: greg, value: 500 })
    await Contract.buy({ from: harry, value: 500 })
    await Contract.buy({ from: ian, value: 400 })
    await Contract.buy({ from: julia, value: 100 })

    const aliceEthBalance0 = web3.eth.getBalance(alice)
    const bobEthBalance0 = web3.eth.getBalance(bob)
    const charlieEthBalance0 = web3.eth.getBalance(charlie)
    const dianeEthBalance0 = web3.eth.getBalance(diane)
    const eveEthBalance0 = web3.eth.getBalance(eve)
    const fredEthBalance0 = web3.eth.getBalance(fred)
    const gregEthBalance0 = web3.eth.getBalance(greg)
    const harryEthBalance0 = web3.eth.getBalance(harry)
    const ianEthBalance0 = web3.eth.getBalance(ian)
    const juliaEthBalance0 = web3.eth.getBalance(julia)
    const kellyEthBalance0 = web3.eth.getBalance(kelly)

    const amountToBuy = 20000
    const kellyReceipt = await Contract.buy({ from: kelly, value: amountToBuy })
    const kellyGasCost = await getGasCost(kellyReceipt)
    console.log(kellyGasCost)
    const kellyEthBalance1 = web3.eth.getBalance(kelly)
    assert(kellyEthBalance0.minus(kellyGasCost).minus(amountToBuy).equals(kellyEthBalance1))

    const aliceEthBalance1 = web3.eth.getBalance(alice)
    const bobEthBalance1 = web3.eth.getBalance(bob)
    const charlieEthBalance1 = web3.eth.getBalance(charlie)
    const dianeEthBalance1 = web3.eth.getBalance(diane)
    const eveEthBalance1 = web3.eth.getBalance(eve)
    const fredEthBalance1 = web3.eth.getBalance(fred)
    const gregEthBalance1 = web3.eth.getBalance(greg)
    const harryEthBalance1 = web3.eth.getBalance(harry)
    const ianEthBalance1 = web3.eth.getBalance(ian)
    const juliaEthBalance1 = web3.eth.getBalance(julia)


    assert(aliceEthBalance1.minus(aliceEthBalance0).equals((await Contract.balanceOf(alice)).times(2)))
    assert(bobEthBalance1.minus(bobEthBalance0).equals((await Contract.balanceOf(bob)).times(2)))
    assert(charlieEthBalance1.minus(charlieEthBalance0).equals((await Contract.balanceOf(charlie)).times(2)))
    assert(dianeEthBalance1.minus(dianeEthBalance0).equals((await Contract.balanceOf(diane)).times(2)))
    assert(eveEthBalance1.minus(eveEthBalance0).equals((await Contract.balanceOf(eve)).times(2)))
    assert(fredEthBalance1.minus(fredEthBalance0).equals((await Contract.balanceOf(fred)).times(2)))
    assert(gregEthBalance1.minus(gregEthBalance0).equals((await Contract.balanceOf(greg)).times(2)))
    assert(harryEthBalance1.minus(harryEthBalance0).equals((await Contract.balanceOf(harry)).times(2)))
    assert(ianEthBalance1.minus(ianEthBalance0).equals((await Contract.balanceOf(ian)).times(2)))
    assert(juliaEthBalance1.minus(juliaEthBalance0).equals((await Contract.balanceOf(julia)).times(2)))

    await Contract.buy({ from: lisa, value: 200 })

    const kellyEthBalance2 = web3.eth.getBalance(kelly)
    const juliaEthBalance2 = web3.eth.getBalance(julia)

    assert(juliaEthBalance1.equals(juliaEthBalance2))
    assert(kellyEthBalance1.lt(kellyEthBalance2))
  })
})
