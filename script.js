// ==UserScript==
// @name        Hide and Seek 🙈 🫣 👀
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      -
// @description 4/11/2023, 12:20:08 AM
// ==/UserScript==

const button = document.createElement('button')
const bodyParts = document.querySelectorAll('body *')
button.innerText = 'YO! 👋'
button.onclick = function () {
  console.log('what uppppppp')
  if (bodyParts) {
    bodyParts.forEach((elem) => elem.style.visibility  === 'hidden' ? elem.style.visibility='visible' : elem.style.visibility = 'hidden')

  }
}
document.body.append(button)