var submit = document.querySelector(".submit");
var content1 = document.querySelector(".sunSignEntry");
var content2 = document.querySelector(".moonSignEntry");
var content3 = document.querySelector(".risingSignEntry");

submit.addEventListener("click", typeSelector);

function typeSelector(){
   var sun = content1.value;
   var moon = content2.value;
   var rising = content3.value;
   console.log("Your sun sign is " + sun + ".");
   console.log("Your moon sign is " + moon + ".");
   console.log("Your rising sign is " + rising + ".");
}