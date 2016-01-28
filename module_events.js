// this is to learn module events and it's function constructor EventEmitter

// create an object of EventEmitter
var EventEmitter = require('events').EventEmitter,
    // inculde util to use javascript prototye inheritence
    util = require('util');

// sum function constructor
var Sum = function (a, b) {
    this.a = a;
    this.b = b;
    this.result = a + b;
}
// use EventEmitter in the prototype of sum constructor
util.inherits(Sum, EventEmitter);

// create an object of sum constructor

var sum = new Sum(6, 7);

// event listen to execute sum function
sum.on('execute', function () {
   console.log(`Expression: ${this.a} + ${this.b} = ${this.result}`);
});

// trigger an execute event
sum.emit('execute');