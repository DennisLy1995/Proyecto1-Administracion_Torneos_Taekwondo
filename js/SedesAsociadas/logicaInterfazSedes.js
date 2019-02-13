document.querySelector("#RegSedes").addEventListener('click', obtenerElementoDeRegistro);
llenarTabla();
function Search(){
    if (!(window.history && history.pushState)) return;
    var searchInput = document.querySelector("#searchInput"),
        rows = document.querySelectorAll("#tableSedes tbody tr"),
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

function obtenerElementoDeRegistro() {
    //Asignacion de valores
    var validado = validar();
    if(validado == false){
    var id = 0;
    var nombre = document.querySelector("#inputNombreSedeForm").value;
    var ubicacion = document.querySelector("#inputUbicacionSedeForm").value;
    var encargado = document.querySelector("#inputEncargadoSedeForm").value;
    var tel = document.querySelector("#inputTelefonoSedeForm").value;
    var disponibilidad = document.querySelector("#inputDisponibilidadForm").value;
    var capacidad = document.querySelector("#inputCapacidadSedeForm").value;
    //Agregar valores
    var nuevasSede = {
        oId: id,
        oNombre: nombre,
        oUbicacion: ubicacion,
        oEncargado: encargado,
        oTel: tel,
        oDisponibilidad: disponibilidad,
        oCapacidad: capacidad
    };
    InsertarSede(nuevasSede);
    llenarTabla();
    }
}

function llenarTabla() {
    var listaSedes = obtenerListaSedes();
    var nCantSedes = listaSedes.length;
    var tbody = document.querySelector('#tableSedes tbody');
    tbody.innerHTML = "";
    listaSedes.forEach(function (element) {
        tbody.innerHTML += "<tr><td hidden>" + element["oId"] + "</td><td>" + element["oNombre"] + "</td><td>" + element["oUbicacion"] + "</td><td>" + element["oEncargado"] + "</td><td>" + element["oTel"] + "</td><td>" + element["oDisponibilidad"] + "</td><td>" + element["oCapacidad"] + "</td><td><a onclick='SlideFormEditar(this)' class='btnEditar' id='btnEditar-" + element["oId"] + "'><img src='../img/editar.png' width='20'></a><a class='btnEliminar' onclick='eliminarSedeObtenida(this.id)' id='btnEliminar-" + element["oId"] + "'><img src='../img/delete.png' width='20'></a></td></tr>";
    });
    Search();
}

function eliminarSedeObtenida(elementId) {
    var LItm = elementId.length;
    var itm = elementId.substring(12, LItm);
    EliminarSede(itm);
    llenarTabla();
}

function SlideFormEditar(elementEditar) {
    var id = elementEditar.id;
    var LItm = id.length;
    var itm = id.substring(10, LItm);
    var eElemento = BuscarSede(itm);
    document.querySelector("#inputNombreSedeForm").value = eElemento["oNombre"];
    document.querySelector("#inputUbicacionSedeForm").value = eElemento["oUbicacion"];
    document.querySelector("#inputEncargadoSedeForm").value = eElemento["oEncargado"];
    document.querySelector("#inputTelefonoSedeForm").value = eElemento["oTel"];
    document.querySelector("#inputDisponibilidadForm").value = eElemento["oDisponibilidad"];
    document.querySelector("#inputCapacidadSedeForm").value = eElemento["oCapacidad"];
    var element = $(elementEditar).attr('class');
    var parent = "SedesAsoc";
    document.querySelector("#IdSede").value = elementEditar.id;
    $("#" + parent + " div:last-child .Form h2").text("Modificar");
    document.querySelector(".button").innerHTML = "Modificar";
    document.querySelector(".button").removeEventListener('click', obtenerElementoDeRegistro);
    document.querySelector(".button").addEventListener('click', editarSedeObtenida);
    $("#" + parent + " .tableContent-Init").switchClass("col-xs-12", "col-xs-7", "easeInOutQuad");
    $("#" + parent + " .FormContent-Init").css({ "opacity": "0", "display": "block", }).animate({ opacity: 1 }, function () {
        $("#" + parent + " .FormContent-Init .Form").css('display', 'block');
    })
}


function editarSedeObtenida() {
    var elementId = document.querySelector(".FormInputs #IdSede").value;
    var LItm = elementId.length;
    var itm = elementId.substring(10, LItm);
    //var element = BuscarSede(itm);
    var nombre = document.querySelector("#inputNombreSedeForm").value;
    var ubicacion = document.querySelector("#inputUbicacionSedeForm").value;
    var encargado = document.querySelector("#inputEncargadoSedeForm").value;
    var tel = document.querySelector("#inputTelefonoSedeForm").value;
    var disponibilidad = document.querySelector("#inputDisponibilidadForm").value;
    var capacidad = document.querySelector("#inputCapacidadSedeForm").value;
    //Agregar valores
    var EditadoSede = {
        oNombre: nombre,
        oUbicacion: ubicacion,
        oEncargado: encargado,
        oTel: tel,
        oDisponibilidad: disponibilidad,
        oCapacidad: capacidad
    };
    EditarSede(itm, EditadoSede);
    llenarTabla();
    document.querySelector(".FormInputs button").removeEventListener('click', editarSedeObtenida);
    document.querySelector(".FormInputs button").addEventListener('click', obtenerElementoDeRegistro);
    
}

function validar(){
  var aInputs = document.querySelectorAll('input:required');
  var bError = false;
  for(var i = 0; i < aInputs.length; i++){
    var valorInput = aInputs[i].value;
    var patron = aInputs[i].pattern;
    if(patron != ''){
        var expresion = new RegExp( aInputs[i].pattern+ '$');
        if(expresion.test(valorInput) == false){
          aInputs[i].classList.add('error-input');
          bError = true;
        }else{
          aInputs[i].classList.remove('error-input');
        }
    }else{
        if(valorInput ==''){
          aInputs[i].classList.add('error-input');
          bError = true;
        }else{
          aInputs[i].classList.remove('error-input');
        }
      }
  }
  return bError;
}

