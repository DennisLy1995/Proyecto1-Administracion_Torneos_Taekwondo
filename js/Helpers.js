//Data falsa
var usuarios =  [
  { 
    id: '1',
    email: 'admin@test.com',
    contrasena: 'password',
    primerNombre: 'Luis',
    segundoNombre: 'Johnson',
    primerApellido: 'Mathew',
    rol: 'admin'
  },
  { 
    id: '2',
    email: 'asistente@test.com',
    contrasena: 'password',
    primerNombre: 'Pedro',
    segundoNombre: 'Manuel',
    primerApellido: 'Obama',
    rol: 'asistente'
  }
]

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function (key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
}

Storage.prototype.reiniciarConDataFalsa = function () {
  this.setObject('usuarios', usuarios)
}