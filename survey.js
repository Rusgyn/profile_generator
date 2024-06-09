// a quick survey app which asks the user a bunch of questions like their favourite music, activity, food, sport, etc. It will then generate a profile description for them to use online.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What do you think of Node.js? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});