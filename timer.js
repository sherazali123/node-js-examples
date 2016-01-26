// a to calculate the percentage of the process for required time
"use strict";
// set time out
var waitTimer = 3000,
    // initiate current time with 0
    currentTime = 0,
    // repeat percent after the mentioned interval
    waitInterval = 100,
    // initiate the percentage with 0
    percentWaited = 0,
    // write percentage to the terminal and move cursor to 0th line 
    percentage = function (p) {
        // clear line in terminal
        process.stdout.clearLine();
        // move cursor to 0th line in terminal
        process.stdout.cursorTo(0);
        // write template string to the terminal
        process.stdout.write(`waiting... ${p}%`);
    };

// assign interval to the variable so we can clear it later. interval is being repeated after the mentioned interbal time
var interval = setInterval(function() {
    // change current time after the interval
    currentTime += waitInterval;
    // find percentage of current time from the total time out
    percentWaited = Math.floor( (currentTime / waitTimer) * 100 );
    // call function percentage and write it into the terminal
    percentage(percentWaited);
}, waitInterval);

setTimeout(function() {
    // when the time is out clear interval
    clearInterval(interval);
    // tell terminal the time is out (it's 100%)
    percentage(100);
    // Tell terminal that it's time is out
    process.stdout.write(`\n Done!`); 
}, waitTimer);

// initiate percentage with 0 percent
percentage(percentWaited);