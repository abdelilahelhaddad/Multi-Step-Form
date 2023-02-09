const goBack = document.querySelector('.goBack')
const nextStep = document.querySelector('.nextStep')
const confirmStep = document.querySelector('.confirmStep')
const circles = document.querySelectorAll('.circle')
const theContents = document.querySelectorAll('.theContent')

let currentActive = 1

nextStep.addEventListener('click', () => {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})

goBack.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
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
  } else if (currentActive === circles.length) {
    nextStep.classList.add('visibility')
    confirmStep.classList.remove('hidden')
  } else {
    goBack.classList.remove('visibility')
    nextStep.classList.remove('visibility')
    confirmStep.classList.add('hidden')
  }
}