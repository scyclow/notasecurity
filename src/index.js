import 'index.css'
import $ from './utils/$'
import logo, { blink } from './logo'
import web3Setup, { simpleBuy, CONTRACT_ADDRESS } from './web3Setup'

$.sub('logo', logo())
$.sub('contract-address', CONTRACT_ADDRESS)

let blinking = false
$.onClick($.cls('logo'))(() => {
  blinking = !blinking
  if (blinking) {
    $.sub('logo', blink())
  } else {
    $.sub('logo', logo())
  }
})


if (!window.web3) {
  $($.id('web3-detected'), 'display', 'none')
}

const buyNowButton = $.id('buy-now-button');
if (buyNowButton) {

  $.onClick(buyNowButton)(() => {
    const amount = Number($.id('buy-now-amount').value);

    if (amount) {
      simpleBuy(amount)
    }
  })
}

function timedBlink(wait) {
  setTimeout(() => {
    $.sub('logo', blink())
    setTimeout(() => {
      $.sub('logo', logo())
      timedBlink(random(4000, 12000, true))
    }, random(150, 250, true))
  }, wait)
}

timedBlink(3000)





function isNumber(num) {
  return typeof num === 'number' && num !== NaN;
}

function isBoolean(bool) {
  return typeof bool === 'boolean';
}

function random(i, j, k) {
  if (isBoolean(k) && k) return Math.floor(random(i, j))
  else if (isNumber(j))  return i + random(j - i)
  else if (isBoolean(j)) return Math.floor(random(i))
  else                   return Math.random() * i
}
