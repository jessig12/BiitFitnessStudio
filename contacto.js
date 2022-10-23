const form = document.querySelector(".registro");
form.addEventListener("submit", e => { 
    e.preventDefault();
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;

    document.querySelector(".registro").reset();
    sendEmail(name, email);
})
function sendEmail(name, email){
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kev.herreros@gmail.com",
    Password:"98F827AFCA279DAAEEE1490452EF1CBB522F",
    To: 'kev.herreros@gmail.com',
    From:document.getElementById("email").value,
    Subject:"New Contact Form",
    Body: document.getElementById("message").value,
}).then((success) => {
     alert("Mensaje enviado");
}).catch((error)=> {
    alert("mensaje no enviado ");
})
}