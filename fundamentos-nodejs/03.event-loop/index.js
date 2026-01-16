const fs = require('fs');
console.log('Starting the application...');

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});

console.log('Application finished.');