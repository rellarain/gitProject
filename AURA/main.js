"use strict"

var x = 0;
while (x <= 100) {console.log(x++);
    if (x%3 === 0 && x%5 === 0) {console.log(x++ + " fizzbuzz")};
    if (x%3 === 0) {console.log(x++ + " fizz")};
    if (x%5 === 0) {console.log(x++ + " buzz")};};
