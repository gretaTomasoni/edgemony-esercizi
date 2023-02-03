const express = require("express");

const app = express();
const PORT = 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
  //   res.send("home page");
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/piante", (req, res) => {
  //   res.send("home page");
  res.sendFile(__dirname + "/public/piante.html");
});

app.get("/chisono", (req, res) => {
  //   res.send("home page");
  res.sendFile(__dirname + "/public/chisono.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(PORT, () => {
  console.log(`server attivo alla porta ${PORT}`);
});
