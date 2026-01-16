import { createFile, deleteFile, showFile, updateFile } from './functions.mjs';

async function start() {
await createFile("Conteúdo inicial do meu arquivo");
await showFile();
console.log('---');
await updateFile("Novo conteúdo do meu arquivo");
console.log(await showFile());
console.log('---');
await deleteFile();
}

start();
