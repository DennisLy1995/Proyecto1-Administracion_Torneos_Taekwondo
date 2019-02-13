function InsertarProfesor(pNuevoProfesor) {
    var listaProfesores = obtenerListaProfesores();
    var conteo = obtenerConteoDeIds();
    conteo = conteo + 1;
    pNuevoProfesor["oId"] = "P" + conteo;
    listaProfesores.push(pNuevoProfesor);
    localStorage.setItem('ConteoProfesores', JSON.stringify(conteo));
    localStorage.setItem('listaProfesores', JSON.stringify(listaProfesores));
}
function obtenerListaProfesores() {

    var listaProfesores = JSON.parse(localStorage.getItem('listaProfesores'));
    if (listaProfesores == null) {
        listaProfesores = [];
    }

    return listaProfesores;
}
function obtenerConteoDeIds() {

    var conteo = JSON.parse(localStorage.getItem('ConteoProfesores'));
    if (conteo == null) {
        conteo = 0;
    }
    return conteo;
}
function EliminarProfesor(pIdProfesor) {
    var listaProfesores = obtenerListaProfesores();
    var count = 0;
    listaProfesores.forEach(function (element) {
        if (element["oId"] == pIdProfesor){
            listaProfesores.splice(count, 1);
        }
        count = count + 1;
    });
    localStorage.setItem('listaProfesores', JSON.stringify(listaProfesores));
}
function EditarProfesores(pIdProfesor, pEditado) {
    var listaProfesores = obtenerListaProfesores();
    listaProfesores.forEach(function (element) {
        if (element["oId"] == pIdProfesor) {
            element["oNombre"] = pEditado["oNombre"] != null ? pEditado["oNombre"] : element["oNombre"];
            element["oAcademia"] = pEditado["oAcademia"] != null ? pEditado["oAcademia"] : element["oAcademia"];
            element["oTel"] = pEditado["oTel"] != null ? pEditado["oTel"] : element["oTel"];
            element["oEmail"] = pEditado["oEmail"] != null ? pEditado["oEmail"] : element["oEmail"];
        }
    });
    localStorage.setItem('listaProfesores', JSON.stringify(listaProfesores));
}
function BuscarProfesores(pIdProfesor) {
    var listaProfesores = obtenerListaProfesores();
    var eElement;
    listaProfesores.forEach(function (element) {
        if (element["oId"] == pIdProfesor) {
            eElement = element;
        }
    })
    return eElement;
}
function obtenerListaAcademias(){
  var listaAcademia = JSON.parse(localStorage.getItem('listaAcademia'));
  if(listaAcademia == null){
    listaAcademia = [];
  }
  return listaAcademia;  
 }