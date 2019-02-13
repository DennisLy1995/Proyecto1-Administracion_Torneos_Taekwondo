document.querySelector("#RegProfesores").addEventListener('click', obtenerElementoDeRegistro);
llenarTabla();
Search();
llenar_ListaAcademias()

function Search(){
    if (!(window.history && history.pushState)) return;
    var searchInput = document.querySelector("#searchInput"),
        rows = document.querySelectorAll("#tableProfesores tbody tr"),
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

function obtenerElementoDeRegistro(){
    //Asignacion de valores.
    var validado = validar();
    if(validado == false){
    var id = 0;
    var nombre = document.querySelector("#inputNombreProfesoresForm").value;
    var academia = document.querySelector("#inputAcademia").value;
    var tel = document.querySelector("#inputTelefonoProfesorForm").value;
    var email = document.querySelector("#inputEmailProfesorForm").value;
    //Agregar valores
    var nuevosProfesores = {
        oId: id,
        oNombre: nombre,
        oAcademia: academia,
        oTel: tel,
        oEmail: email
    };
    InsertarProfesor(nuevosProfesores);
    llenarTabla();
    Search();
    }
}

function llenarTabla() {
    var listaProfesores = obtenerListaProfesores();
    var nCantProfesores = listaProfesores.length;
    var tbody = document.querySelector('#tableProfesores tbody');
    tbody.innerHTML = "";
    listaProfesores.forEach(function (element) {
        tbody.innerHTML += "<tr><td hidden>" + element["oId"] + "</td><td>" + element["oNombre"] + "</td><td>" + element["oAcademia"] + "</td><td>" + element["oTel"] + "</td><td>" + element["oEmail"] + "</td><td><a onclick='SlideFormEditar(this)' class='btnEditar' id='btnEditar-" + element["oId"] + "'><img src='../img/editar.png' width='20'></a><a class='btnEliminar' onclick='EliminarProfesorObtenido(this.id)' id='btnEliminar-" + element["oId"] + "'><img src='../img/delete.png' width='20'></a></td></tr>";
    });

}

function EliminarProfesorObtenido(elementId) {
    var LItm = elementId.length;
    var itm = elementId.substring(12, LItm);
    EliminarProfesor(itm);
    llenarTabla();
}
// Ahi que arreglar esta parte.......................................................................................................
function SlideFormEditar(elementEditar) {
    var id = elementEditar.id;
    var LItm = id.length;
    var itm = id.substring(10, LItm);
    var eElemento = BuscarProfesores(itm);
    document.querySelector("#inputNombreProfesoresForm").value = eElemento["oNombre"];
    document.querySelector("#inputAcademia").value = eElemento["oAcademia"];
    document.querySelector("#inputTelefonoProfesorForm").value = eElemento["oTel"];
    document.querySelector("#inputEmailProfesorForm").value = eElemento["oEmail"];
    var element = $(elementEditar).attr('class');
    var parent = "ProfesoresAsoc";
    document.querySelector("#IdProfesor").value = elementEditar.id;
    $("#" + parent + " div:last-child .Form h2").text("Modificar");
    document.querySelector(".button").innerHTML = "Modificar";
    document.querySelector(".button").removeEventListener('click', obtenerElementoDeRegistro);
    document.querySelector(".button").addEventListener('click', editarProfesorObtenido);
    $("#" + parent + " .tableContent-Init").switchClass("col-xs-12", "col-xs-7", "easeInOutQuad");
    $("#" + parent + " .FormContent-Init").css({ "opacity": "0", "display": "block", }).animate({ opacity: 1 }, function () {
        $("#" + parent + " .FormContent-Init .Form").css('display', 'block');
    })
}


function editarProfesorObtenido() {
    var elementId = document.querySelector("#IdProfesor").value;
    var LItm = elementId.length;
    var itm = elementId.substring(10, LItm);
    var nombre = document.querySelector("#inputNombreProfesoresForm").value;
    var academia = document.querySelector("#inputAcademia").value;
    var tel = document.querySelector("#inputTelefonoProfesorForm").value;
    var email = document.querySelector("#inputEmailProfesorForm").value;
    //Agregar valores
    var EditadoProfesor = {
        oNombre: nombre,
        oAcademia: academia,
        oTel: tel,
        oEmail: email
    };
    EditarProfesores(itm, EditadoProfesor);
    llenarTabla();
    document.querySelector(".button").removeEventListener('click', editarProfesorObtenido);
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
function llenar_ListaAcademias(){
var listaAcademias = obtenerListaAcademias() ;//Funcion llamada desde la logicaNegocioProfesores Dennis
  var select = document.querySelector('#inputAcademia');
  listaAcademias.forEach(function (element) {
    select.innerHTML += "<option>"+ element["oNombre"] +"</option>"
    })
}

