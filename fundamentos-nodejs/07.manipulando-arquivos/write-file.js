const fs = require("node:fs");

const content = "Content to be writen to the file.";
fs.writeFile("./arquivo.txt", content, "utf-8", (error) => {
  if (error) {
    console.error("Erro ao escrever o arquivo:", error.message);
    return;
  }
  console.log("Arquivo escrito com sucesso de forma sincrona!");
});

//try {
//  fs.writeFileSync("./arquivo.txt", "Hello, World!", "utf-8");
//  console.log("Arquivo criado com sucesso!");
//} catch (error) {
//  console.error("Erro ao carregar o módulo fs:", error.message);
//}
