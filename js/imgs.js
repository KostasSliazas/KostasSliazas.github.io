(function () {
  'use strict'
  const LOADER = document.getElementsByClassName('loader')[0]
  const ALLC = document.getElementsByClassName('allcontainer')[0] // get all container in oldscoolway
  const STOP = ALLC.getElementsByClassName('pbtn')[0]
  const ALIM = ALLC.getElementsByTagName('img') // get all images in ALLC container
  const CONI = ALIM.length
  let ind = Math.floor(Math.random() * CONI) || 0
  let tim = 0
  let cou = 0

  for (let x = 0; x < CONI; ++x) {
    if (ALIM[x].complete) incrementcou()
    else ALIM[x].addEventListener('load', incrementcou, false)
  }

  function incrementcou () {
    if (++cou === CONI) {
      LOADER.style.display = 'none'
      ALIM[ind].parentElement.classList.add('actim')
    }
  }

  function setIs () {
    btn()
    tim = setTimeout(setIs, 1000)
  }

  function buttons (e) {
    if (e.target.classList.contains('pbtn')) {
      e.preventDefault()
      STOP.classList.remove('acts')
      if (tim) {
        clearTimeout(tim)
        tim = 0
      } else {
        return setIs()
      }
    }
    if (e.target.classList.contains('lbtn')) btn()
    if (e.target.classList.contains('rbtn')) btn(1)
    clearTimeout(tim)
    tim = 0
    STOP.classList.add('acts')
  }

  function btn (k) {
    ALIM[ind].parentElement.classList.remove('actim')
    ind = k ? (ind - 1 + CONI) % CONI : (ind + 1) % CONI
    ALIM[ind].parentElement.classList.add('actim')
  }
  ALLC.addEventListener('click', buttons)
})()
