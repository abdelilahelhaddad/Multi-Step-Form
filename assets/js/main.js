const goBack = document.getElementById('goBack')
const nextStep = document.getElementById('nextStep')
const circles = document.querySelectorAll('.circle')

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
      circle.classList.add('activeCircle')
    } else {
      circle.classList.remove('activeCircle')
    }
  })

  const actives = document.querySelectorAll('.activeCircle')

  if (currentActive === 1) {
    goBack.disabled = true
  } else if (currentActive === circles.length) {
    nextStep.disabled = true
  } else {
    goBack.disabled = false
    nextStep.disabled = false
  }
}