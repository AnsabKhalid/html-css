

let objPeople = [
  {
    username: "ryu",
    password: "hadouken"
  },
  {
    username: "jin",
    password: "Electric"
  }
]


let logg = function() {
  let username = document.querySelector(".username").value
  let password = document.querySelector(".password").value

  for (var i = 0; i < objPeople.length; i++) {
    if (username == objPeople[i].username && password == objPeople[i].password) {
      console.log(username + " is logged in")
      return
    }
  }

  console.log("incorect username or password");
}

let objRegis = [
  {
    fir_nam: "hasan",
    las_nam:   "khalid",
    email:   "hasan444",
    new_Pass:   "hasan444"
  }
]

let resign = function() {
  let firstName = document.querySelector(".fir_nam").value
  let lastName = document.querySelector(".las_nam").value
  let email = document.querySelector(".email").value
  let newPassword = document.querySelector(".new_pass").value

  let signing = {
    fir_nam: registerFirstName,
    las_nam: registerLastName,
    email: registerEmail,
    new_Pass: registerPassword
  }
  objRegis.push(signing);
  console.log(objRegis);
}
