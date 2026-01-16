const http = require("http");

const server = http.createServer((req, res) => {
  const path = req.url;

  switch (path) {
    case "/":
      res.writeHead(200);
      res.write("Página Inicial");
      break;
    case "/artigos":
      res.writeHead(200);
      res.write("Página de Artigos");
      break;
    default:
      res.writeHead(404);
      res.write("Página Não Encontrada");
      break;
  }

  res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
