const nameInput = document.querySelector("name");
const email = document.querySelector("email");
const message = document.querySelector("message");
const success = document.querySelector("Envio exitoso");
const errorNodes = document.querySelector("error");

function validateForm(){

    clearMessages();
    let errorFlag= false;

    if (nameInput.value.length < 1){
        errorNodes[0].innerText = "name cannot be blanck";
        nameInput.classList.add("error-border");
        errorFlag = true;
     }
     if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag=true;
     }

     if(message.value.length < 1){
        errorNodes[2].innerText="plase enter message";
        message.classList.add("error-border");
        errorFlag=true;
        }
        if(!errorFlag){
            success.innerText ="Envio exitoso¡";
        }

}


function clearMessages(){
    for(let i= 0; i <errorNodes.length; i++){
        errorNodes[i].innerText ="";
        }
        success.innerText = "";
        nameInput.classList.remove("error-border");
        email.classList.remove("error-border");
        message.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\s+/;
    return pattern.test(email);
}

/*
const btnverificar = document.getElementById('boton');

const verificacion = (e) => {
    e.preventDefault();
    const usuario = document.getElementById('name').value;
    const direccionEmail = document.getElementById('email').value;

    if (usuario.length === 0) {
        alert("Por favor, escribe tu nombre de usuario.");
        usuario.focus();
        return false;
    }

    if (direccionEmail.length === 0){
        alert("Por favor, escribe tu correo electronico");
        email.focus();
        return false;
    }

    if (!emailValido(email.value)) {
        alert("Por favor, escribe un correo electronico valido");
        emailAddress.focus();
        return false;
    }

    return true;
}

const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);
*/





const btn = document.getElementById('boton');

document.getElementById('biit')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'template_t5fx8vs';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Agregar';
      alert('Mensaje enviado');
    }, (err) => {
      btn.value = 'Agregar';
      alert(JSON.stringify(err));
    });
});
