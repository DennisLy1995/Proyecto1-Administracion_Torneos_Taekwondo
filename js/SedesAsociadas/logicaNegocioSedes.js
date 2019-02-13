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
        if (element["oId"] == pIdSede) {
            listaSedes.splice(count, 1);
        }
        count = count + 1;
    });
    localStorage.setItem('listaSedes', JSON.stringify(listaSedes));
}
function EditarSede(pIdSede, pEditado) {
    var listaSedes = obtenerListaSedes();
    listaSedes.forEach(function (element) {
        if (element["oId"] == pIdSede) {
            element["oNombre"] = pEditado["oNombre"] != null ? pEditado["oNombre"] : element["oNombre"];
            element["oUbicacion"] = pEditado["oUbicacion"] != null ? pEditado["oUbicacion"] : element["oUbicacion"];
            element["oEncargado"] = pEditado["oEncargado"] != null ? pEditado["oEncargado"] : element["oEncargado"];
            element["oTel"] = pEditado["oTel"] != null ? pEditado["oTel"] : element["oTel"];
            element["oDisponibilidad"] = pEditado["oDisponibilidad"] != null ? pEditado["oDisponibilidad"] : element["oDisponibilidad"];
            element["oCapacidad"] = pEditado["oCapacidad"] != null ? pEditado["oCapacidad"] : element["oCapacidad"];
        }
    });
    localStorage.setItem('listaSedes', JSON.stringify(listaSedes));
}
function BuscarSede(pIdSede) {
    var listaSedes = obtenerListaSedes();
    var eElement;
    listaSedes.forEach(function (element) {
        if (element["oId"] == pIdSede) {
            eElement = element;
        }
    })
    return eElement;
}