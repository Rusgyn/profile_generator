const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = [];

process.stdout.write("\n\t\tDISCLAIMER\n\nYour answers will be held in strict confidentiality and will be used only for the purposes of this study. The results will be reported in aggregate form only, and cannot be identified individually.\n\nThere are 7 survey questions only. Let's start.\n\n");

rl.question('1.What\'s your name? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}\n`);
  answers.push("Survey respondent name is " + answer);

  rl.question('2. What\'s an activity you like doing? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}\n`);
    answers.push("Like doing " + answer);

    rl.question('3. What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}\n`);
      answers.push("Like to listen " + answer + " while doing an activity.");

      rl.question('4. Which meal is your favourite ? ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}\n`);
        answers.push("The favourite meal is " + answer);

        rl.question('5. What\'s your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}\n`);
          answers.push("Loves to eat " + answer);

          rl.question('6. Which sport is your absolute favourite? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}\n`);
            answers.push("Aside from that, our respondent is sporty and loves " + answer);

            rl.question('7. What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}\n`);
              answers.push("Above all, has the superpower " + answer);

              console.log(`\n\n${answers.join('. ')}\n\nThank you for participating the survey.\n`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
