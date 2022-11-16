
const firtsName = document.getElementById("inputFirstName");
const lastName = document.getElementById("inputLastName");
const email = document.getElementById("inputEmail4");
const movil = document.getElementById("inputMovil");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");



form.addEventListener("submit", e => {

  e.preventDefault()
  const formData = new FormData(form);


  let warnings = ""
  let entrar = false
  let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/
  let regex = /^\d{3}-\d{3}-\d{3}$/
  parrafo.innerHTML = ""

  if (firtsName.value.length < 6) {
    warnings += `El nombre no es valido <br>`
  }

  if (regexEmail.test(email.value)) {
    warnings += `El email no es valido <br>`
    entrar = true
    localStorage.usuario = email
  }
  if (regex.test(movil.value)) {
    warnings += `El telefono no es valido <br>`
    entrar = true
  }

  if (formData.get("inputPassword4").length < 5) {
    warnings += `La contraseña no es valida <br>`
    entrar = true
    localStorage.usuario = email
  }
  if (entrar) {
    parrafo.innerHTML = warnings
   
  }
  else {
    parrafo.innerHTML = "Registro exitosamente"
  

  }
})



let main = function(){
  captura_boton();
}

let captura_boton =function(){
  document.querySelector("#boton").setAttribute("onclick","dataRead()");

} 

let dataRead = function(){
  console.log("capturar los datos del formulario");
  console.log(
    document.querySelector("#inputFirstName").value,
    document.querySelector("#inputLastName").value,
    document.querySelector("#inputEmail4").value,
    document.querySelector("#inputPassword4").value,
    document.querySelector("#inputMovil").value,
    document.querySelector("#inputAddress2").value,
  );
  let myObject = {
    //clave : valor
    firtsName :document.querySelector("#inputFirstName").value,
    lastName :document.querySelector("#inputLastName").value,
    email :document.querySelector("#inputEmail4").value,
    password :document.querySelector("#inputPassword4").value,
   movil :document.querySelector("#inputMovil").value,
   address :document.querySelector("#inputAddress2").value,
  };
  console.log(myObject);
  //JSON debe ser un String
console.log(JSON.stringify(myObject));
save_localStorage(myObject);

}
 let save_localStorage = function(myObject){
  localStorage.setItem("miInfo", JSON.stringify(myObject));
 }
/// esto fue opcional para ver como funciona el registro y los datos
 let read_localStorage = function(){
  let miInfo = localStorage.getItem("miInfo");
  let myObject = JSON.parse(miInfo);
  console.log(myObject);
  document.querySelector("#inputFirstName").value = myObject.firtsName
  document.querySelector("#inputLastName").value = myObject.lastName
  document.querySelector("#inputEmail4").value = myObject.email
  document.querySelector("#inputPassword4").value = myObject.password
  document.querySelector("#inputMovil").value =  myObject.movil
  document.querySelector("#inputAddress2").value =  myObject.address
 }

 let reset = function(){
  document.querySelector("#inputFirstName").value = "";
  document.querySelector("#inputLastName").value = "";
  document.querySelector("#inputEmail4").value = "";
  document.querySelector("#inputPassword4").value = "";
  document.querySelector("#inputMovil").value = "";
  document.querySelector("#inputAddress2").value = "";
 }

main();
