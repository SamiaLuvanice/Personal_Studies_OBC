const path = require('node:path');

const dir = "src";
const file = "app.js";

// Juntando segmentos de caminho
const fullPath = path.join(__dirname, dir, file);
console.log(fullPath);
console.log('---------------------');

const relativePath = "../arquivos/relatorio.pdf";

// Convertendo caminho relativo para absoluto
const absolutePath = path.resolve(__dirname, relativePath);
console.log(absolutePath);
console.log('---------------------');

// Extraindo o nome do arquivo de um caminho
const fileName = path.basename(absolutePath);
console.log(fileName);
console.log('---------------------');

// Extraindo a extensão do arquivo de um caminho
const ext = path.extname(absolutePath);
console.log(ext);
