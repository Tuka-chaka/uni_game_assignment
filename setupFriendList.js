import { data } from './data.js'

const friendList = document.querySelector('.friendList')
const arrowLeft = document.querySelector('.arrowLeft')
const arrowRight = document.querySelector('.arrowRight')

export function setupFriendList() {

    for (let i = 0; i < data.friends.length; i++) {
        const friend = document.createElement("div")
        friend.classList.add("friendAvatar")
        friend.style.backgroundImage = `url(./images/${data.friends[i].img.slice(1)})`
        friendList.appendChild(friend)
    }

    for (let i = 0; i < 8; i++) {
        const friend = document.createElement("div")
        friend.classList.add("friend")
        friendList.appendChild(friend)
    }

    let currentShift = 0

    arrowLeft.disabled = true

    arrowRight.addEventListener('click', () => {
        currentShift += 1
        friendList.style.transform = `translate(${-60 * currentShift}px, 0)`
        arrowLeft.disabled = false
        if(currentShift === 5) {
            arrowRight.disabled = true
        }
    })

    arrowLeft.addEventListener('click', () => {
        currentShift -= 1
        friendList.style.transform = `translate(${-60 * currentShift}px, 0)`
        arrowRight.disabled = false

        if(currentShift === 0) {
            arrowLeft.disabled = true
        }
    })
}