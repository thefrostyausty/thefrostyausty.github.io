const balloon = document.getElementById('air-balloon')
const cloudOne = document.getElementById('cloud-one')
const cloudTwo = document.getElementById('cloud-two')
const cloudThree = document.getElementById('cloud-three')
const cloudFour = document.getElementById('cloud-four')
const cloudFive = document.getElementById('cloud-five')
const cloudSix = document.getElementById('cloud-six')
const javascript = document.getElementById('javascript')
const react = document.getElementById('react')
const graphql = document.getElementById('graphql')


function move() {
  const incrementer = window.scrollY

 
  balloon.style.bottom = 10 + incrementer * 0.1 + '%'

  cloudOne.style.bottom = 60 + incrementer * 0.12 + '%'
  cloudOne.style.left = 15 + incrementer * 0.1 + '%'
  cloudTwo.style.bottom = 60 + incrementer * 0.14 + '%'
  cloudTwo.style.left = 25 + incrementer * 0.15 + '%'
  cloudThree.style.bottom = 60 + incrementer * 0.1 + '%'
  cloudThree.style.left = 35 + incrementer * -0.12 + '%'
  cloudFour.style.bottom = 60 + incrementer * 0.16 + '%'
  cloudFour.style.left = 45 + incrementer * -0.15 + '%'
  cloudFive.style.bottom = 60 + incrementer * 0.2 + '%'
  cloudFive.style.left = 55 + incrementer * 0.16 + '%'
  cloudSix.style.bottom = 60 + incrementer * 0.2 + '%'
  cloudSix.style.left = 65 + incrementer * 0.125 + '%'
  javascript.style.left = 20 + incrementer * -2.2 + '%'
  react.style.left = 26 + incrementer * -1.5 + '%'
  graphql.style.left = 32 + incrementer * -1 + '%'
}

window.addEventListener('scroll', move)