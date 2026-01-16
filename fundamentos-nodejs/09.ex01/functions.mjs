import fs from 'node:fs';

export function createFile(text) {
  return new Promise((resolve, reject) => {
    fs.writeFile("meuarquivo.txt", text, (error) => {
      if (error) {
        reject('Erro ao criar o arquivo');
      } else {
        resolve();
      }
    })
  })
}

export function showFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("meuarquivo.txt", 'utf8', (error, text) => {
      if(error) {
        reject('Erro ao ler o arquivo');
      } else {
        resolve(text);
    }
    })
  })
}

export function updateFile(newText) {
  return new Promise((resolve, reject) => {
    fs.writeFile("meuarquivo.txt", newText, (error) => {
      if (error) {
        reject('Erro ao atualizar o arquivo');
      } else {
        resolve();
      }
    }
    )
  })
}

export function deleteFile() {
  return new Promise((resolve, reject) => {
  fs.unlink("meuarquivo.txt", (error) => {
    if (error) {
      reject('Erro ao deletar o arquivo');
    } else {
      resolve();
    }
  })
})
}
