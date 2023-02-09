const goBack = document.querySelector('.goBack')
const goBackMobile = document.querySelector('#goBackMobile')
const nextStep = document.querySelector('.nextStep')
const nextStepMobile = document.querySelector('#nextStepMobile')
const confirmStep = document.querySelector('.confirmStep')
const confirmStepMobile = document.querySelector('#confirmStepMobile')
const circles = document.querySelectorAll('.circle')
const theContents = document.querySelectorAll('.theContent')
const thankYou = document.querySelector('#thankYou')
const buttons = document.querySelector('#buttons')
const mobileButtons = document.querySelector('#mobileButtons')

let currentActive = 1

function next() {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
}

function back() {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
}

nextStep.addEventListener('click', () => {
  next()
})
nextStepMobile.addEventListener('click', () => {
  next()
})

goBack.addEventListener('click', () => {
  back()
})
goBackMobile.addEventListener('click', () => {
  back()
})

function confirm() {
  theContents.forEach(theContent => {
    theContent.classList.add('hidden');
  });
  thankYou.classList.remove('hidden');
  buttons.classList.add('hidden');
  mobileButtons.classList.add('hidden');
}

confirmStep.addEventListener('click', () => {
  confirm()
})

confirmStepMobile.addEventListener('click', () => {
  confirm()
})


function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      for (var i = 0; i < circles.length; i++) {
        circles[i].classList.remove('activeCircle');
      }
      circle.classList.add('activeCircle')
    }
  })

  theContents.forEach((theContent, index) => {
    if (index < currentActive) {
      for (var i = 0; i < theContents.length; i++) {
        theContents[i].classList.add('hidden');
      }
      theContent.classList.remove('hidden')
    }
  })

  if (currentActive === 1) {
    goBack.classList.add('visibility')
    goBackMobile.classList.add('visibility')
  } else if (currentActive === circles.length) {
    nextStep.classList.add('visibility')
    nextStepMobile.classList.add('visibility')
    confirmStep.classList.remove('hidden')
    confirmStepMobile.classList.remove('hidden')
  } else {
    goBack.classList.remove('visibility')
    goBackMobile.classList.remove('visibility')
    nextStep.classList.remove('visibility')
    nextStepMobile.classList.remove('visibility')
    confirmStep.classList.add('hidden')
    confirmStepMobile.classList.add('hidden')
  }
}