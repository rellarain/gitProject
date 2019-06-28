<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <script>
      function validateform() {
         var x = document.forms["myForm"]["fname"].value;
         if (x == "") {
            alert("name must be filled out");
            return false;
         }
      }
   </script>
   <title>Document</title>
</head>
<body>
   <form name = "myForm" action="/action_page.php" onsumbit="return validateform()" method="post"> <!--form method is: get = parameters added in the URL (not secure); post= no parameters in the URL, used for posting to a server--> 
      <!--action is the destination-->
      <!--method-->
      Name: <input type="text" name="fname">
      <input type="submit" value="Submit">
   </form>
</body>
</html>

<!--
   HTTP: Hypertext Transfer Protocol
      used for sending requests and responses for hypertext documents (xml, json too   )
-->