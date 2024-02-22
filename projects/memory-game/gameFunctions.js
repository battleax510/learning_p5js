
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
  
    this.classList.add("flipped");
  
    if (!firstCard) {
      firstCard = this;
      return;
    }
  
    secondCard = this;
    score++;
    document.querySelector(".score").textContent = score;
    lockBoard = true;
  
    checkForMatch();
  }
  
  
  function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  
    isMatch ? disableCards() : unflipCards();
  }
  
  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  
    resetBoard();
  }
  
  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  
    resetBoard();
  }

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}
function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    
  }