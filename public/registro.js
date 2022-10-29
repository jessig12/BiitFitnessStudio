const firtsName = document.getElementById("inputFirstName");
const lastName = document.getElementById("inputLastName");
const email = document.getElementById("inputEmail4");
const password = document.getElementById("inputPassword4");
const movil = document.getElementById("inputMovil");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");


form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings = ""
  let entrar = false
  let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/
  let regex = /^\d{3}-\d{3}-\d{3}$/
  parrafo.innerHTML = ""

  if(firtsName.value.length < 6){
     warnings += `El nombre no es valido <br>`
  }
  
  if (regexEmail.test(email.value)){
    warnings += `El email no es valido <br>`
    entrar = true
  }
  if (regex.test(movil.value)){
    warnings += `El teléfono no es valido <br>`
    entrar = true
  }

  if (password.value.length < 6){
    warnings += `La contraseña no es valida <br>`
    entrar = true
  }
  if(entrar){
    parrafo.innerHTML = warnings
 }
 else{
  parrafo.innerHTML = "Registro exitosamente"
 }
})