import { todos, myTodos } from "./mocks.js";

// * Esercizio 1

let allId = [];
todos.forEach((arrItem) => {
  return allId.push(arrItem.id);
});
// console.log(allId);

// metodo map -> memorizzi in una variabile tutti gli userId di ogni singolo
//               elemento e quindi richiamarli con un console.log a parte;
let allUserId = [];
todos.map((arrItem) => {
  return allUserId.push(arrItem.userId);
});
// console.log(allUserId);

// metodo filter -> stampi in console.log i soli ID di ogni singolo elemento
//                  i cui valori siano maggiori o uguali a 4.
const arrIdBiggerFour = todos.filter((arrItem) => {
  return arrItem.id >= 4;
});
let idBiggerFour = arrIdBiggerFour.map((arrItem) => {
  return arrItem.id;
});
// console.log(idBiggerFour);

// * Esercizio Avanzato
/* Creare una todo list personale, con logica in linea a quanto visto a lezione 
e applicando lo stile preferito */

const myTodoGenerator = function (myText, isCompleted, parent) {
  const mySingleTodo = document.createElement("div");
  const myTodoText = document.createElement("h4");
  const isCompletedEl = document.createElement("div");

  mySingleTodo.className = "my_single_todo";
  myTodoText.className = "my_todo_text";
  isCompletedEl.className = "circle_check";

  myTodoText.textContent = myText;
  isCompleted ? isCompletedEl.classList.add("completed") : null;

  isCompletedEl.addEventListener("click", () => {
    isCompletedEl.classList.toggle("completed");
  });

  mySingleTodo.append(isCompletedEl, myTodoText);
  parent.appendChild(mySingleTodo);
};

const myTodoList = document.createElement("div");
myTodoList.className = "my_todo_list";

myTodos.map((todo) => myTodoGenerator(todo.todo, todo.completed, myTodoList));
document.body.appendChild(myTodoList);
