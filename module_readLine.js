// an example to study module readline

// intiate readline module
var readLine = require('readline'),
    // create readline interface to use user questions and prompt
    rl = readLine.createInterface(process.stdin, process.stdout),
    // a javascript object to keep record of user's answers
    answer = {
        love: '', // may be yes or no
        with: []  // array of people you love
    };

// ask a question, an answer will be passed into the callback
rl.question("Do you love? (yes or no)", function (ans) {
    // clean the answer if have empty spaces at borders
    var cleanAnswer = ans.toLowerCase().trim();
    // case for possible answers
    switch(cleanAnswer) {
        case "yes":
            // assign an answer to global answer
            answer.love = cleanAnswer;
            // setup prompt and ask another question
            rl.setPrompt("Who do you love?");
            // popup the question in terminal
            rl.prompt();
            // on answering the prompt, answer passed in the callback
            rl.on('line',  function (love) {
                // clean the answer
                var cleanLove = love.trim();
                // close the process if user entered exit
                if(cleanLove.toLowerCase() === 'exit'){
                    // close process
                    rl.close();
                } else {
                    // push answers in global answer
                    answer.with.push(cleanLove);
                    // setup prompt and ask another question
                    rl.setPrompt("You love some else? (exit to leave)");
                    // popup the question in terminal
                    rl.prompt();
                }
            });
            break;
        case "no":
            // assign an answer to global answer
            answer.love = cleanAnswer;
            rl.close();
            break;
        default:
            rl.close();
            break;
    }
});
// will be triggered when process is closed at some level
rl.on('close', function () {
    // print answers only if user entered (yes or no)
    if(answer.love){
        // log answer yes or no as first parameter and array as json of you love with 
        console.log("You answered %s and you love with %j", answer.love, (answer.with.length > 0) ? answer.with : "noone");
    }
});