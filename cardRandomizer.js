// see "loadCards.js" for the preceding code for json loading and handling available card pool toggling

function randomNumber(max) {
    // future me: the troublesome randomizer code below isn't necessary until there's toggles that have the deck NOT start at 0
    // return Math.floor(Math.random() * (max - min + 1) ) + min; 
    return Math.floor(Math.random() * (max - 1)); // randomizing from 0 (always) to maximum number
  }
  
  
  function randomMajorArcana() {
    const availableCards = cardPool.length;
    const arcanaNumber = randomNumber(availableCards); // give a random number between 0 and the amount of cards in the cardPool (amount changes by toggle)
    const card = cardPool[arcanaNumber]; // it is simpler to assign a short variable for the randomized card, instead of repeating it over and over omg
    
    const isReverseBinary = Math.round(Math.random(0, 1)) == 1; // shorter way for random boolean 
    const cardOrientation = isReverseBinary ? "Reversed" : "Upright"; // it's simpler to use ? and : for opposing if statements
    const cardMeaning = isReverseBinary ? card.Reverse : card.Upright;

    // Note: The image organizing was made to be more flexible/scalable. Since the ID and card name is fetched from the tarot deck json, using mainstream RWS name, order, meaning
    // Future themes that heavily deviate from "witt" (RWS), the simplest solution is to have a seperate json (and toggle). like oracle decks. 

    const currentTheme = "Witt";
    const Image = `img/${currentTheme}/${card.ID}.jpg`; 
  
    document.getElementById("name").innerHTML = card.Name + `<br />` + `(` + cardOrientation + `)`;
    document.getElementById("meaning").innerHTML = cardMeaning;
    document.getElementById("cardImage").setAttribute('src', Image); // set the image with #cardImage, to have the src of the image path set above
    document.getElementById("cardImage").setAttribute('alt', card.Name + ` card in "` + currentTheme + `" style.`); // accessibility. the alt text of the image (e.g. the fool card in "witt" style)
    document.getElementById("cardImage").style.transform = isReverseBinary ? "rotate(180deg)" : "rotate(0deg)"; // display the card position and animation with css3. simple.
  
  }

  loadCards();
