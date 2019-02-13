document.querySelector("#RegAlumnos").addEventListener('click', obtener_DatosAlumnos);
llenar_TablaAlumnosTabla();
llenar_ListaAcademias();
llenar_ListaProfesores();


function Search(){
    if (!(window.history && history.pushState)) return;
    var searchInput = document.querySelector("#searchInput"),
        rows = document.querySelectorAll("#tableAlumnos tbody tr"),
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

function obtener_DatosAlumnos() {

    var validado = validar();
    if(validado == false){
    var id = 0;
    var sNombre = document.querySelector('#txtNombre').value;
    var dFechaNacimiento = document.querySelector('#txtFechaNacimiento').value;
    var nEdad = Number(document.querySelector('#txtEdad').value);
    var nPeso = Number(document.querySelector('#txtPeso').value);
    var nAltura = Number(document.querySelector('#txtAltura').value)
    var cGrado = document.querySelector('#txtGrado').value;
    var sAcademia = document.querySelector('#txtAcademia').value;
    var sProfesor = document.querySelector('#txtProfesor').value;
    var nuevoAlumno = {
        oId: id,
        oNombre: sNombre,
        oFechaNacimiento: dFechaNacimiento,
        oEdad: nEdad,
        oPeso: nPeso,
        oAltura: nAltura,
        oGrado: cGrado,
        oAcademia: sAcademia,
        oProfesor : sProfesor
    };
    agregar_Alumnos(nuevoAlumno);
    llenar_TablaAlumnosTabla();
    }
}

function llenar_TablaAlumnosTabla() {
  var listaAlumnos = obtener_ListaAlumnos();
  var nCantAlumnos = listaAlumnos.length;
  var tbody = document.querySelector('#tableAlumnos tbody');

  tbody.innerHTML = '';

  listaAlumnos.forEach(function (element) {

    tbody.innerHTML += "<tr><td hidden>" + element["oId"] + "</td><td>" + element["oNombre"] + "</td><td>" + element["oFechaNacimiento"] + "</td><td>" + element["oEdad"] + "</td><td>" + element["oPeso"] + "</td><td>" + element["oAltura"] + "</td><td>" + element["oGrado"] +"</td><td>" + element["oAcademia"] + "</td><td>" + element["oProfesor"] + "</td><td><a onclick='SlideFormEditar(this)' class='btnEditar' id='btnEditar-" + element["oId"] + "'><img src='../img/editar.png' width='20'></a><a class='btnEliminar' onclick='eliminarAlumno(this.id)' id='btnEliminar-" + element["oId"] + "'><img src='../img/delete.png' width='20'></a></td></tr>";
    });
    Search();
}

function eliminarAlumno(elementId) {
    var LItm = elementId.length;
    var itm = elementId.substring(12, LItm);
    eliminarAlumnoNegocio(itm);
    llenar_TablaAlumnosTabla();
}

function SlideFormEditar(elementEditar) {
    var id = elementEditar.id;
    var LItm = id.length;
    var itm = id.substring(10, LItm);
    var eElemento = BuscarAlumno(itm);
    document.querySelector('#txtNombre').value = eElemento["oNombre"];
    document.querySelector('#txtFechaNacimiento').value = eElemento["oFechaNacimiento"];
    Number(document.querySelector('#txtEdad').value = eElemento["oEdad"]);
    Number(document.querySelector('#txtPeso').value = eElemento["oPeso"]);
    Number(document.querySelector('#txtAltura').value = eElemento["oAltura"]);
    document.querySelector('#txtGrado').value = eElemento["oGrado"];
    document.querySelector('#txtAcademia').value = eElemento["oAcademia"];
    document.querySelector('#txtProfesor').value = eElemento["oProfesor"];
    var element = $(elementEditar).attr('class');
    var parent = "Alumnos";
    document.querySelector("#IdAlumno").value = elementEditar.id;
    $("#" + parent + " div:last-child .Form h2").text("Modificar");
    document.querySelector(".button").innerHTML = "Modificar";
    document.querySelector(".button").removeEventListener('click', obtener_DatosAlumnos);
    document.querySelector(".button").addEventListener('click', editarAlumnoObtenido);
    $("#" + parent + " .tableContent-Init").switchClass("col-xs-12", "col-xs-7", "easeInOutQuad");
    $("#" + parent + " .FormContent-Init").css({ "opacity": "0", "display": "block", }).animate({ opacity: 1 }, function () {
        $("#" + parent + " .FormContent-Init .Form").css('display', 'block');
    })
}


function editarAlumnoObtenido() {
    var elementId = document.querySelector("#IdAlumno").value;//FormInputs
    var LItm = elementId.length;
    var itm = elementId.substring(10, LItm);

    var sNombre = document.querySelector('#txtNombre').value;
    var dFechaNacimiento = document.querySelector('#txtFechaNacimiento').value;
    var nEdad = Number(document.querySelector('#txtEdad').value);
    var nPeso = Number(document.querySelector('#txtPeso').value);
    var nAltura = Number(document.querySelector('#txtAltura').value)
    var cGrado = document.querySelector('#txtGrado').value;
    var sAcademia = document.querySelector('#txtAcademia').value;
    var sProfesor = document.querySelector('#txtProfesor').value;
    var editadoAlumno = {
        oNombre: sNombre,
        oFechaNacimiento: dFechaNacimiento,
        oEdad: nEdad,
        oPeso: nPeso,
        oAltura: nAltura,
        oGrado: cGrado,
        oAcademia: sAcademia,
        oProfesor : sProfesor
    };

    EditarAlumno(itm, editadoAlumno);
    llenar_TablaAlumnosTabla();
    document.querySelector(".button").removeEventListener('click', editarAlumnoObtenido);
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
  var select = document.querySelector('#txtAcademia');
  listaAcademias.forEach(function (element) {
    select.innerHTML += "<option>"+ element["oNombre"] +"</option>"
    })
}
function llenar_ListaProfesores(){
var listaProfesores = obtenerListaProfesores() ;//Funcion llamada desde la logicaNegocioProfesores Dennis
  var select = document.querySelector('#txtProfesor');
  listaProfesores.forEach(function (element) {
    select.innerHTML += "<option>"+ element["oNombre"] +"</option>"
    })
}
