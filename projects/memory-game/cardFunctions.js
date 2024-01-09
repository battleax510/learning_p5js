function shuffleCards() {
    // Implementation
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
    // Implementation
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


  /***
  createCardElement: This function is more 
  focused on creating an individual card element.
  It takes a card object as a parameter and returns 
  the constructed card element. It doesn’t handle the
  appending or styling part directly; it’s more about 
  encapsulating the creation of a card.
*/
  
  function createCardElement(card) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    return cardElement;
  }
  
/***
  createCardElement: This function is more 
  focused on creating an individual card element.
  It takes a card object as a parameter and returns 
  the constructed card element. It doesn’t handle the
  appending or styling part directly; it’s more about 
  encapsulating the creation of a card.



  
*/