// An example of asking questions in terminal just for demonstrating process
"use strict";
// question to ask
var question = [
    "What's your name?",
    "What do you do do?",
    "Who do you love?"
];

// initialize the answers array
var answers = [];

// write the question into the terminal
function ask(i) {
    process.stdout.write(`${question[i]} \n`);
}

// add listener to the asked question
process.stdin.on('data', function(data){
    // push answer to answers array
   answers.push(data.toString().trim());
    // ask question until all the questions has been asked.\
    if(answers.length < question.length){
        // ask next question
        ask(answers.length);
    } else {
        // exit the process if all the questions have been asked
        process.exit();
    }
});

// trigger event when the process will exit
process.on('exit', function(){
    // write template string in the terminal with all the answers
    process.stdout.write(`Full answer: My name is ${answers[0]}, I do ${answers[1]} and I love ${answers[2]}\n`);
});

// ask first question and intiate the process
ask(0);