import 'index.css'
import $ from './utils/$'
import logo, { blink } from './logo'

$.sub('logo', logo())

let blinking = false
$.onClick($.cls('logo'))(() => {
  blinking = !blinking
  if (blinking) {
    $.sub('logo', blink())
  } else {
    $.sub('logo', logo())
  }
})


function timedBlink(wait) {
  setTimeout(() => {
    $.sub('logo', blink())
    setTimeout(() => {
      $.sub('logo', logo())
      timedBlink(random(7000, 20000, true))
    }, random(150, 250, true))
  }, wait)
}

timedBlink(4000)





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
