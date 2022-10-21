// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// **BONUS:**
// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// ****2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste



//Macro aree:
// - Aggiungere id alle celle
// - creare le bombe tramite 16 numeri casuali nel range di difficolta.
// CLICK cella:
    //- ho pestato una bomba, se il numero è presente nei numeri generati abbiamo calpestato la bomba -> fine gioco
    //- se la cella si colora di rosso la partita finisce altrimenti, di azzurro, allora puo' continuare a cliccare.
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

// const container = document.querySelector('.game_container');
// // select levels
// const select = document.querySelector('[name="levels"]');

// let squareForRow;
// const bombsNumber = 16;
// let bombs = [];
// let score = 0;



// document.getElementById('start').addEventListener('click', function(){
//   squareForRow = document.querySelector('[name="levels"]').value;
//   container.innerHTML = '';
//   init(squareForRow);
// })


// function init(numElements) {
//   const totalSquares = numElements * numElements;
//   for(let i = 0; i < totalSquares; i++) {
 
//    createSquare(i);

//   }


// }

// function createSquare(idSquare) {

//   const square = document.createElement('div');
//   square.className = 'square';
//   square.idSquare = idSquare + 1;
//   square.innerText = idSquare + 1;
//   square.style.width = generateCalc();
//   square.style.height = generateCalc();
//   square.addEventListener('click', clickSquare);
//   container.append(square);
// }

// function createBombs(totalSquares) {
  
//    while (bombs.length < bombsNumber) {
//       const bomb = generateRandomNumber(1, totalSquares);   
//       if (!bombs.includes(bomb)) {
//         bombs.push(bomb)
//      }
//     }

    
// }

// function clickSquare() {
//   this.classList.add('azure');
//   console.log(this.idSquare);

//   if(!bombs.includes(this.idSquare)) {
//     score++;
//     console.log(score);
//   } else {
//     console.log('FINE')
//   }
// }

// function endGame(isWin) {
//   let msg;
//   const squares = document.getElementsByClassName('square');
//   console.log(squares);
//   if (isWin) {
//     msg = 'Hai Vinto hai cliccato tutte le celle giuste!'
//     console.log('VINTO');
//   } else {
//     console.log('PERSO');
//     msg= 'hai perso '
//   }
//   document.querySelector('.endMessage').innerText = msg;
// }

// function generateCalc() {
//   return `calc(100% / ${squareForRow})`;
// }

// function generateRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }


const main = document.querySelector('.game_container');
const playBtn = document.querySelector('#play');
const levels = document.querySelector('#levels');


const gridLevels = [100, 81, 49];
const bombsNumber = 16;
let bombs = [];

playBtn.addEventListener('click', play);

function play() {
  const squareNumbers = gridLevels[levels.value];
  
  reset();
  

  createPlayGround(squareNumbers);
  bombs = createBombs(squareNumbers);
  console.log(bombs);
}

function createPlayGround(squareNumbers) {
  const grid = document.createElement('div');
  grid.className = 'grid';

  for(let i = 1; i <= squareNumbers; i++) {
    const square = createSquare(i, squareNumbers);
    grid.append(square);
  }
  main.append(grid)
}

function createSquare(squareId, squareNumbers) {
  const square = document.createElement('div');
  square.className = 'square'

  square.classList.add('square' + squareNumbers);
  square.squareId = squareId;
  square.innerHTML = `<span>${squareId}</span>`;

  return square;

}

function createBombs(squareNumbers) {
  const bombsId = [];

  while(bombsId.length < bombsNumber){
    const bomb = generateRandomNumber(1, squareNumbers);
    if (!bombsId.includes(bomb)) {
      bombsId.push(bomb);
    }
  }

  return bombsId;
}


function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function reset() {
  main.innerText = '';
}