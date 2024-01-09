const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
  });

function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}
// generateCards function:
// •	It iterates through an array of cards.
// 	•	For each card, it creates a new <div> element with the class “card” and sets attributes based on the card’s data.
// 	•	Inside the card element, it adds a front and back element with an image for the front face.
// 	•	The card element is appended to a container (assumed to be named gridContainer).
// 	•	A click event listener is added to each card, calling the flipCard function when clicked.

function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}

function flipCard() {
  if (lockBoard) return;  // Checks board is locked
  if (this === firstCard) return; // checks to make sure your flipping the first card

  this.classList.add("flipped");  // This adds the class to the card element being click

  /*
    This conditional statment will assign the card to 
    firstCard variable if it is the second card clicked    
  */
  if (!firstCard) {   
    firstCard = this;
    return;
  }

  // Otherwise we move foward with card flipping...
  secondCard = this; // flipping the second card
  score++; // Incrementing the score by 1.
  document.querySelector(".score").textContent = score; // assigns the score value to the Canvas
  lockBoard = true;  // locks the board so User can not flip any more  cards

  checkForMatch(); // Until the check to see if the cards actually match.
}

function checkForMatch() {
  // We assign the condition of wether the two names of the cards match.
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;


  // isMatch: This is presumably a boolean variable or expression that evaluates to either true or false.
	// •	?: This is the ternary conditional operator. It’s a short way of writing an if-else statement.
	// •	disableCards(): This function is called if isMatch is true.
	// •	:: Separates the two possible outcomes in the ternary expression.
	// •	unflipCards(): This function is called if isMatch is false. 

  isMatch ? disableCards() : unflipCards(); /**This is a conditional (ternary) expression written in JavaScript.
                                             It’s a concise way of writing an if-else statement.
                                            */
}

//In plain English, this line of code is saying: “If isMatch is true, call disableCards(). Otherwise, call unflipCards(


function disableCards() {
  // Cards are disabled by simply removing the click event from the element.
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

// This resetBoard() function  will removes the 
  // the element from the clicked cards 
  // and unlocks the board so you can continue.

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  
}


// Restart() Function will use the resetBoard function
// shuffle cards and initializes all components 
// so the game may simulate a new game approach
function restart() {
  resetBoard();
  shuffleCards();
  score = 0;
  document.querySelector(".score").textContent = score;
  gridContainer.innerHTML = "";
  generateCards();
}
