const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone")
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");
const btn = document.getElementById('botonMember');

function validateForm(){

    clearMessages();
    let errorFlag= false;

    if (nameInput.value.length < 1){
        errorNodes[0].innerText = "Introduce tu nombre por favor";
        nameInput.classList.add("error-border");
        errorFlag = true;
     }
     if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Introduce un correo valido";
        email.classList.add("error-border");
        errorFlag = true;
     }
     if(phoneInput.value==""){
        errorNodes[2].innerText = "Introduce un numero de telefono valido";
        phoneInput.classList.add("error-border");
        errorFlag = true;
     }

     if(message.value.length < 1){
        errorNodes[3].innerText="Escribe un parrafo para conocerte y un asunto";
        message.classList.add("error-border");
        errorFlag=true;
        }
        if(!errorFlag){
            success.innerText ="Bienvenido a la familia";
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

}


function clearMessages(){
    for(let i= 0; i <errorNodes.length; i++){
        errorNodes[i].innerText = "";
        }
        success.innerText = "";
        nameInput.classList.remove("error-border");
        email.classList.remove("error-border");
        message.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}








