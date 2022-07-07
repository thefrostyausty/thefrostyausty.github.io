const austin = document.getElementById('austin')
const letterA = document.getElementById('letter-a')
const letterU = document.getElementById('letter-u')
const letterS = document.getElementById('letter-s')
const letterT = document.getElementById('letter-t')
const letterI = document.getElementById('letter-i')
const letterN = document.getElementById('letter-n')
const javascript = document.getElementById('javascript')
const react = document.getElementById('react')
const python = document.getElementById('python')
const django = document.getElementById('django')
const css = document.getElementById('css')
const github = document.getElementById('github')



function move() {
  const incrementer = window.scrollY

 
  austin.style.bottom = 10 + incrementer * 0.1 + '%'

  letterA.style.bottom = 60 + incrementer * 0.12 + '%'
  letterA.style.left = 1 + incrementer * 0.1 + '%'
  letterU.style.bottom = 60 + incrementer * 0.14 + '%'
  letterU.style.left = 16 + incrementer * 0.15 + '%'
  letterS.style.bottom = 60 + incrementer * 0.1 + '%'
  letterS.style.left = 34 + incrementer * -0.12 + '%'
  letterT.style.bottom = 60 + incrementer * 0.16 + '%'
  letterT.style.left = 52 + incrementer * -0.15 + '%'
  letterI.style.bottom = 60 + incrementer * 0.2 + '%'
  letterI.style.left = 70 + incrementer * 0.16 + '%'
  letterN.style.bottom = 60 + incrementer * 0.2 + '%'
  letterN.style.left = 80 + incrementer * 0.125 + '%'
  javascript.style.left = 20 + incrementer * -2.2 + '%'
  react.style.left = 26 + incrementer * -1.5 + '%'
  python.style.left = 32 + incrementer * -1.1 + '%'
  django.style.right = 25 + incrementer * -0.15 + '%'
  github.style.right = 18 + incrementer * -0.15 + '%'
  css.style.right = 32 + incrementer * -0.15 + '%'
}

window.addEventListener('scroll', move)