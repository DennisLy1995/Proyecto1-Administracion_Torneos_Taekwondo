function agregar_Alumnos(pAlumnoNuevo){
  var listaAlumnos = obtener_ListaAlumnos();
  var conteo = obtenerConteoDeIds();
  conteo = conteo + 1;
  pAlumnoNuevo["oId"] = "A" + conteo;
  listaAlumnos.push(pAlumnoNuevo);
  localStorage.setItem('ConteoSedes', JSON.stringify(conteo));
  localStorage.setItem('listaAlumnosLS', JSON.stringify(listaAlumnos));
}
function obtener_ListaAlumnos(){

  var listaAlumnos = JSON.parse(localStorage.getItem('listaAlumnosLS'));
  if(listaAlumnos == null){
    listaAlumnos = [];
  }
  return listaAlumnos;
}
function obtenerConteoDeIds() {

    var conteo = JSON.parse(localStorage.getItem('ConteoSedes'));
    if (conteo == null) {
        conteo = 0;
    }
    return conteo;
}
function eliminarAlumnoNegocio(pIdAlumno) {
    var listaAlumnos = obtener_ListaAlumnos();
    var count = 0;
    listaAlumnos.forEach(function (element) {
        if (element["oId"] == pIdAlumno) {
            listaAlumnos.splice(count, 1);
        }
        count = count + 1;
    });
    localStorage.setItem('listaAlumnosLS', JSON.stringify(listaAlumnos));
}
function BuscarAlumno(pIdAlumno) {
    var listaAlumnos = obtener_ListaAlumnos();
    var eElement;
    listaAlumnos.forEach(function (element) {
        if (element["oId"] == pIdAlumno) {
            eElement = element;
        }
    })
    return eElement;
}
function EditarAlumno(pIdAlumno, pEditado) {
    var listaAlumnos = obtener_ListaAlumnos();
    listaAlumnos.forEach(function (element) {
        if (element["oId"] == pIdAlumno) {
            element["oNombre"] = pEditado["oNombre"] != null ? pEditado["oNombre"] : element["oNombre"];
            element["oFechaNacimiento"] = pEditado["oFechaNacimiento"] != null ? pEditado["oFechaNacimiento"] : element["oFechaNacimiento"];
            element["oEdad"] = pEditado["oEdad"] != null ? pEditado["oEdad"] : element["oEdad"];
            element["oPeso"] = pEditado["oPeso"] != null ? pEditado["oPeso"] : element["oPeso"];
            element["oAltura"] = pEditado["oAltura"] != null ? pEditado["oAltura"] : element["oAltura"];
            element["oGrado"] = pEditado["oGrado"] != null ? pEditado["oGrado"] : element["oGrado"];
            element["oAltura"] = pEditado["oAltura"] != null ? pEditado["oAltura"] : element["oAltura"];
            element["oAcademia"] = pEditado["oAcademia"] != null ? pEditado["oAcademia"] : element["oAcademia"];
            element["oProfesor"] = pEditado["oProfesor"] != null ? pEditado["oProfesor"] : element["oProfesor"];
        }
    });
    localStorage.setItem('listaAlumnosLS', JSON.stringify(listaAlumnos));
}
 function obtenerListaProfesores(){
  var listaProfesores = JSON.parse(localStorage.getItem('listaProfesores'));
  if(listaProfesores == null){
    listaProfesores = [];
  }
  return listaProfesores;  
 }
  function obtenerListaAcademias(){
  var listaAcademia = JSON.parse(localStorage.getItem('listaAcademia'));
  if(listaAcademia == null){
    listaAcademia = [];
  }
  return listaAcademia;  
 }
function BuscarAlumno(pIdAlumno) {
    var listaAlumnos = obtener_ListaAlumnos();
    var eElement;
    listaAlumnos.forEach(function (element) {
        if (element["oId"] == pIdAlumno) {
            eElement = element;
        }
    })
    return eElement;
}
