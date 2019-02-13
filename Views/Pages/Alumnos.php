<div id="Page">
    <div class="TituloPaginas">
        <div>
            <h1>Alumnos</h1>
        </div>
    </div>
    <div class="contentPage" id="Alumnos">
        <div class="tableContent-Init col-xs-12">
              <button class="btn btn-add">Crear nuevo alumno</button>
            <div class="SearchSection">
                <span  class="Span-Buscar">Buscar</span>
                <div class="SearchInputs Search">
                    <input type="search" id="searchInput" placeholder="Digite el dato a buscar">
                </div>
            </div>
            <table id="tableAlumnos" class="table table-action">
                <thead>
                    <tr>
                        <th hidden></th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Fecha de nacimiento</th>
                        <th>Edad</th>
                        <th>Peso</th>
                        <th>Altura</th>
                        <th>Grado</th>
                        <th>Academia</th>
                        <th>Profesor</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
        <div class="FormContent-Init Form-ColorPages col-xs-5">
            <span class="close"><img src="../img/close.png" width="15"/></span>
            <div class="Form">
                <h2></h2>
                <div class="row">
                    <div class="col-xs-12">
                        <input id="IdAlumno" style="display:none;" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                      <label for="txtNombre">Nombre</label>
                      <input id="txtNombre" type="text" required pattern="[a-zA-Z]"  />
                    </div>
                </div>
                <div class="row">
                <div class="col-xs-12">
                  <label for="txtFechaNacimiento">Fecha de nacimiento</label>
                  <input type="date" id="txtFechaNacimiento" required>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6">
                  <label for="txtEdad">Edad</label>
                  <input type="number" id="txtEdad" required>
                </div>
                <div class="col-xs-6">
                  <label for="txtPeso">Peso</label>
                  <input type="number" id="txtPeso" required>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6">
                  <label for="txtAltura">Altura</label>
                  <input type="number" id="txtAltura" required>
                </div>
                <div class="col-xs-6">
                  <label for="txtGrado">Grado</label>
                  <select id="txtGrado">
                    <option value="blanco">Blanco</option>
                      <option value="amarillo">Amarillo</option>
                      <option value="verde">Verde</option>
                      <option value="">Azul</option>
                      <option value="rojo">Rojo</option>
                      <option value="negro">Negro</option>
                  </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                  <label for="txtAcademia">Academia</label>
                  <select id="txtAcademia">
                    <option selected>--Seleccione un academia--</option>
                  </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                  <label for="txtProfesor">Profesor</label>
                  <select id="txtProfesor">
                    <option selected>--Seleccione un profesor--</option>
                  </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <button class="btn btn-pages button" style="display:inline-block;" id="RegAlumnos"></button>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
<?php
    $Scrpts = array("js/Alumnos/logicaNegociosAlumno.js","js/Alumnos/logicaInterfazAlumno.js");
?>
