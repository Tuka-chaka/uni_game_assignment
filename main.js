import steps from "./steps.js"
import { setupFriendList } from "./setupFriendList.js"
import { setupModal } from "./setupModal.js"

const player = document.querySelector('.player')
const uniButton = document.querySelector('.unibutton')

let currentstep = 0

setupFriendList()
setupModal()

uniButton.addEventListener('click', () => {
  currentstep += 1
  const {x, y} = steps[currentstep]

  uniButton.disabled = true
  player.classList.add('moving')

  setTimeout(() => {
    player.classList.remove('moving')
    if (currentstep !== steps.length - 1) {
      uniButton.disabled = false
    }
  }, 1200)

  setTimeout(() => {
    player.style.left = `${x}px`
    player.style.bottom = `${y}px`
  }, 200)
})

