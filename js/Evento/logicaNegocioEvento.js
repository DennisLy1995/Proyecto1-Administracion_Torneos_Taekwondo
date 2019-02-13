function InsertarSede(pNuevaSede) {
    var listaSedes = obtenerListaSedes();
    var conteo = obtenerConteoDeIds();
    conteo = conteo + 1;
    pNuevaSede["oId"] = "S" + conteo;
    listaSedes.push(pNuevaSede);
    localStorage.setItem('ConteoSedes', JSON.stringify(conteo));
    localStorage.setItem('listaSedes', JSON.stringify(listaSedes));
}
function obtenerListaSedes() {

    var listaSedes = JSON.parse(localStorage.getItem('listaSedes'));
    if (listaSedes == null) {
        listaSedes = [];
    }

    return listaSedes;
}
function obtenerConteoDeIds() {

    var conteo = JSON.parse(localStorage.getItem('ConteoSedes'));
    if (conteo == null) {
        conteo = 0;
    }
    return conteo;
}
function EliminarSede(pIdSede) {
    var listaSedes = obtenerListaSedes();
    var count = 0;
    listaSedes.forEach(function (element) {
        if(element["oId"] == pIdSede)
        {
            listaSedes.splice(count, 1);
        }
        count = count + 1;
    });
    localStorage.setItem('listaSedes', JSON.stringify(listaSedes));
}

