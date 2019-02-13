<div id="Page">
    <div class="TituloPaginas">
        <div>
            <h1>Profesores</h1>
        </div>
    </div>
    <div class="contentPage" id="ProfesoresAsoc">
        <div class="tableContent-Init col-xs-12">
            <button class="btn btn-add">Crear nueva sedes</button>
            <div class="SearchSection">
                <span  class="Span-Buscar">Buscar</span>
                <div class="SearchInputs Search">
                    <input type="search" id="searchInput" placeholder="Digite el dato a buscar">
                </div>
            </div>
            <table id="tableProfesores" class="table table-action">
                <thead>
                    <tr>
                        <th hidden></th>
                        <th>Nombre</th>
                        <th>Academia</th>
                        <th>Telefono</th>
                        <th>Email</th>
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
                        <input id="IdProfesor" style="display:none;" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <label for="inputNombreProfesoresForm">Nombre</label>
                        <input id="inputNombreProfesoresForm" type="text" required pattern="[a-zA-Z]" />
                    </div>
                </div>
                <div class="row">
                <div class="col-xs-12">
                    <label for="inputAcademia">Academia</label>
                    <select id="inputAcademia">
                    <option selected>--Seleccione un academia--</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <label for="inputTelefonoProfesorForm">Teléfono</label>
                    <input id="inputTelefonoProfesorForm" type="text" required pattern="[0-9]{11}" />
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <label for="inputEmailProfesorForm">Email</label>
                    <input id="inputEmailProfesorForm" type="tel" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" />
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <button class="btn btn-pages button" style="display:inline-block;" id="RegProfesores"></button>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
<?php
    $Scrpts = array("js/Profesores/logicaNegocioProfesores.js","js/Profesores/logicaInterfazProfesores.js");
?>