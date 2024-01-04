document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.querySelector(".grid-container");
    let cards = [];
    let firstCard, secondCard;
    let lockBoard = false;
    let score = 0;
  
    document.querySelector(".score").textContent = score;
  
    fetchCards();
  
    // Other functions go here (fetchCards, shuffleCards, etc.)
  
    function updateScore() {
      document.querySelector(".score").textContent = score;
    }
  
    function restart() {
      resetBoard();
      shuffleCards();
      score = 0;
      updateScore();
      gridContainer.innerHTML = "";
      generateCards();
    }
  
    // Event listeners
    // ...
  
  });