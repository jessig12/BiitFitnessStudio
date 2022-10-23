const btnverificar = document.getElementById('boton');







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