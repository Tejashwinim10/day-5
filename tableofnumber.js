
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter a number: ', (input) => {
  const number = parseInt(input, 10);

  if (isNaN(number)) {
    console.log('Please provide a valid number.');
  } else {
    console.log(`Multiplication table of ${number}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
  }
  rl.close(); 
});

  