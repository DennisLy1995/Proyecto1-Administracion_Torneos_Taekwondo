<div id="Page">
    <div class="TituloPaginas">
        <div>
            <h1>Sedes asociadas</h1>
        </div>
    </div>
    <div class="contentPage" id="SedesAsoc">
        <div class="tableContent-Init col-xs-12">
            <button class="btn btn-add">Crear nueva sedes</button>
            <div class="SearchSection">
                <span  class="Span-Buscar">Buscar</span>
                <div class="SearchInputs Search">
                    <input type="search" id="searchInput" placeholder="Digite el dato a buscar">
                </div>
            </div>
            <table id="tableSedes" class="table table-action">
                <thead>
                    <tr>
                        <th hidden></th>
                        <th>Nombre</th>
                        <th>Ubicación</th>
                        <th>Encargado</th>
                        <th>Teléfono del encargado</th>
                        <th>Horario de disponibilidad</th>
                        <th>Capacidad</th>
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
                        <input id="IdSede" style="display:none;" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12">
                        <label for="inputNombreSedeForm">Nombre</label>
                        <input id="inputNombreSedeForm" type="text" required pattern="[a-zA-Z]" />
                    </div>
                </div>
                <div class="row">
                <div class="col-xs-12">
                    <label for="inputUbicacionSedeForm">Ubicación</label>
                    <input id="inputUbicacionSedeForm" type="text" required pattern="[a-zA-Z]" />
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <label for="inputEncargadoSedeForm">Encargado</label>
                    <input id="inputEncargadoSedeForm" type="text" required pattern="[a-zA-Z]" />
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <label for="inputTelefonoSedeForm">Teléfono</label>
                    <input id="inputTelefonoSedeForm" type="tel" required pattern="[0-9]{8,11}" />
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6">
                    <label for="inputDisponibilidadForm">Disponibilidad</label>
                    <input id="inputDisponibilidadForm" type="text" required/>
                </div>
                <div class="col-xs-6">
                    <label for="inputCapacidadSedeForm">Capacidad</label>
                    <input id="inputCapacidadSedeForm" type="number" required pattern="[1-9]{1}" />
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <button class="btn btn-pages button" style="display:inline-block;" id="RegSedes"></button>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
<?php
    $Scrpts = array("js/SedesAsociadas/logicaNegocioSedes.js","js/SedesAsociadas/logicaInterfazSedes.js");
?>