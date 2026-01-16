const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("Servidor Express funcionando! \n Você está na Página Inicial.");
});

server.get("/artigos", (req, res) => {
  res.send("Você está na Página de Artigos.");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
