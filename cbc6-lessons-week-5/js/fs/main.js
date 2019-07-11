var { rf } = require('./readFile.js');
var { wf } = require('./writeFile.js');
var fs = require('fs');

var { userName, weatherQuestion } = require('./input.js');

var output = "";

userName() 
    .then(function(userName) {
        output += userName;
    })
    .then(weatherQuestion)
    .then(function(answer) {
        output += ": " + answer + "\n";
    })
    .then(function() {
        wf(output);
    })
    .then(function() {
        output.toString();
        var statement = output.split(":");
        var finalAnswer = console.log(statement[0]+"lives in a place that is"+statement[1]+"!");
        wf(finalAnswer);
        });   
    

   
