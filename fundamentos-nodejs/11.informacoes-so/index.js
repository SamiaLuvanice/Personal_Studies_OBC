const os = require('node:os');

const platforma = os.platform();
console.log(`Sistema Operacional: ${platforma}`);

const arquitetura = os.arch();
console.log(`Arquitetura da CPU: ${arquitetura}`);

const processadores = os.cpus();
console.log(`Número de Processadores: ${processadores.length}`);

const memoria = os.totalmem();
console.log(`Memória Total: ${memoria / 1024 / 1024 / 1024} GB`);

const memoriaLivre = os.freemem();
console.log(`Memória Livre: ${memoriaLivre / 1024 / 1024 / 1024} GB`);