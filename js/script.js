// ****L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// **BONUS:**
// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// ****2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
// **Consigli del giorno:** :party_wizard:
// ****Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Le validazioni e i controlli possiamo farli anche in un secondo momento.


const container = document.querySelector('.container');

let squareForRow;

// select levels
const select = document.querySelector('[name="levels"]');


document.getElementById('start').addEventListener('click', function(){
  squareForRow = document.querySelector('[name="levels"]').value;
  container.innerHTML = '';
  init(squareForRow);
})


function init(numElements) {
  const totalSquares = numElements * numElements;
  for(let i = 0; i < totalSquares; i++) {
 
    createSquare(i)
  }
  
}


function createSquare(idSquare) {

  const square = document.createElement('div');
  square.className = 'square';
  square.innerText = idSquare + 1;
  square.style.width = generateCalc();
  square.style.height = generateCalc();
  square.addEventListener('click', clickSquare);
  container.append(square);
}

function generateCalc() {
  return `calc(100% / ${squareForRow})`;
}

function clickSquare() {
  console.log(this.innerText);
  this.classList.add('azure');
}