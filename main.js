import steps from "./steps.js"

const girl = document.querySelector('.girl')
const uniButton = document.querySelector('.unibutton')

let currentstep = 0

uniButton.addEventListener('click', () => {
  currentstep += 1
  const {x, y} = steps[currentstep]

  uniButton.disabled = true
  girl.classList.add('moving')

  setTimeout(() => {
    girl.classList.remove('moving')
    if (currentstep !== steps.length - 1) {
      uniButton.disabled = false
    }
  }, 1200)

  setTimeout(() => {
    girl.style.left = `${x}px`
    girl.style.bottom = `${y}px`
  }, 200)
})

