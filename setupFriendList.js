const friendList = document.querySelector('.friendList')
const arrowLeft = document.querySelector('.arrowLeft')
const arrowRight = document.querySelector('.arrowRight')

export function setupFriendList() {

    for (let i = 0; i < 5; i++) {
        const friend = document.createElement("div")
        friend.classList.add("friendAvatar")
        friendList.appendChild(friend)
    }

    let currentShift = 0

    arrowLeft.disabled = true

    arrowRight.addEventListener('click', () => {
        console.log('clicked')
        currentShift += 1
        friendList.style.transform = `translate(${-61 * currentShift}px, 0)`
        arrowLeft.disabled = false

        if(currentShift === 6) {
            arrowRight.disabled = true
        }
    })

    arrowLeft.addEventListener('click', () => {
        console.log('clicked')
        currentShift -= 1
        friendList.style.transform = `translate(${-61 * currentShift}px, 0)`
        arrowRight.disabled = false

        if(currentShift === 0) {
            arrowLeft.disabled = true
        }
    })
}