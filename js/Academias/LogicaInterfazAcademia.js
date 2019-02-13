document.querySelector("#RegAcademia").addEventListener('click', obtenerElementoDeRegistro);
llenarTabla();
function Search(){
    if (!(window.history && history.pushState)) return;
    var searchInput = document.querySelector("#searchInputAcademia"),
        rows = document.querySelectorAll("#tableAcademias tbody tr"),
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
    var nombre = document.querySelector("#inputNombreAcademiaForm").value;
    var direccion = document.querySelector("#inputDireccionAcademiaForm").value;
    var tel = document.querySelector("#inputTelefonoAcademiaForm").value;
    var contacto = document.querySelector("#inputContactoAcademiaForm").value;
    var correo = document.querySelector("#inputCorreoAcademiaForm").value;
    //Agregar valores
    var nuevasAcademia = {
        oId: id,
        oNombre: nombre,
        oDireccion: direccion,
        oTel: tel,
        oContacto: contacto,
        oCorreo: correo,
    };
    InsertarAcademia(nuevasAcademia);
    llenarTabla();
    }
}

function llenarTabla() {
    var listaAcademia = obtenerListaAcademia();
    var nCantAcademia = listaAcademia.length;
    var tbody = document.querySelector('#tableAcademias tbody');
    tbody.innerHTML = "";
    listaAcademia.forEach(function (element) {
        tbody.innerHTML += "<tr><td hidden>" + element["oId"] + "</td><td>" + element["oNombre"] + "</td><td>" + element["oDireccion"] + "</td><td>" + element["oTel"] + "</td><td>" + element["oContacto"] + "</td><td>" + element["oCorreo"] + "</td><td><a onclick='SlideFormEditar(this)' class='btnEditar' id='btnEditar-" + element["oId"] + "'><img src='../img/editar.png' width='20'></a><a class='btnEliminar' onclick='eliminarAcademiaObtenida(this.id)' id='btnEliminar-" + element["oId"] + "'><img src='../img/delete.png' width='20'></a></td></tr>";
    });
    Search();
}

function eliminarAcademiaObtenida(elementId) {
    var LItm = elementId.length;
    var itm = elementId.substring(12, LItm);
    EliminarAcademia(itm);
    llenarTabla();
}

function SlideFormEditar(elementEditar) {
    var id = elementEditar.id;
    var LItm = id.length;
    var itm = id.substring(10, LItm);
    var eElemento = BuscarAcademia(itm);
    document.querySelector("#inputNombreAcademiaForm").value = eElemento["oNombre"];
    document.querySelector("#inputDireccionAcademiaForm").value = eElemento["oDireccion"];
    document.querySelector("#inputTelefonoAcademiaForm").value = eElemento["oTel"];
    document.querySelector("#inputContactoAcademiaForm").value = eElemento["oContacto"];
    document.querySelector("#inputCorreoAcademiaForm").value = eElemento["oCorreo"];
    var element = $(elementEditar).attr('class');
    var parent = "Academias";
    document.querySelector("#IdAcademia").value = elementEditar.id;
    $("#" + parent + " div:last-child .Form h2").text("Modificar");
    document.querySelector(".button").innerHTML = "Modificar";
    document.querySelector(".button").removeEventListener('click', obtenerElementoDeRegistro);
    document.querySelector(".button").addEventListener('click', editarAcademiaObtenida);
    $("#" + parent + " .tableContent-Init").switchClass("col-xs-12", "col-xs-7", "easeInOutQuad");
    $("#" + parent + " .FormContent-Init").css({ "opacity": "0", "display": "block", }).animate({ opacity: 1 }, function () {
        $("#" + parent + " .FormContent-Init .Form").css('display', 'block');
    })
}


function editarAcademiaObtenida() {
    var elementId = document.querySelector("#IdAcademia").value;
    var LItm = elementId.length;
    var itm = elementId.substring(10, LItm);
    var nombre = document.querySelector("#inputNombreAcademiaForm").value;
    var direccion = document.querySelector("#inputDireccionAcademiaForm").value;
    var tel = document.querySelector("#inputTelefonoAcademiaForm").value;
    var contacto = document.querySelector("#inputContactoAcademiaForm").value;
    var correo = document.querySelector("#inputCorreoAcademiaForm").value;
    //Agregar valores
    var editadoAcademia = {
        oId: elementId,
        oNombre: nombre,
        oDireccion: direccion,
        oTel: tel,
        oContacto: contacto,
        oCorreo: correo,
    };
    EditarAcademia(itm, editadoAcademia);
    llenarTabla();
    document.querySelector(".button").removeEventListener('click', editarAcademiaObtenida);
    document.querySelector(".button").addEventListener('click', obtenerElementoDeRegistro);
    
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

