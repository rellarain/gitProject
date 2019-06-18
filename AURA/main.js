"use strict"

var x = 0;
while (x <= 100) {
    if (x%3 === 0 && x%5 === 0) {
        console.log(x++, "fizzbuzz");
    }
    else if (x%3 === 0) {
        console.log(x++, "fizz");
    }
    else if (x%5 === 0) {
        console.log(x++, "buzz");
    }
    else {console.log(x++);}
};
