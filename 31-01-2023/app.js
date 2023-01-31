// e poi una domanda su cui riflettere: è possibile creare nelle pagine web un collegamento
// fra le pagine nel modo solito, cioè usando <a href="#">.....</a> considerando la particolare
// struttura dei percorsi in Node? Provate un po' da soli, poi domani verifichiamo.

const http = require("http");
const os = require("os");
const fs = require("fs");

const prodotti = fs.readFileSync("prodotti.html");
const cliente = fs.readFileSync("cliente.html");

let utente = os.userInfo();
let piattaforma = os.platform();
let data = new Date();

let messaggio = `<!doctype html>
<html>
<head>
</head>
<body>
<div>
l'utente <b>${utente.username} </b> 
ha avviato l'app il giorno 
<b>${data}</b> usando la piattaforma: ${piattaforma} </div>
<div><a href="./cliente">CLIENTE</a></div>
<div><a href="./prodotti">PRODOTTI</a></div>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end(messaggio);
  else if (req.url === "/prodotti") res.end(prodotti);
  else if (req.url === "/cliente") res.end(cliente);
  else {
    res.writeHead(404);
    res.end("pagina non trovata");
  }
});

server.listen(3001);
console.log(messaggio);
