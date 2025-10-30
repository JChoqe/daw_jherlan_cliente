const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "index.html");
  const html = fs.readFileSync(filePath, "utf8");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
