//TOGGLE PASSWORD VISIBILITY =================================================================================
      //this function will be used in all login/registration pages where the id="myPassword" 
      function myFunction(){
        var x = document.getElementById("myPassword");
        var y = document.getElementById("myPassword2");
    
        if (x.type === "password" ){
            x.type = "text";
            y.type = "text";
        } else {
            x.type = "password";
            y.type = "password";
        }
    }
//ENDOF TOGGLE PASSWORD VISIBILITY ==============================================================================