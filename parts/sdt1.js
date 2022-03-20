const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Why?\n', (answer) => {
  console.log(`Maybe ${answer}, maybe something else :D`);
  rl.close();
});