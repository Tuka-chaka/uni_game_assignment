import { data } from './data.js'

const modal = document.querySelector('dialog')
const leaderboardButton = document.querySelector('.leaderboardButton')
const crossButton = document.querySelector('.crossButton')
const entriesWrapper = document.querySelector('.entriesWrapper')


const rating = [...data.rating]
const friends = data.friends.map(friend => friend.id)
rating.sort((a, b) => b.points - a.points)

function createLeaderboardEntry(player, place) {
    const entry = document.createElement('div')
    entry.classList.add('leaderboardEntry')
    entry.innerHTML = `
    <div class="leaderboardEntry">
        <div class="place">
            ${place}
        </div>
        <img class="leaderboardAvatar" src="/images/${player.img.slice(1)}">
        <div class="name  ${friends.some(id => player.id === id) ? "friendName" : ""}">
            ${player.name} ${player.lastName}
        </div>
        <div class="experience">
            ${player.points}
        </div>
    </div>`
    return entry
}

export function setupModal() {
    leaderboardButton.addEventListener('click', () => {
        modal.showModal()
        modal.classList.add('open')
    })

    crossButton.addEventListener('click', () => {
        modal.classList.remove('open')
        setTimeout(() => modal.close(), 500)
    })

    // modal.addEventListener('click', function(e) {
    //     if (e.target === e.currentTarget) {
    //       e.stopPropagation()
    //       modal.classList.remove('open')
    //       setTimeout(() => modal.close(), 500)
    //     }
    // })

    for (let i = 0; i < rating.length; i++) {
        entriesWrapper.appendChild(createLeaderboardEntry(rating[i], i + 1))
    }
}