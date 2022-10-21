// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// **Bonus**
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;



// Macroaree;
// 1 Creare la struttura html / css
// 2 Creare la griglia dinamicamente
// 3 Numerare i quadratini
// 4 Gestire il click del quadratino


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