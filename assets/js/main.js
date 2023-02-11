const goBackItems = document.querySelectorAll('.goBack')
const goBack = document.querySelector('#goBack')
const nextStepItems = document.querySelectorAll('.nextStep')
const nextStep = document.querySelector('#nextStep')
const confirmStepItems = document.querySelectorAll('.confirmStep')
const confirmStep = document.querySelector('#confirmStep')
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

function nextValidiation() {
  const name = document.querySelector('#name')
  const email = document.querySelector('#email')
  const tel = document.querySelector('#tel')

  if (name.value == "" || name.value == null || !isName(name.value)) {
    document.querySelector('#nameErrorMessage').style.visibility = "visible";
    name.style.borderColor = "hsl(354, 84%, 57%)";
  } else {
    document.querySelector('#nameErrorMessage').style.visibility = "hidden";
  }
  if (email.value == "" || email.value == null || !isValid(email.value)) {
    document.querySelector('#emailErrorMessage').style.visibility = "visible";
    email.style.borderColor = "hsl(354, 84%, 57%)";
  } else {
    document.querySelector('#emailErrorMessage').style.visibility = "hidden";
  }
  if (tel.value == "" || tel.value == null || !isPhoneNumber(tel.value)) {
    document.querySelector('#telErrorMessage').style.visibility = "visible";
    tel.style.borderColor = "hsl(354, 84%, 57%)";
  } else {
    document.querySelector('#telErrorMessage').style.visibility = "hidden";
  }
  if (name.value != "" && isName(name.value) && email.value != "" && isValid(email.value) && tel.value != "" && isPhoneNumber(tel.value)) {
    next();
  }
}

function isName(fullName) {
  var regx = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regx.test(fullName);
}

function isPhoneNumber(phoneNumber) {
  var regx = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return regx.test(phoneNumber);
}

function isValid(Email) {
  const regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regx.test(String(Email).toLowerCase());
}

nextStep.addEventListener('click', () => {
  nextValidiation();
})

nextStepMobile.addEventListener('click', () => {
  nextValidiation();
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
    goBackItems.forEach(goBackItem => {
      goBackItem.classList.add('visibility')
    })
  } else if (currentActive === circles.length) {
    nextStepItems.forEach(nextStepItem => {
      nextStepItem.classList.add('visibility')
    })
    confirmStepItems.forEach(confirmStepItem => {
      confirmStepItem.classList.remove('hidden')
    })
  } else {
    goBackItems.forEach(goBackItem => {
      goBackItem.classList.remove('visibility')
    })
    nextStepItems.forEach(nextStepItem => {
      nextStepItem.classList.remove('visibility')
    })
    confirmStepItems.forEach(confirmStepItem => {
      confirmStepItem.classList.add('hidden')
    })
  }
}

const toggle = document.querySelector('.toggle')
const monthlyPlans = document.querySelectorAll('.monthlyPlan')
const yearlyPlans = document.querySelectorAll('.yearlyPlan')
const freeMonths = document.querySelectorAll('.freeMonths')

toggle.addEventListener('change', () => {
  subscribtion();
})

function subscribtion() {
  if (toggle.checked) {
    monthlyPlans.forEach(monthlyPlan => {
      monthlyPlan.classList.add('hidden');
    })
    yearlyPlans.forEach(yearlyPlan => {
      yearlyPlan.classList.remove('hidden');
    })
    freeMonths.forEach(freeMonth => {
      freeMonth.classList.remove('hidden');
    })
  } else {
    monthlyPlans.forEach(monthlyPlan => {
      monthlyPlan.classList.remove('hidden');
    })
    yearlyPlans.forEach(yearlyPlan => {
      yearlyPlan.classList.add('hidden');
    })
    freeMonths.forEach(freeMonth => {
      freeMonth.classList.add('hidden');
    })
  }
}

