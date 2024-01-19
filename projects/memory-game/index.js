const gridContainer = document.querySelector(".grid-container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;

document.querySelector(".score").textContent = score;

const cardAudio = document.getElementById("cardAudio");
// Add an Audio element for match
const matchAudio = document.getElementById("matchAudio");
// Add an Audio Element for mismatch
const noMatchAudio = document.getElementById("noMatchAudio");
// Add an AUdio Element for mismatch
const badAppleAudio = document.getElementById("badAppleAudio");
// Adding  an audio element for when level is complete
const levelCompleteAudio = document.getElementById("levelCompleteAudio");
// Adding an audio element for user gets a matching bad apple
const instantGameOverAudio = document.getElementById("instantGameOver");
const elevatorMusicAudio = document.getElementById("elevatorMusicAudio")


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
  cueElevatorMusicAudio();
  if (lockBoard) return;
  playCardAudio();
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;
  checkForMatch();

}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  switch (true) {
    case isMatch && firstCard.dataset.name === "badApple":
      pauseElevatorMusicAudio();
      playInstantGameOverAudio();
      // Add logic to keep cards flipped and end the game
      gridContainer.innerHTML = `
      <p class="legend"> Game Over! </p>
      <p class="legend">You matched the bad apple.</p> 
      <p class="legend"><img class="front-image" src="./assets/bad_apple.png"> + <img class="front-image" src="./assets/bad_apple.png">=</p>
      <p class="legend"> Game Over </p>
      `;
      break;
    case isMatch:
      score++;
      document.querySelector(".score").textContent = score;
      flickerBackground();
      playMatchAudio();
      if(score === (cards.length / 2 -1 )){
        gridContainer.innerHTML= `You Win`;
        pauseElevatorMusicAudio();
        playlevelCompleteAudio();
      } else {
        isMatch ? disableCards() : unflipCards();
      }
      break;
    default:
      flickerBackgroundMismatch(); 
      playNoMatchAudio();
      unflipCards();
  }
//   isMatch ? disableCards() : unflipCards();
//   if(isMatch) {
//     score++;
//     document.querySelector(".score").textContent = score;
//     playMatchAudio();
//   } else {
//     playNoMatchAudio();
//   }
}
function playInstantGameOverAudio() {
  instantGameOverAudio.play();
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
function playMatchAudio() {
  // Play the match audio file
  matchAudio.play();
}

function playNoMatchAudio() {
  noMatchAudio.play();
}

function playCardAudio() {
  cardAudio.play();
}

function playlevelCompleteAudio() {
  levelCompleteAudio.play();
}
function cueElevatorMusicAudio() {
  elevatorMusicAudio.play();
}
function pauseElevatorMusicAudio() {
  elevatorMusicAudio.pause();
}
function flickerBackgroundMismatch() {
  document.body.classList.add("flicker-mismatch"); // Add a class for flickering
  setTimeout(() => {
    document.body.classList.remove("flicker-mismatch"); // Remove the class after a short delay
  }, 1000); // Adjust the duration as needed
}

function flickerBackground() {
  // Add a class for flickering
  document.body.classList.add("flicker");   
  setTimeout(() => {
    document.body.classList.remove("flicker"); // Remove the class after a short delay
  }, 1000); // Adjust the duration as needed
}
function restart() {
  resetBoard();
  shuffleCards();
  pauseElevatorMusicAudio();
  score = 0;
  document.querySelector(".score").textContent = score;
  gridContainer.innerHTML = "";
  generateCards();
  cueElevatorMusicAudio();
 }
