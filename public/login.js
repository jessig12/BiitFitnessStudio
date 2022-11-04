

function entrar() {
  const email = document.getElementById('inputEmail4').value;
  const password = document.getElementById('inputPassword').value;

  if (email == "elizabeth@gmail.com" && password == '12345678') {
    window.location.href = '/';
    localStorage.usuario = email
  }
  else if (email == "jessi@gmail.com" && password == '1234567') {
    window.location.href = '/';
    localStorage.usuario = email
  }
  else if (email == "kevin@gmail.com" && password == '123456') {
    window.location.href = '/';
    localStorage.usuario = email
  }
  else if (email == "rodrigo@gmail.com" && password == '12345678') {
    window.location.href = '/';
    localStorage.usuario = email
  } else {
    alert('Error contraseña o correo incorrecto')
  }

}
