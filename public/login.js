
function entrar() {
  const email = document.getElementById('inputEmail4').value;
  const password = document.getElementById('inputPassword').value;

  if (email == "elizabeth@gmail.com" && password == '12345678') {
    window.location.href = '/bienvenido';
    localStorage.usuario = email
  }
  else if (email == "jessi@gmail.com" && password == '1234567') {
    window.location.href = '/bienvenido';
    localStorage.usuario = email
  }
  else if (email == "kevin@gmail.com" && password == '123456') {
    window.location.href = '/bienvenido';
    localStorage.usuario = email
  }
  else if (email == "rodrigo@gmail.com" && password == '12345678') {
    email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/
    window.location.href = '/bienvenido';
    localStorage.usuario = email
  } 
  else if (email == "" && password == "") {
    alert('Error no ha escrito el correo o contraseña');

  } else {
    alert('Error contraseña o correo incorrecto');
  }

}
