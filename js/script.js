//Macro aree:
// - stampare dinamicamente griglia di gioco
// - Aggiungere id alle celle
// - creare le bombe tramite 16 numeri casuali nel range di difficolta.
// CLICK cella:
    //- ho pestato una bomba, se il numero è presente nei numeri generati abbiamo calpestato la bomba -> fine gioco
    //- se la cella si colora di rosso la partita finisce altrimenti, di grigio, allora puo' continuare a cliccare.
// FINE gioco:
    // stampare il risultato sotto la griglia
    // congelare la griglia con un'altro livello sopra il container
    // le bombe vengono accese tutte
// al click di play -> RESET
// PLAY -> RESET
   //creo una nuova griglia
   //creo altre bombe
// RESET 
    //cancello tutte le bombe
    //cancello la griglia



//prendo gli elementi che mi servono

const main = document.querySelector('.game_container');
const btnPlay = document.querySelector('#play');
const selectLevel = document.querySelector('#levels');


//livelli di difficolta
const gridLevels = [100, 81, 49];
const bombsNumber = 16;
//arrai vuoto per verificare se l'id del mio quadrato è presente in questa lista di bombe
let bombs = [];
//conteggio punti-tentativi;
let score = 0;
let squareForRow;

// al click faccio partire la mia funzione play per far partire il gioco

btnPlay.addEventListener('click', play);

function play() {
  //in base ai livelli di difficolta stampero' la mia griglia
  const squareNumbers = gridLevels[selectLevel.value];
  //calcolo il numero di quadrati per riga in base al livello di difficolta
  if (gridLevels[selectLevel.value] === 100) {
      squareForRow = 10;
    } else if (gridLevels[selectLevel.value] === 81) {
      squareForRow =  9;
    } else if (gridLevels[selectLevel.value] === 49) {
      squareForRow = 7;
    }
    
    generateCalc() 
  
    //funzione di reset
    reset();
    //funzione per generare il campo di gioco
    generatePlayArea(squareNumbers);
    //funzione per generare le bombe, sara uguale all'array bombs;
    bombs = generateBombs(squareNumbers);
}


// funzione per generare il campo di gioco
function generatePlayArea(squareNumbers){
  // genero la griglia
  const grid = document.createElement('div');
  grid.className = 'grid';

  // genero i quadratini
  for(let i = 1; i <= squareNumbers; i++) {
    const square = generateSquare(i, squareNumbers);
    grid.append(square);
  }

  main.append(grid);

}

//funzione per generare i quadratini
function generateSquare(cellId, squareNumbers) {
  const square = document.createElement('div');
  square.className = 'square';

  square.classList.add('square' + squareNumbers);

  //proprieta custum assegnazione id al quadratino
  square.cellId = cellId;
  square.style.width = generateCalc();
  square.style.height = generateCalc();

  square.innerHTML = `<span>${cellId}</span>`;
  //evento click del quadrato
  square.addEventListener('click', handleClickSquare);
  return square
}

//funzione per calcolare i quadrati per riga dinamicamente
function generateCalc() {
  return `calc(100% / ${squareForRow})`;
}




//funzione evento click del quadratino per verificare i tentativi e per poter vedere se ho pestato bombe
function handleClickSquare() {
  this.classList.add('grey');  
  //verifico se ho calpeestato una bomba se questo id della square è presente nell'array globale bombs
  if (!bombs.includes(this.cellId)) {
    //conteggio punti
    score++;
    console.log(score);
    //creo la collection array che contiene tutti i quadrati per poterli poi confrontare
    const square = document.getElementsByClassName('square');
    //se il punteggio è uguale a tutti iquadrati meno il numero di bombe ho vinto
  if (score === square.length - bombsNumber){
    //funzione per far finire il gioco
    theEnd(true)
  }
  } else {

    theEnd(false)
  }
}

//funzione per far finire il gioco
function theEnd(isWin) {

  //stampo il risultato dinamicamente
  let msg;
  //creo la collection array che contiene tutti i quadrati 
  const squares = document.getElementsByClassName('cell');

  if (isWin) {
    msg = 'Hai Vinto!! sei riuscito a sopravvivere 😅'
  } else {
    msg = `Hai Perso...🥲 Hai fatto ${score} punti riprovaci!! 💪`
  }
  //stampo il msg
  document.querySelector('.endMessage').innerHTML = msg;
  //funzione per far scoppiare le bombe
  bangBomb();
  //faccio apparire dinamicamente la griglia congelata
  const endGame = document.createElement('div');
  endGame.className = 'end_game';
  document.querySelector('.game_container').append(endGame);
}

function bangBomb() {
  //prendo la mia collection di squares
  const squares = document.getElementsByClassName('square');

  //faccio un ciclo della mia collection
  for(let i = 0; i < squares.length; i++) {
    //se l'id dei quadrati è presente nel'array bombs gli aggiungo la classe bomb
    const square = squares[i];
    if(bombs.includes(square.cellId)) {
      square.classList.add('bomb')
    }
  }
}






//funzione per generare le bombe
function generateBombs(squareNumbers) {
  //genero id delle bombe e li salvo in un array vuoto
  const bombsId = [];
  //ciclo while() ad ogni ciclo genero una bomba random fino a quando non ho raggiunto il numero di bombe necessarie
  while(bombsId.length < bombsNumber) {
    const bomb = generateRandomNumber(1, squareNumbers);
    //constrollo se è non è presente nell'arrai bombsId lo pusho dentro 
    if (!bombsId.includes(bomb)) {
      bombsId.push(bomb);
    }
  }

  return bombsId;
}



//funzione per generare numeri random
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//funzione di reset per riniziare il gioco
function reset() {
  main.innerHTML = '';
  //resetto il risultato
  score = 0;
  //resetto il messaggio di fine partita
  document.querySelector('.endMessage').innerHTML = '';
}

