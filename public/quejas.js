console.log("hola neo");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const subject = document.querySelector("#subject"); //debe tener lo mismo que message 
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

function validateForm() {

    clearMessages();
    let errorFlag = false;


    if (!emailIsValid(email.value)) {
        errorNodes[0].innerText = "Introduce un correo valido";
        email.classList.add("error-border");
        errorFlag = true;
    }
    if (subject.value.length < 1) {
        errorNodes[1].innerText = "Escriba un asunto";
        subject.classList.add("error-border");
        errorFlag = true;
    }
    if (message.value.length < 1) {
        errorNodes[2].innerText = "Escriba su queja o sugercia";
        message.classList.add("error-border");
        errorFlag = true;
    }
    


    if (!errorFlag) {
        success.innerText = "Su queja o sugercia ha sido enviada";
    }

}

function clearMessages(){
    for(let i= 0; i <errorNodes.length; i++){
        errorNodes[i].innerText = "";
        }
        success.innerText = "";
        email.classList.remove("error-border");
        subject.classList.remove("error-border");
        message.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

const btn = document.getElementById('boton');
if(validateForm()==true){
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
}
