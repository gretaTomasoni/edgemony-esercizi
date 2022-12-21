//
// ----------- ESERCIZIO 1

/* Sulla base della lezione del giorno:
scrivere una prima funzione che presa un stringa come argomento,
ritorni la stessa stringa + la parola bootcamp; */

let string = prompt("Inserisci una stringa");

function somma(string, word2) {
  return string + word2;
}
let totale = somma(string, " bootcamp");
console.log(totale);

//
// ----------- ESERCIZIO 2

/* Scrivere un oggetto col vostro nome che vi identifichi in proprietà 
(nome, cognome, ecc...) e per metodi (es. possono anche essere semplici 
console.log di voi che eseguite un hobby) */

const gretaTomasoni = {
  name: "Greta", // proprietà
  surname: "Tomasoni", // proprietà
  dateOfBirth: "05-11-1998", // proprietà
  female: true, // proprietà
  // metodo (ovvero una funzione ma sita all'interno di un oggetto)
  hobbyOne: function () {
    console.log("Mi piace guardare film e serie tv");
  },
};
console.log(gretaTomasoni);
gretaTomasoni.hobbyOne();

//
// ----------- AVANZATO

/* Scrivere una funzione calculator che preso come argomento una operazione 
e due numeri, ritorni alla fine il numero risultato dall'operazione scelta.

Provare ad aggiungere i due numeri singolarmente (num1, num2) 
e anche in coppia dentro un array ([num1, num2]). */

// L'UTENTE INSERISCE OPERAZIONE E I DUE NUMERI
// function calculator() {
//   let operation = prompt("Inserisci operazione matematica");
//   let num1 = +prompt("Inserisci il primo numero");
//   let num2 = +prompt("Inserisci il secondo numero");

// L'UTENTE INSERISCE SOLO L'OPERAIZONE
function calculator(num1, num2) {
  let operation = prompt("Inserisci operazione matematica");

  if (operation === "+") {
    console.log(num1 + num2);
  } else if (operation === "-") {
    console.log(num1 - num2);
  } else if (operation === "*") {
    console.log(num1 * num2);
  } else if (operation === "/") {
    console.log(num1 / num2);
  }
}
calculator(12, 45);

// FUNZIONE CON ARRAY
function calculator(operation, [num1, num2]) {
  if (operation === "+") {
    return num1 + num2;
  } else if (operation === "-") {
    return num1 - num2;
  } else if (operation === "*") {
    return num1 * num2;
  } else if (operation === "/") {
    return num1 / num2;
  }
}
console.log(calculator("+", [12, 34]));
console.log(calculator("-", [12, 34]));
console.log(calculator("*", [12, 34]));
console.log(calculator("/", [12, 34]));
