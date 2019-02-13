<div id="Page">
  <div class="TituloPaginas">
    <div>
      <h1>Academias</h1>
    </div>
  </div>
  <div class="contentPage" id="Academias">
    <div class="tableContent-Init col-xs-12">
      <button class="btn btn-add">Crear nueva academia</button>
      <div class="SearchSection">
        <span class="Span-Buscar">Buscar</span>
        <div class="SearchInputs Search">
          <input type="search" id="searchInputAcademia" placeholder="Digite el dato a buscar">
        </div>
      </div>
      <table id="tableAcademias" class="table table-action">
        <thead>
          <tr>
            <th hidden></th>
            <th>Nombre</th>
            <th>Direccion</th>
            <th>Teléfono</th>
            <th>Persona de Contacto</th>
            <th>Correo Electrónico</th>
            <th></th>
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
            <input id="IdAcademia" style="display:none;" />
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <label for="inputNombreAcademiaForm">Nombre</label>
            <input id="inputNombreAcademiaForm" type="text" required pattern="[a-zA-Z]" />
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <label for="inputDireccionAcademiaForm">Direccion</label>
            <input id="inputDireccionAcademiaForm" type="text" name="direccion" required pattern="[a-zA-Z]">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <label for="inputTelefonoAcademiaForm">Teléfono</label>
            <input id="inputTelefonoAcademiaForm" type="text" name="telefono" required pattern="[0-9]{8,11}">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <label for="inputContactoAcademiaForm">Persona de Contacto</label>
            <input id="inputContactoAcademiaForm" type="text" name="contacto" type="tel" required pattern="[a-zA-Z]">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <label for="inputCorreoAcademiaForm">Correo Electrónico</label>
            <input id="inputCorreoAcademiaForm" type="text" name="correo" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$">
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <button class="btn btn-pages button" style="display:inline-block;" id="RegAcademia"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php
    $Scrpts = array("js/Academias/LogicaNegocioAcademia.js","js/Academias/LogicaInterfazAcademia.js");
?>