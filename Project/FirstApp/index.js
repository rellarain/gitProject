window.onload = function() {
   var submit = document.querySelector(".submit");
   
   submit.addEventListener("click", function selector(){
      var content1 = document.querySelector(".sunSignEntry").value;
      var content2 = document.querySelector(".moonSignEntry").value;
      var content3 = document.querySelector(".risingSignEntry").value;
    console.log(content1);
    console.log(content2);
    console.log(content3);
   });

}

//include a type, mode, and description of each sign
//in the summary create a quantity of each type and mode
