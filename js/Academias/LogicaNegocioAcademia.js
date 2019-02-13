function InsertarAcademia(pNuevaAcademia) {
    var listaAcademia = obtenerListaAcademia();
    var conteo = obtenerConteoDeIds();
    conteo = conteo + 1;
    pNuevaAcademia["oId"] = "A" + conteo;
    listaAcademia.push(pNuevaAcademia);
    localStorage.setItem('ConteoAcademias', JSON.stringify(conteo));
    localStorage.setItem('listaAcademia', JSON.stringify(listaAcademia));
}
function obtenerListaAcademia() {

    var listaAcademias = JSON.parse(localStorage.getItem('listaAcademia'));
    if (listaAcademias == null) {
        listaAcademias = [];
    }

    return listaAcademias;
}
function obtenerConteoDeIds() {

    var conteo = JSON.parse(localStorage.getItem('ConteoAcademias'));
    if (conteo == null) {
        conteo = 0;
    }
    return conteo;
}
function EliminarAcademia(pIdAcademia) {
    var listaAcademias = obtenerListaAcademia();
    var count = 0;
    listaAcademias.forEach(function (element) {
        if (element["oId"] == pIdAcademia) {
            listaAcademias.splice(count, 1);
        }
        count = count + 1;
    });
    localStorage.setItem('listaAcademia', JSON.stringify(listaAcademias));
}
function EditarAcademia(pIdAcademia, pEditado) {
    var listaAcademias = obtenerListaAcademia();
    listaAcademias.forEach(function (element) {
        if (element["oId"] == pIdAcademia) {
            element["oNombre"] = pEditado["oNombre"] != null ? pEditado["oNombre"] : element["oNombre"];
            element["oDireccion"] = pEditado["oDireccion"] != null ? pEditado["oDireccion"] : element["oDireccion"];
            element["oTel"] = pEditado["oTel"] != null ? pEditado["oTel"] : element["oTel"];
            element["oContacto"] = pEditado["oContacto"] != null ? pEditado["oContacto"] : element["oContacto"];
            element["oCorreo"] = pEditado["oCorreo"] != null ? pEditado["oCorreo"] : element["oCorreo"];
        }
    });
    localStorage.setItem('listaAcademia', JSON.stringify(listaAcademias));
}
function BuscarAcademia(pIdAcademia) {
    var listaAcademias = obtenerListaAcademia();
    var eElement;
    listaAcademias.forEach(function (element) {
        if (element["oId"] == pIdAcademia) {
            eElement = element;
        }
    })
    return eElement;
}
