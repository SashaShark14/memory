const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false
let boardLocked = false
let firstCard
let secondCard

const flipCard = (e) => {
    if(boardLocked) return
    const target = e.target.parentElement

    if(target === firstCard) return

    target.classList.add('flip')

    console.log(target.dataset.framework)

    if(!hasFlippedCard) {
        hasFlippedCard = true
        firstCard = target
    } else {
      
        hasFlippedCard = false
        secondCard = target
        checkForMatch()
    }
 };

 const checkForMatch = () => {

    const isEqual = firstCard.dataset.framework === secondCard.dataset.framework

    isEqual ? disableCards() :  unflipCards()
    //  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    //     disableCards()
    //  } else {
    //     unflipCards()
    //  }
 };

 const disableCards = () => {
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
 };

 const unflipCards = () => {
    boardLocked = true
    setTimeout(() => {
   firstCard.classList.remove('flip')
   secondCard.classList.remove('flip')
   resetBoard()
    }, 900)
   
 };

 cards.forEach(card => {
    card.addEventListener('click', flipCard)

    const randomIndex = Math.floor(Math.random() * cards.length)
    
    card.style.order = randomIndex
})

const resetBoard = () => {
// [hasFlippedCard, boardLocked] = [false, false];
// [firstCard, secondCard] = [null, null];

hasFlippedCard = boardLocked = false;
firstCard = secondCard = null;
}

// console.log(cards)