var readline = require("readline");
var rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
});

 rl.question("What is your sun sign?\n", function(answer){
   finished1(answer);
   rl.question("What is your moon sign?\n", function(answer){
      finished2(answer);
      rl.question("What is your rising sign?\n", function(answer){
         finished3(answer);
         rl.close();
      });
   });
 });
      function finished1(value) {
         console.log("Okay, so you are a " + value +" sun sign.")
      };
      function finished2(value) {
         console.log("Okay, so you are a " + value +" moon sign.")
      };
      function finished3(value) {
         console.log("Okay, so you are a " + value +" rising sign.")
};
