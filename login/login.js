function login() {
  let user, pass;
  user = document.getElementById("inputEmail4")
  pass = document.getElementById("inputPassword")

  if (user == "elizabeth@gmail.com" && pass == "1234" || user == "Karla@gmail.com" && pass === "123")  {

    window.location = "./index.html";

  }

}