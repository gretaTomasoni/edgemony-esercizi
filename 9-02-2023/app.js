const express = require("express");
const hbs = require("hbs");

const app = express();
const PORT = 3000;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nome: "Greta",
    cognome: "Tomasoni",
    titolo: "Homepage",
    myPreferences: {
      pet: "cat",
      color: "red",
      season: "spring",
    },
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    nome: "Greta",
    cognome: "Tomasoni",
    titolo: "About",
  });
});

app.get("/login", (req, res) => {
  res.render("login", {
    nome: "Greta",
    cognome: "Tomasoni",
    titolo: "Login",
  });
});

app.get("/mi-presento", (req, res) => {
  res.render("mi-presento", {
    nome: "Greta",
    cognome: "Tomasoni",
    titolo: "Mi presento",
  });
});

//! POST PER FORM ---- non funziona
app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    // return res.status(200).render(`Benvenuto/a ${name}`);
    return res.status(200).render("login", {
      nome: name,
    });
  }
  res.status(400).send("per favore, aggiungi il dato");
});

app.listen(PORT, () => {
  console.log(`Server attivo su ${PORT}`);
});
