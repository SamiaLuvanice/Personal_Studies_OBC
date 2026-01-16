const { publicDecrypt } = require("crypto");
const express = require("express");
const path = require("path");
const router = require("./routes");

const app = express();

//Configuração do EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


//Configuração dos arquivos estáticos (CSS, JS, Imagens)
app.use(express.static("public"));

//Configuração para ler dados da requisição
app.use(express.urlencoded({ extended: true }));

//Rotas da aplicação
app.use(router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
