const http = require("http");
const PORT = 3001;

let home = "Home";
let articles = "pagina articoli";
let comments = "pagina commenti";
let users = "pagina utenti";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200);
    res.end(home);
  } else if (req.url === "/articoli") {
    res.writeHead(200);
    res.end(`Questa e' la ${articles}`);
  } else if (req.url === "/commenti") {
    res.writeHead(200);
    res.end(`Questa e' la ${comments}`);
  } else if (req.url === "/utenti") {
    res.writeHead(200);
    res.end(`Questa e' la ${users}`);
  } else {
    res.writeHead(404);
    res.end("Pagina non trovata");
  }
});

server.listen(PORT);
console.log(`Porta ${PORT}`);
