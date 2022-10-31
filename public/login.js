
function entrar(){
  const email = document.getElementById('inputEmail4').value;
  const password = document.getElementById('inputPassword').value;

 if (email == "elizabeth@gmail.com" && password == '12345678'){
window.location.href = '/';
localStorage.usuario = email
 }else{
  alert('Error')
 }

}

