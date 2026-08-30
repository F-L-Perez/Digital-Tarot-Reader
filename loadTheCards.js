let cardPool = []; // <-- All available cards
let loadMinorArcana = false;

async function loadCards() {
  const mainResponse = await fetch("./majorArcana.json");
  majorArcana = await mainResponse.json();

  cardPool = [...majorArcana]; // [...] creates a shallow reference to another array

  // only load minor arcana json if toggled to true
    if(loadMinorArcana === true){
      const minorResponse = await fetch("./minorArcana.json");
      minorArcana = await minorResponse.json();
      cardPool = [...cardPool, ...minorArcana]; // [..., ...] expands/merged an array by adding other ones, as reference (not duplicated)
    };

  }
  
  function toggleMinorArcana() {
    loadMinorArcana = document.getElementById("loadMinorArcana").checked;
    loadCards();
  }