const goBack = document.querySelector('.goBack')
const nextStep = document.querySelector('.nextStep')
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
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      for (var i = 0; i < circles.length; i++) {
        circles[i].classList.remove('activeCircle');
      }
      circle.classList.add('activeCircle')
    }
  })

  if (currentActive === 1) {
    goBack.classList.add('visibility')
  } else if (currentActive === circles.length) {
    nextStep.classList.add('visibility')
  } else {
    goBack.classList.remove('visibility')
    nextStep.classList.remove('visibility')
  }
}