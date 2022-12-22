//
// ----------- ESERCIZIO 1

/* Sulla base della lezione del giorno, creare una nuova funzione che funzioni esattamente 
come il metodo parseIntche preso un numero come parametro lo ritorni senza virgola, 
es: 23.23323 => 23
Al fine di risolvere l'esercizio non utilizzare il parseInt chiaramente, 
ma trovare una alternativa possibile, già vista a lezione oppure nuova cercando sulla rete.
L'esercizio inoltre deve svilupparsi nell'osservanza dei concetti riguardo 
allo scope in javascript, quindi attenzione alla tipologia di varibili (var, let e const).*/

const decimal = 24.73323;
console.log(decimal);

// // Math.trunc -> Returns the integral part of the a numeric expression, x, removing any fractional digits. If x is already an integer, the result is x.
// const number = Math.trunc(decimal);
// console.log(number);

// // Math.ceil -> Returns the smallest integer greater than or equal to its numeric argument.
// const number = Math.ceil(decimal);
// console.log(number);

// // Math.floor -> Returns the greatest integer less than or equal to its numeric argument.
// const number = Math.floor(decimal);
// console.log(number);

// // Math.round -> Returns a supplied numeric expression rounded to the nearest integer.
// const number = Math.round(decimal);
// console.log(number);

function number() {
  const notDecimal = Math.round(decimal);
  return notDecimal;
}
number();
console.log(number());

//
// ----------- AVANZATO

/* Creare un array di oggetti e processarne i valori. Bisogna creare una funzione che:
preso come argomento l'array di oggetti, mostri in tre console.log le seguenti tipologie, 
per ogni oggetto: title, price e count.
L'oggetto in questione lo si trova qui in basso.*/

const product = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
];
console.log(product);

function calculator() {
  for (let x = 0; x < product.length; x++) {
    console.log(product[x].title);
    console.log(product[x].price);
    console.log(product[x].rating.count);
  }
}
calculator();

//prove per arrivare alla soluzione sopra:

// let productOne = product[0];
// let productTitleOne = productOne.title;
// console.log(productTitleOne);

// function calculator(x) {
//   console.log(product[x].title);
//   console.log(product[x].price);
//   console.log(product[x].rating.count);
// }
// calculator(0);
// calculator(1);
// calculator(2);
// calculator(3);
// calculator(4);
