const express = require("express");
const PORT = 3000;
const { books } = require("./books");
const authorize = require("./auth");

const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/public" });
});

app.get("/books", (req, res) => {
  res.json(books);
});

// visualizza solo alcuni dei libri - pagina protetta
app.get("/filtered-books", authorize, (req, res) => {
  const newBook = books.filter((book) => {
    if (book.year >= 1950) return book;
  });
  res.json(newBook);
});

app.listen(PORT, () => {
  console.log(`Server ascolta sulla porta ${PORT}`);
});
