const http = require("http");
const fs = require("fs");
const libri = require("./books");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let html = fs.readFileSync("index.html");
    res.end(html);
  } else if (req.url === "/chisono") {
    res.writeHead(200, { "Content-Type": "text/html" });
    let chisono = fs.readFileSync("chisono.html");
    res.end(chisono);
  } else if (req.url === "/api/books") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(libri));
  }
});

server.listen(8181);

console.log("Server attivo");
