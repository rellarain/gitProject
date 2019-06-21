"use strict"

var ListItems = ["eggs", "dog biscuits", "blood oranges", "tampico", "fried chicken", "pickles", "lotion", "mascara", "soap", "poptarts"];
var i = ListItems[i];
for (i=0; i< ListItems.length; i++) {
    console.log(ListItems[i]);
}
//---------------------------------
var LetterList = ["H","A","B","B","E","R","D","A","S","H","E","R","Y"];
var g = LetterList[g];
for (g=0; g<LetterList.length; g++) {
    console.log(LetterList[g]);
    LetterList[g]=LetterList[g].toLowerCase();
}

console.log(LetterList);

//---------------------------------


/* create a string for the user to see current inv 
// string builder variable = strbuild
nested loops (i, j)
    // 1. if j (arr[1])
        // Means quantity
        //strbuild += arr[i][j];
    // 2. else j is at 0
        // means name
// place into prompt
*/

var GrocItems = ["eggs", "dog biscuits", "blood oranges", "tampico", "fried chicken", "pickles", "lotion", "mascara", "soap", "poptarts"];
var GrocQuan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function Pairing (x) {
    x = GrocItems[x];
    y = GrocQuan[x];
    for (x=0; x<= GrocItems.length; x++) {
        console.log(x+y);
    }
}
Pairing();

// function prompter (y, x) {
//     var y = GrocItems[y];
//     var z = GrocInv[z];
//     var GrocPair = y + x;
//     alert("This is the current inventory:");
//     prompt("Place your order in a number below") = "" + purchase;
//     var purchase = GrocInv - purchase;

    
// }

// prompter();