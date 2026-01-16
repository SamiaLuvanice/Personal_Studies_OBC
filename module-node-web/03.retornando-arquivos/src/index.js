const express = require("express");

const app = express();

app.use(express.static("public")); // Servir arquivos estáticos da pasta "public"

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
