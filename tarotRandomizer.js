// have it separated to here later.

async function loadCards() {

  //const [majorArcana, minorArcana] = await Promise.all([
  // fetch("./majorArcana.json"),
  //  fetch("./minorArcana.json")
  //]);

  //import majorArcana from './majorArcana';
  //import minorArcana from './minorArcana';

   const response = await fetch("./minorArcana.json");
   //const majorArcana = require('./majorArcana');
   //const minorArcana = require('./minorArcana');
   
   // Major Arcana.json
   //let majorArcanaObject = majorArcana;
   
   // Minor Arcana.json
   //let minorArcanaObject = minorArcana;
  }
  loadCards(); 
  
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  function randomMajorArcana(text) {
    
    
    const availableCards = [majorArcana, minorArcana];

    const arcanaNumber = randomNumber(0, availableCards.length - 1); //21 for major
  
     // const card =    availableCards[getRndInteger(0, availableCards.length - 1)];
    
    //const card = majorArcana[arcanaNumber];
    const card = availableCards[arcanaNumber];
    const isReversed = randomNumber(0, 1) === 1;
    const currentTheme = "Witt";
  
    const Image = `img/${currentTheme}/${card.ID}.jpg`;
  
  //  const Orientation = isReversed ? "Reversed" : "Upright";
  
  //  const Meaning = isReversed
  //    ? card.Reverse
  //    : card.Upright;
  
    document.getElementById("name").innerHTML = card.Name;
    document.getElementById("meaning").innerHTML = card.Upright;
    document.getElementById("cardImage").setAttribute('src', Image);
  
  //  document.getElementById("cardImage").style.transform =
  //    isReversed ? "rotate(180deg)" : "rotate(0deg)";
  
  
    // testingText(majorArcana[arcanaNumber].Name);
    // testingText(majorArcana[arcanaNumber].Upright);
  
  }
  
  //loadCards();
  // Function to display any text
  //function testingText(text) {
  //  document.getElementById("testDemo").innerHTML += text + "<br>";
  //}