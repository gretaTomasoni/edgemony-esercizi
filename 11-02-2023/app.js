const express = require("express");
const router = require("./router");

const app = express();
app.set("view engine", "hbs");

app.use("/", router);
app.use("/about", router);
app.use("/contatti", router);
app.use("/formazione", router);
app.use("/web-design", router);
app.use("/error", router);
app.use("/login", router);
app.use("/profilo", router);
app.use("/warning", router);
app.use("/logout", router);

const PORT = 4040;

app.listen(PORT, () => {
  console.log(`Server attivo sulla porta ${PORT}`);
});
