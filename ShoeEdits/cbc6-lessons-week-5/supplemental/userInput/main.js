var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var question1 = new Promise(function (resolve, reject) {
    rl.question("How're you doing today? ", function(answer) {
        resolve(answer);
    });
});


var question2 = function () {
    return new Promise(function(resolve, reject) {
        rl.question("What did you eat for lunch? ", function(answer) {
            resolve(answer);
            rl.close();
        });
    })
}

question1
    .then(function (result) {
        console.log("Sounds " + result);
    })
    .then(question2)
    .then(function(result) {
       console.log("Yuck sounds " + result + "y");
    })


    