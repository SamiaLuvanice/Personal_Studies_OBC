const fs = require("node:fs");

const filename = "./arquivo.html";

const exists = fs.existsSync(filename);

if (exists) {
  fs.readFile(filename, "utf-8", (error, data) => {
    if (error) {
      console.error("Erro ao ler o arquivo:", error.message);
      return;
    }
    const entries = data.split("\n");
    console.log("Conteúdo do arquivo:", entries);
    entries.forEach((entry) => console.log(entry));
  });
} else {
  console.log("O arquivo não existe.");
}

//try {
//  const data = fs.readFileSync("./arquivo.txt", "utf-8");
//  console.log("Conteúdo do arquivo:", data);
//} catch (error) {
//  console.error("Erro ao ler o arquivo:", error.message);
//}
