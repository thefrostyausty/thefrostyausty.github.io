const balloon = document.getElementById('air-balloon')
const letterA = document.getElementById('letter-a')
const letterU = document.getElementById('letter-u')
const letterS = document.getElementById('letter-s')
const letterT = document.getElementById('letter-t')
const letterI = document.getElementById('letter-i')
const letterN = document.getElementById('letter-n')
const javascript = document.getElementById('javascript')
const react = document.getElementById('react')
const graphql = document.getElementById('graphql')


function move() {
  const incrementer = window.scrollY

 
  balloon.style.bottom = 10 + incrementer * 0.1 + '%'

  letterA.style.bottom = 60 + incrementer * 0.12 + '%'
  letterA.style.left = 15 + incrementer * 0.1 + '%'
  letterU.style.bottom = 60 + incrementer * 0.14 + '%'
  letterU.style.left = 25 + incrementer * 0.15 + '%'
  letterS.style.bottom = 60 + incrementer * 0.1 + '%'
  letterS.style.left = 35 + incrementer * -0.12 + '%'
  letterT.style.bottom = 60 + incrementer * 0.16 + '%'
  letterT.style.left = 45 + incrementer * -0.15 + '%'
  letterI.style.bottom = 60 + incrementer * 0.2 + '%'
  letterI.style.left = 55 + incrementer * 0.16 + '%'
  letterN.style.bottom = 60 + incrementer * 0.2 + '%'
  letterN.style.left = 65 + incrementer * 0.125 + '%'
  javascript.style.left = 20 + incrementer * -2.2 + '%'
  react.style.left = 26 + incrementer * -1.5 + '%'
  graphql.style.left = 32 + incrementer * -1 + '%'
}

window.addEventListener('scroll', move)