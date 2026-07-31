async function loadCards() {
    const response = await fetch("./majorArcana.json");
    majorArcana = await response.json();
  }
  loadCards();
  
  let majorArcana = []; 
  
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  function randomMajorArcana(text) {
    const arcanaNumber = randomNumber(0, 41);
    const card = majorArcana[arcanaNumber];

    const currentTheme = "Witt";
  
    const Image = `img/${currentTheme}/${card.ID}.jpg`;
  
    document.getElementById("name").innerHTML = card.Name;
    document.getElementById("meaning").innerHTML = card.Upright;
    document.getElementById("cardImage").setAttribute('src', Image);
  
  }
  