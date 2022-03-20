const questions = [
  'What is your name?',
  'What is your age?',
  'Are you gay?',
];

const answers = [];

const ask = (q) => {
  process.stdout.write(`\n ${questions[q]}`);
  process.stdout.write(' > ');
};

process.stdin.on('data', data => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on('exit', () => {
  process.stdout.write(`\n ${answers[0]}, you are ${answers[1]} years old and you are gay! \n\n\n`);
});

ask(0);