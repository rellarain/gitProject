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


var inventory = [
    ["Eye of Newt", 9], 
    ["Dragon Scales", 16], 
    ["Souls of Children",51], 
    ["Mandrake Root",6], 
    ["Whispering Salts",49], 
    ["Yggdrasil Roots",20], 
    ["Yeti Mints",14], 
    ["Wizard Chinhairs",223], 
    ["Witch's Wart",9], 
    ["Couldron Crusts",26]];
//


customerActions(buildPrompt());