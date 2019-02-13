function enviarFormularioLogin() {
  var email =  document.querySelector('input[name="email"]').value
  var contrasena =  document.querySelector('input[name="password"]').value
  iniciarSesion(email, contrasena)
  return false
}

function iniciarSesion(email, contrasena) {
  var usuariosGuardados = localStorage.getObject('usuarios')
  var usuariosEncontradosPorCredenciales = usuariosGuardados.filter(function(usuario) { return usuario.email == email && usuario.contrasena == contrasena })
  if (usuariosEncontradosPorCredenciales.length) {
    localStorage.setItem('usuarioLogeado', usuariosEncontradosPorCredenciales[0].id)
    //window.location = "http://localhost/Layout.php?page=Home"
    window.location = "http://proyecto.localhost/Layout.php?page=Home";
  } else {
    window.alert('Credenciales invalidas, pruebe otra vez.')
  }
}

