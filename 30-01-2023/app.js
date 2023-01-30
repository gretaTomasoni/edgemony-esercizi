const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Pagina iniziale");
  else if (req.url === "/studenti") res.end("Studenti");
  else if (req.url === "/corsi") res.end("Corsi");
  else {
    res.writeHead(404);
    res.end("Pagina non trovata");
  }
});

server.listen(5000);
