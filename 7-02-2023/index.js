const express = require("express");
const { users } = require("./data");
const app = express();
const PORT = 3000;

//middleware per risorse statiche
// app.use(express.static('./public'))

//middleware urlencoded estendono l'uso degli url a tutti gli oggetti compresi sorgenti di dati da oggetti innestati e da form
//middleware json estende la gestione del formato per tutti i metodi a livello globale dell'applicazione
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//GET
app.get("/api/users", (req, res) => {
  const filteredUsers = users.map((user) => {
    const { id, name, email } = user;
    return { id, name, email };
  });
  res.status(200).json({ success: true, data: filteredUsers });
});

//POST
app.post("/api/users", (req, res) => {
  const { id, name, email } = req.body;

  if (!id || !name || !email) {
    return res
      .status(400)
      .json({ success: false, msg: "non trovo un dato necessario" });
  }
  return res
    .status(200)
    .json({ success: true, users: { id: id, name: name, email: email } });
});

app.listen(PORT, () => {
  console.log(`Server ascolta su porta ${PORT}`);
});
