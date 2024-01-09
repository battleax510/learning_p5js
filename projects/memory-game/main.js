document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.querySelector(".grid-container");
    let cards = []; // Ensure this line declares the cards array in the outer scope.
    let firstCard, secondCard;
    let lockBoard = false;
    let score = 0;
  
    document.querySelector(".score").textContent = score;
  
    fetch("./data/cards.json")
    .then((res) => res.json())
    .then((data) => {
      cards = [...data, ...data];
      shuffleCards();  // Make sure shuffleCards has access to the cards array
      generateCards();
    });
  
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