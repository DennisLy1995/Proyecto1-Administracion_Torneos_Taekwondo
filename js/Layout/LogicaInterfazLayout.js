function mostrarLinksDeNavegacionParaRol(rol) {
  var navBar = document.querySelector('#navbar')
  navBar.appendChild(generarLinksDeNavegacionParaRol(rol))
}

function generarLinksDeNavegacionParaRol(rol) {
  var navLinks = document.createElement('ul')
  navLinks.className = "menu"

  switch(rol) {
    case 'admin':
      navLinks.innerHTML = linksNavegacionAdmin
      break;
    case 'asistente':
      break;
    case 'profesor':
      break;
    case 'visitante':
      navLinks.innerHTML = linksNavegacionVisitante
      break;
    default:
    navLinks.innerHTML = linksNavegacionVisitante
  }
  return navLinks
}

window.onload = function() {
  var idUsuarioLogeado = localStorage.getItem('usuarioLogeado')

  if (idUsuarioLogeado) {
    var usuarios = localStorage.getObject('usuarios');
    var usuarioLoggeado = usuarios.filter(function(usuario) { return usuario.id === idUsuarioLogeado })[0]
    mostrarLinksDeNavegacionParaRol(usuarioLoggeado.rol)
  } else {
    mostrarLinksDeNavegacionParaRol('visitante')
  }
}

function cerrarSesion() {
  localStorage.setItem('usuarioLogeado', "")
  //window.location = "http://localhost/Layout.php?page=Home"
  window.location = "http://proyecto.localhost/Layout.php?page=Home";
}

var linksNavegacionAdmin = '' +
  '<li><a class="Item" href="Layout.php?page=Home">Home</a></li>'+
  '<li><a class="Item" href="Layout.php?page=Eventos">Eventos</a></li>' +
  '<li><a class="Item" href="Layout.php?page=Academias">Academias</a></li>' +
  '<li><a class="Item" href="Layout.php?page=Organizaciones">Organizaciones</a></li>' +
  '<li><a class="Item" href="Layout.php?page=SedesAsociadas">Sedes</a></li>' +
  '<li><a class="Item" href="Layout.php?page=Profesores">Profesores</a></li>' +
  '<li><a class="Item" href="Layout.php?page=Alumnos">Alumnos</a></li>' +
  '<li class="Sesion-button"><a class="Item" onclick="cerrarSesion()"><img src="../img/LogOff.png" width="15"></a></li>'

var linksNavegacionVisitante = '' +
  '<li><a class="Item" href="Layout.php?page=Home">Home</a></li>'+
  '<li class="Sesion-button"><a class="Item" href="Layout.php?page=Login" title="Cerrar sesión">Iniciar Sesión</a></li>'


