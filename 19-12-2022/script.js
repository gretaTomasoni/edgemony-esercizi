console.log("Hello world!");

let math = prompt("Inserisci il tipo di operazione matematica (ex addizione)");
let firstNumber = prompt("Inserisci il primo valore numerico");
let secondNumber = prompt("Inserisci il secondo valore numerico");

let intFirstNumber = parseInt(firstNumber);
let intSecondNumber = parseInt(secondNumber);

// IF / IF-ELSE / ELSE
if (math === "addizione") {
  console.log(
    firstNumber + "+" + secondNumber + "=" + (intFirstNumber + intSecondNumber)
  );
} else if (math === "sottrazione") {
  console.log(
    firstNumber + "-" + secondNumber + "=" + (intFirstNumber - intSecondNumber)
  );
} else if (math === "moltiplicazione") {
  console.log(
    firstNumber + "*" + secondNumber + "=" + intFirstNumber * intSecondNumber
  );
} else if (math === "divisione") {
  console.log(
    firstNumber + "/" + secondNumber + "=" + intFirstNumber / intSecondNumber
  );
} else if (math === "modulo") {
  console.log(
    firstNumber + "%" + secondNumber + "=" + (intFirstNumber % intSecondNumber)
  );
} else {
  console.log("Il tipo di operazione inserito non è valido");
}

//
//  SWITCH
// switch (math) {
//   case "addizione":
//     console.log(
//       firstNumber +
//         "+" +
//         secondNumber +
//         "=" +
//         (intFirstNumber + intSecondNumber)
//     );
//     break;
//   case "sottrazione":
//     console.log(
//       firstNumber +
//         "-" +
//         secondNumber +
//         "=" +
//         (intFirstNumber - intSecondNumber)
//     );
//     break;
//   case "moltiplicazione":
//     console.log(
//       firstNumber + "*" + secondNumber + "=" + intFirstNumber * intSecondNumber
//     );
//     break;
//   case "divisione":
//     console.log(
//       firstNumber + "/" + secondNumber + "=" + intFirstNumber / intSecondNumber
//     );
//     break;
//   case "modulo":
//     console.log(
//       firstNumber +
//         "%" +
//         secondNumber +
//         "=" +
//         (intFirstNumber % intSecondNumber)
//     );
//     break;
//   default:
//     console.log("Il tipo di operazione inserito non è valido");
// }

//
// OPERATORE TERNARIO
// math === "addizione"
//   ? console.log(
//       firstNumber +
//         "+" +
//         secondNumber +
//         "=" +
//         (intFirstNumber + intSecondNumber)
//     )
//   : console.log("Il tipo di operazione inserito non è un'addizione");

// math === "sottrazione"
//   ? console.log(
//       firstNumber +
//         "-" +
//         secondNumber +
//         "=" +
//         (intFirstNumber - intSecondNumber)
//     )
//   : console.log("Il tipo di operazione inserito non è una sottrazione");

// math === "moltiplicazione"
//   ? console.log(
//       firstNumber + "*" + secondNumber + "=" + intFirstNumber * intSecondNumber
//     )
//   : console.log("Il tipo di operazione inserito non è una moltiplicazione");

// math === "divisione"
//   ? console.log(
//       firstNumber + "/" + secondNumber + "=" + intFirstNumber / intSecondNumber
//     )
//   : console.log("Il tipo di operazione inserito non è una divisione");

// math === "modulo"
//   ? console.log(
//       firstNumber +
//         "%" +
//         secondNumber +
//         "=" +
//         (intFirstNumber % intSecondNumber)
//     )
//   : console.log("Il tipo di operazione inserito non è un modulo");
