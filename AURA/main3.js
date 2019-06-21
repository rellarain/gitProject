"use strict"

function add(a,b) {
    var answer = a + b;
    console.log(answer);
};
add(6,7);
//------------------------------------------------------------
function multiply(c,d) {
    var answer = c * d;
    console.log(answer);
}

multiply(5,6);
//--------------------------------------------------------------------
function lister(e,f) {
    for (e=e+1; e<f; ++e) {
        console.log(e);
    };
}

lister(20,40)
//-----------------------------------------------------------------------
var g = 5;

function divider(h) {
    var answer = (g*h)/h;
    console.log(answer);
}

divider (6);

//--------------------------------------------------------------
//Matcher Challenge


// function matcher() {
//     var user = prompt();
//     var getRandom = Math.floor(Math.random()*10);
//         if (user == getRandom) {
//             console.log("Success")
//         }
//         else {
//             console.log("Failure")
//         };
// }

// matcher();

////-------------------------------------------- higher or lower; three tries


function matcher2 () {
    var input = prompt();
    var output = Math.floor(Math.random()*5);
    var attempt = 0;
    for (attempt=0; attempt<=3; attempt++) {
        if (input === output) {console.log("Success")}
        else if (input > output) {console.log("Higher" + prompt()) + attempt++}
        else if (input < output) {console.log("Lower" + prompt()) + attempt++};
    }
}  