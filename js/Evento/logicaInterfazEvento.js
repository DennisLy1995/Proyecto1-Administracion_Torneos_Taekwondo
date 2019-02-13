document.querySelector("#agregarPatrocinador").addEventListener('click', agregarPatrocinador);
document.querySelector("#agregarAcademia").addEventListener('click', agregarAcademia);
document.querySelector("#agregarInvitado").addEventListener('click', agregarInvitado);
document.querySelector("#agregarCategoria").addEventListener('click', agregarCategoria);
asignarClasesPatrocinadores();
asignarClasesAcademias();
asignarClasesCategorias();
llenar_ListaSedes()
//document.querySelector("#registras".)addEventListener('click', obtenerElementoDeRegistroTorneo)

//llenarTablaTorneo();
function searchTorneos(){
    if (!(window.history && history.pushState)) return;
    var searchInput = document.querySelector("#searchInputTorneos"),
        rows = document.querySelectorAll("#tableEventosTorneos tbody tr"),
        timer;
    function filterRows() {
        [].forEach.call(rows, function (row) {
            var cells = row.querySelectorAll("td"),
                containsText = false;
            [].forEach.call(cells, function (cell) {
                var text = cell.textContent.toLowerCase(),
                    search = searchInput.value.toLowerCase();
                if (text.indexOf(search) != -1)
                    containsText = true;
            });
            if (containsText)
                row.style.display = "";
            else
                row.style.display = "none";
        });
    }
    searchInput.onkeyup = function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (searchInput.value != "")
                window.history.pushState(searchInput.value, "", "#search=" + encodeURI(searchInput.value));
        }, 1000);
        filterRows();
    }
    window.onpopstate = function (e) {
        if (e.state !== null) {
            searchInput.value = e.state;
            filterRows();
        } else {
            var searchValue = window.location.hash.split("=").pop();
            searchInput.value = decodeURI(searchValue);
            filterRows();
        }
    }
};
function searchExhibiciones(){
    if (!(window.history && history.pushState)) return;
    var searchInput = document.querySelector("#searchInputExhibiciones"),
        rows = document.querySelectorAll("#tableEventosExhibiciones tbody tr"),
        timer;
    function filterRows() {
        [].forEach.call(rows, function (row) {
            var cells = row.querySelectorAll("td"),
                containsText = false;
            [].forEach.call(cells, function (cell) {
                var text = cell.textContent.toLowerCase(),
                    search = searchInput.value.toLowerCase();
                if (text.indexOf(search) != -1)
                    containsText = true;
            });
            if (containsText)
                row.style.display = "";
            else
                row.style.display = "none";
        });
    }
    searchInput.onkeyup = function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (searchInput.value != "")
                window.history.pushState(searchInput.value, "", "#search=" + encodeURI(searchInput.value));
        }, 1000);
        filterRows();
    }
    window.onpopstate = function (e) {
        if (e.state !== null) {
            searchInput.value = e.state;
            filterRows();
        } else {
            var searchValue = window.location.hash.split("=").pop();
            searchInput.value = decodeURI(searchValue);
            filterRows();
        }
    }
};
function searchFogueos(){
    if (!(window.history && history.pushState)) return;
    var searchInput = document.querySelector("#searchInputFogueos"),
        rows = document.querySelectorAll("#tableEventosFogueos tbody tr"),
        timer;
    function filterRows() {
        [].forEach.call(rows, function (row) {
            var cells = row.querySelectorAll("td"),
                containsText = false;
            [].forEach.call(cells, function (cell) {
                var text = cell.textContent.toLowerCase(),
                    search = searchInput.value.toLowerCase();
                if (text.indexOf(search) != -1)
                    containsText = true;
            });
            if (containsText)
                row.style.display = "";
            else
                row.style.display = "none";
        });
    }
    searchInput.onkeyup = function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            if (searchInput.value != "")
                window.history.pushState(searchInput.value, "", "#search=" + encodeURI(searchInput.value));
        }, 1000);
        filterRows();
    }
    window.onpopstate = function (e) {
        if (e.state !== null) {
            searchInput.value = e.state;
            filterRows();
        } else {
            var searchValue = window.location.hash.split("=").pop();
            searchInput.value = decodeURI(searchValue);
            filterRows();
        }
    }
};

function asignarClasesPatrocinadores(){
    var deletes = document.querySelectorAll(".borrarPatrocinador");
    deletes.forEach(function (element) {
        element.addEventListener('click',borrarItem);    
    })
};
function asignarClasesAcademias(){
    var deletes = document.querySelectorAll(".borrarAcademia");
    deletes.forEach(function (element) {
        element.addEventListener('click',borrarItem);    
    })
};
function asignarClasesCategorias(){
    var deletes = document.querySelectorAll(".borrarCategoria");
    deletes.forEach(function (element) {
        element.addEventListener('click',borrarItem);    
    })
};
function borrarItem(){
    var element = this.parentElement.parentElement;
    element.parentElement.removeChild(element);
}
function agregarPatrocinador(){
  var counter=2;
   document.querySelector("#itemPatrocinadores").innerHTML+="<div id = 'patrocinador-"+counter+"' class='row'> <div class='col-xs-5'> <select id = 'Iempresa-"+counter+"'> <option selected>Seleccione una empresa</option> <option></option> </select> </div> <div class='col-xs-5'> <select id = 'Iproductos-"+counter+"' list='Productos'> <option>Seleccione un producto</option> </select> </div> <div class='col-xs-2'> <button type='button' class='boton-formulario borrarPatrocinador'><img src='../img/delete.png' width='15'/></button> </div> </div>";
   counter=counter+1;
   asignarClasesPatrocinadores();
}

function agregarAcademia(){
  var counter=2;
   document.querySelector("#itemAcademias").innerHTML+="<div id = 'academiaProfesor-"+counter+"' class='row'> <div class='col-xs-5'> <select id = 'academia-"+counter+"' list='lstAcademias'> <option selected>Seleccione una academia</option> <option></option> </select> </div> <div class='col-xs-5'> <select id = 'profesor-"+counter+"' list='lstProfesores'> <option>Seleccione un profesor</option> </select> </div> <div class='col-xs-2'> <button type='button' class='boton-formulario borrarAcademia'><img src='../img/delete.png' width='15'/></button> </div> </div>";
   counter=counter+1;
   asignarClasesAcademias();
}

function agregarInvitado(){
  var counter=2;
   document.querySelector("#itemInvitados").innerHTML+="<div id = 'invitados-"+counter+"' class='row'> <div class='col-xs-12'> <div id = 'itemInvitados'> <div class='row'> <div class='col-xs-5'> <input id = 'invitado-"+counter+"' type='email'/></div> <div class='col-xs-2'> <button type='button' class='boton-formulario'><img src='../img/delete.png' width='15'/></button> </div> </div> </div> </div> </div>";
   counter=counter+1;
}

function agregarCategoria(){
  var counter=2;
   document.querySelector("#itemCategorias").innerHTML+="<div class='row' id='Categoria-"+counter+"'><div class='col-xs-10'><select id='Icategoria-"+counter+"'><option selected>Seleccione un grado</option><option>Blanco</option><option>Amarillo</option><option>Azul</option><option>Verde</option><option>Rojo</option><option>Negro</option></select></div><div class='col-xs-2'><button type='button' class='boton-formulario borrarCategoria'><img src='../img/delete.png' width='15'/></button></div></div>";
   counter=counter+1;
   asignarClasesCategorias();
}
function llenar_ListaSedes(){
var listaProfesores = obtenerListaSedes() ;//Funcion llamada desde la logicaNegocioProfesores Dennis
  var select = document.querySelector('#selectLugarTorneo');
  listaProfesores.forEach(function (element) {
    select.innerHTML += "<option>"+ element["oNombre"] +"</option>"
    })
}
/*
function obtenerElementoDeRegistroTorneo() {
    //Asignacion de valores
    var id = 0;
    var tipo = "Torneo";
    var nombre = document.querySelector("#inputNombreTorneo").value;
    var fechaDeInicio = document.querySelector("#inputFechaInicioTorneo").value;
    var fechaDeFinalizacion = document.querySelector("#inputFechaFinTorneo").value;
    var lugar = document.querySelector("#selectLugarTorneo").value;
    var entradasDisponibles = document.querySelector("#inputEntradasDisponiblesTorneo").value;
    var organizacionBenefica = document.querySelector("#inputOrganizacionBefenicaTorneo").value;
    var costo = document.querySelector("#inputCostoInscripcionTorneo").value;
    //Agregar valores
    var nuevasSede = {
        oId: id,
        oTipo: tipo,
        oNombre: nombre,
        oFechaDeInicio: fechaDeInicio,
        oFechaDeFinalizacion: fechaDeFinalizacion,
        oLugar: lugar,
        oEntradasDisponibles: entradasDisponibles,
        oOrganizacionBenefica: organizacionBenefica,
        oCosto: costo;
    };
    InsertarTorneo(nuevoTorneo);
    llenarTablaTorneo();
}

function llenarTablaTorneos() {
    var listaSedes = obtenerListaTorneos();
    var nCantSedes = obtenerListaTorneos.length;
    var tbody = document.querySelector("#tableTorneos tbody");
    tbody.innerHTML = "";
    obtenerListaTorneos.forEach(function (element) {
        tbody.innerHTML += "<tr><td hidden>" + element["oId"] + "</td><td>" + element["oNombre"] + "</td><td>" + element["oFechaDeInicio"] + "</td><td>" + element["oFechaDeFinalizacion"] + "</td><td>" + element["oLugar"] + "</td><td><a class="btnEditar" id="btnEditar-" + element["oId"] + ""><img src="../img/editar.png" width="20"></a><a class="btnEliminar" onclick="eliminarSedeObtenida(this.id)" id="btnEliminar-" + element["oId"] + ""><img src="../img/delete.png" width="20"></a></td></tr>";
    });
}

function EliminarSedeObtenida(elementId){
    var LItm = elementId.length;
    var itm = elementId.substring(12, LItm);
    EliminarSede(itm);
    llenarTabla();
}
*/
