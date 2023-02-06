
// Change the type of input to password or text

    /*   function Toggle(){
            var temp = document.querySelector(".show");
            if (temp.type === "password"){
                temp.type = "text";
            }
            else {
                temp.type = "password";
            }
        }*/


        let accountStatus = false;

        let upper = function() {
          let getAccount = document.querySelector("#overlay");
          let getForm = document.querySelector(".signin_form");

          if (accountStatus === false) {
            getForm.style.visibility = "visible";
            getAccount.style.width = "100%";
            getAccount.style.opacity = "4";

            accountStatus = true;
          }

          else if (accountStatus === true) {
            getAccount.style.width = "0px";


            getAccount.style.visibility = "hidden";

            accountStatus = false;
          }
        }
