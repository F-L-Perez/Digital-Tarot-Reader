// see "loadCards.js" for json loading and handling available card pool toggling

function randomNumber(max) {
    // future me: the troublesome randomizer code below isn't necessary until there's toggles that have the deck NOT start at 0
    // return Math.floor(Math.random() * (max - min + 1) ) + min; 
    return Math.floor(Math.random() * (max - 1)); // randomizing from 0 (always) to maximum number
  }
  
  
  function randomMajorArcana() {
    const availableCards = cardPool.length;
    const arcanaNumber = randomNumber(availableCards); // give a random number between 0 and the amount of cards in the cardPool (based on toggle)
    const card = cardPool[arcanaNumber]; // the card in the json with the randomized number
    
    const isReverseBinary = Math.round(Math.random(0, 1)) == 1; // random boolean, always returns a flat 1 or 0
    const cardOrientation = isReverseBinary ? "Reversed" : "Upright"; // ? means if true then "Reversed", otherwise : "Upright" string
    const cardMeaning = isReverseBinary ? card.Reverse : card.Upright; // return the card's reverse meaning in the card's json if true, and vice-versa


    // Note: Since the ID and card name is fetched from the tarot deck json, with order and names inspired by RWS...
    // Future themes that heavily deviate from "witt" (RWS), may need their seperate json (and toggle). like oracle decks. 

    const currentTheme = "Witt";
    const Image = `img/${currentTheme}/${card.ID}.jpg`; 
  
    document.getElementById("name").innerHTML = card.Name + `<br />` + `(` + cardOrientation + `)`;
    document.getElementById("meaning").innerHTML = cardMeaning;
    document.getElementById("cardImage").setAttribute('src', Image); // set the image with #cardImage, to have the src of the image path set above
    document.getElementById("cardImage").setAttribute('alt', card.Name + ` card in "` + currentTheme + `" style.`); // accessibility. the alt text of the image (e.g. the fool card in "witt" style)
    document.getElementById("cardImage").style.transform = isReverseBinary ? "rotate(180deg)" : "rotate(0deg)"; // if reverse is true, then animate turning the card upside down with css transform function. or upright animation
  
  }

  loadCards();
