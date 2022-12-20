// ESERCIZIO 1

// Sulla base della lezione del giorno, scrivere un array inizialmente vuoto,
// e aggiungere al suo interno dieci elementi di tipo string a scelta,
// rispettando i seguenti punti:
// - utilizzare il ciclo for classico
// - sarà l'utente ad inserire queste stringhe (prompt)
// - alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console

let userNames = [];
for (let i = 0; i < 10; i++) {
  userNames.push(prompt("Inserisci un elemento di tipo stringa"));
}
console.log(userNames);

// AVANZATO

// Riscrivere l'esercizio sopra utilizzando le altre due versioni minimal del ciclo for

// (for in)
// for (let userIndex in userNames) {
//   console.log(userIndex);
// }

// (for of)
// for (let userValue of userNames) {
//   console.log(userValue);
// }
