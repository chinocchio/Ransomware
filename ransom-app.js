var encryptor = require('file-encryptor');
const testFolder = './yow/';
var fs = require('fs');

var key = 'My Super Secret Key';

var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });


  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });

// fs.readdirSync(testFolder).forEach(file => {
//     console.log(file);
//     // Encrypt file.
//     encryptor.encryptFile(`${testFolder}/${file}`, `${testFolder}/${file}`.replace('.txt','.dat'), key, function(err) {
//     fs.unlinkSync(`${testFolder}/${file}`);
//     console.log('encryption complete');
//     }); 
//   });

//   fs.readdirSync(testFolder).forEach(file => {
//     console.log(file);
//     // Decrypt file.
//     encryptor.decryptFile(`${testFolder}/${file}`, `${testFolder}/${file}`.replace('.dat','.txt'), key, function(err) {
//     fs.unlinkSync(`${testFolder}/${file}`);
//     console.log('decryption complete');
//     }); 
//   });

