const express = require("express");
const hbs = require("hbs");

const router = express.Router();
router.use(express.static("./public"));

hbs.registerPartials(__dirname + "/views/partials");

router.get("/", (req, res) => {
  res.render("index", {
    titolo: "Home",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    titolo: "About",
  });
});

router.get("/contatti", (req, res) => {
  res.render("contatti", {
    titolo: "Contatti",
  });
});

router.get("/formazione", (req, res) => {
  res.render("formazione", {
    titolo: "Formazione",
  });
});

router.get("/web-design", (req, res) => {
  res.render("web-design", {
    titolo: "Web design",
  });
});

router.all("*", (req, res) => {
  res.status(404).render("error", {
    titolo: "Error",
  });
});

module.exports = router;
