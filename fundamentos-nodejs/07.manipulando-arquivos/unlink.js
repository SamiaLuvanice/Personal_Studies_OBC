const fs = require("fs");

fs.unlink("./arquivo.csv", (error) => {
  if (error) {
    console.error("Erro ao deletar o arquivo:", error.message);
    return;
  }
  console.log("Arquivo deletado com sucesso!");
});
