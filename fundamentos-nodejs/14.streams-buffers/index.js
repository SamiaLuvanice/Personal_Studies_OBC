const fs = require("node:fs");

//const streamLeitura = fs.createReadStream("arquivo.txt");
const streamLeitura = fs.createReadStream("coded.jpg") // arquivo binário
const buffer = [];

streamLeitura.on("data", (chuck) => {
  buffer.push(chuck);
  console.log(`Recebido ${buffer.length} pedaços de informação.`);
});

streamLeitura.on("end", () => {
  console.log("Buffer: \n", buffer);
  //const dadosCompletos = Buffer.concat(buffer);
  //console.log("Dados completos: \n", dadosCompletos);
});
