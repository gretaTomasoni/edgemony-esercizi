// * ----------- ESERCIZIO 1

/* Sulla base della lezione del giorno, ricreare la calcolatrice fatta 
in passato utilizzando solo arrow functions.
nb. ogni singola operazione sarà una arrow function
Alla fine combinare le varie operazioni in una funzione piu ampia, 
dove all'utente viene data la possibilita di scegliere quale operazione 
effettuare. Siate liberi di aggiungere gli argomenti a piacere, 
come per esempio i numeri, se chiederli all'utente o meno. */

const sum = (num1, num2) => num1 + num2;
const difference = (num1, num2) => num1 - num2;
const product = (num1, num2) => num1 * num2;
const quotient = (num1, num2) => num1 / num2;

let operation = prompt("Inserire operazione (+, -, *, /)");

function calculator(operation, num1, num2) {
  switch (operation) {
    case "+":
      return sum(num1, num2);
      break;
    case "-":
      return difference(num1, num2);
      break;
    case "*":
      return product(num1, num2);
      break;
    case "/":
      return quotient(num1, num2);
      break;
    default:
      console.log("Non è stata inserita un'operazione corretta");
  }
}

console.log(calculator(operation, 12, 4));

// *
// * ----------- AVANZATO

/* Provare a completare l'esercizio sopra applicando qualche callback. 
Anche qui non importa l'impostazione, siate creativi, l'importante 
che si verifichi il caso di una callback. */

function calculatorTwo(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calculatorTwo(34, 12, product));
