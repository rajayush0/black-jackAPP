let player = {
    name: "AYUSH",
    chips: 200,

}

let cards = []

let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el") 
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let gameEl = document.getElementById("game-el")

    messageEl.textContent = "Want to play a round?"
    gameEl.textContent = "START GAME"
    sumEl.textContent = "Sum: 0"
    cardsEl.textContent = "Cards: 0"
    isAlive = false
    hasBlackJack = false

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}
function startGame() {
    gameEl.textContent = "NEW GAME"
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
        isAlive = true
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()        
    }
}
function stopgame(){
    messageEl.textContent = "Want to play a round?"
    gameEl.textContent = "START GAME"
    sumEl.textContent = "Sum: 0"
    cardsEl.textContent = "Cards: 0"
    isAlive = false
    hasBlackJack = false
}

document.getElementById("start-btn").addEventListener('click',startGame);
document.getElementById("newcard-btn").addEventListener('click',newCard);
document.getElementById("stop-btn").addEventListener('click',stopgame );
