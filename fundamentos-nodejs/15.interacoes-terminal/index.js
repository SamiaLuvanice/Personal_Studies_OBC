// process.stdout.write("Olá, seja bem-vindo ao curso de Node.js!\n");

// process.stdin.on("data", (data) => {
//   process.stdout.write(`Você digitou: ${data.toString()}`);
// });

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.on("line", (input) => {
//     rl.write(`Você digitou: ${input}`);
// });

// rl.question("Qual o seu nome? \n", (answer) => {
//   rl.write(`Olá, ${answer}!\n`);
//   rl.close();
// });

// rl.once("close", () => {
//   rl.write("Até mais!\n");
// //   process.exit(0);
// });

rl.on("SIGINT", () => {
  rl.question("Tem certeza que deseja sair? (s/n) ", (answer) => {
    if (answer.trim().toLowerCase() === "s") {
      rl.close();
    } else {
      rl.write("Continuando a execução...\n");
    }
  });
});
