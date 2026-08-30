  function randomNumber(max) {
    // used to be function randomNumber(min, max) to put the minimum number and maximum number -- 
    // random number generator, but its too broad for the card pool that will start at 0
    //return Math.floor(Math.random() * (max - min + 1) ) + min; 

    return Math.floor(Math.random() * (max - 1)); // randomizing from 0 (always) to maximum number (minus 1 to adjust from javascript index starts counting from 0)
  }
  
  
  function randomMajorArcana() {
    const availableCards = cardPool.length;
    //const availableCards = majorArcana.length; // the amount of cards in the card json, (the randon number gen makes it -1 bc the values start at 0)
    const arcanaNumber = randomNumber(availableCards); // give a random number between 0 and the amount of cards (minus one to adjust to starting at 0)
    //const card = majorArcana[arcanaNumber]; // just majorArcana
    const card = cardPool[arcanaNumber]; // the card in the json with the randomized number
    
    const isReverseBinary = Math.round(Math.random(0, 1)) == 1; //returns a flat 1 or 0 by rounding up. if 1, its true. if 0, false. boolean
    const cardOrientation = isReverseBinary ? "Reversed" : "Upright"; // ? means if true then "Reversed", otherwise : "Upright" string
    const cardMeaning = isReverseBinary ? card.Reverse : card.Upright; // return the card's reverse value (the card's reverse meaning) in the card's json if true, otherwise upright card meaning in the card json 


    //all the images are named after the "ID" value in the card json's, and in diff folders based on themes. inserting values as {} (template literal) in `` to make it into a string ?
    // the "card.ID" means the "ID" value of the card (in the json).
    const currentTheme = "Witt";
    const Image = `img/${currentTheme}/${card.ID}.jpg`; 
  
    document.getElementById("name").innerHTML = card.Name + `<br />` + `(` + cardOrientation + `)`;
    document.getElementById("meaning").innerHTML = cardMeaning;
    document.getElementById("cardImage").setAttribute('src', Image); // set the image with #cardImage, to have the src of the image path set above
    document.getElementById("cardImage").setAttribute('alt', card.Name + ` card in "` + currentTheme + `" style.`); //the alt text of the image (e.g. the fool card in "witt" style)
    document.getElementById("cardImage").style.transform = isReverseBinary ? "rotate(180deg)" : "rotate(0deg)"; // if reverse is true, then turn card upside down with css transform function. otherwise don't do that
  
  }

  loadCards();
