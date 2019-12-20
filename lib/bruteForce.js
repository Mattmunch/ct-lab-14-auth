const fs = require('fs');
let rawPasswords = fs.readFileSync(__dirname + '/password.txt', 'utf8');
let passwords = rawPasswords.split('\n');

console.log(passwords);
