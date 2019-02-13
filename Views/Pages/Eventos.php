<link rel="stylesheet" type="text/css" href="../styles/Eventos.css">
<div id="Page">
  <div class="TituloPaginas">
    <div>
      <h1>Eventos</h1>
    </div>
  </div>
  <div class="contentPage">
    <div class="tabs">
      <input type="radio" name="tabs" id="tabone" checked="checked">
      <label class="label" for="tabone">Torneos</label>
      <div class="tab" id="TabTorneos" class="row">
        <div class="tableContent-Init col-xs-12">
          <button class="btn btn-add">Crear nuevo torneo</button>
          <div class="SearchSection">
            <span class="Span-Buscar-Eventos">Buscar</span>
            <div class="SearchInputs Search-eventos">
              <input type="search" id="searchInputTorneos" placeholder="Digite el dato a buscar">
            </div>
          </div>
          <table id="tableEventosTorneos" class="table table-action">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha de inicio</th>
                <th>Fecha de finalización</th>
                <th>Lugar</th>
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div class="FormContent-Init Form-ColorPages-Eventos col-xs-5">
          <span class="close"><img src="../img/close.png" width="15"/></span>
          <div class="Form">
            <h2></h2>
            <div class="row">
              <div class="col-xs-12">
                <label for="inputNombreTorneo">Nombre</label>
                <input id="inputNombreTorneo" type="text" required/>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label for="selectLugar">Lugar</label>
                <select id="selectLugarTorneo" list="lstLugares" required>
                <option selected>-- Seleccione una sede --</option>
              </select>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label>Partrocinadores</label>
                <button type="button" class="boton-formulario" id="agregarPatrocinador"><img src="../img/plus.png" width="15"/></button>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div id="itemPatrocinadores">
                  <div class="row" id="patrocinador-1">
                    <div class="col-xs-5">
                      <select id="Iempresa-1">
            					<option selected>Seleccione una empresa</option>
            					<option></option>
                		</select>
                    </div>
                    <div class="col-xs-5">
                      <select id="Iproductos-1">
                  		<option>Seleccione un producto</option>
                		</select>
                    </div>
                    <div class="col-xs-2">
                      <button type="button" class="boton-formulario borrarPatrocinador"><img src="../img/delete.png" width="15"/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label>Academias participantes</label>
                <button type="button" class="boton-formulario" id="agregarAcademia"><img src="../img/plus.png" width="15"/></button>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div id="itemAcademias">
                  <div class="row" id="academiaProfesor-1">
                    <div class="col-xs-5">
                      <select id="academia-1" list="lstAcademias">
                					<option selected>Seleccione una academia</option>
                					<option></option>
                		</select>
                    </div>
                    <div class="col-xs-5">
                      <select id="profesor-1" list="lstProfesores">
                  		<option>Seleccione un profesor</option>
                  		</select>
                    </div>
                    <div class="col-xs-2">
                      <button type="button" class="boton-formulario borrarAcademia"><img src="../img/delete.png" width="15"/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label>Categorias aceptadas</label>
                <button type="button" id="agregarCategoria" class="boton-formulario"><img src="../img/plus.png" width="15"/></button>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div id="itemCategorias">
                  <div class="row" id="Categoria-1">
                    <div class="col-xs-10">
                      <select id="Icategoria-1">
            					<option selected>Seleccione un grado</option>
                      <option>Blanco</option>
                      <option>Amarillo</option>
                      <option>Azul</option>
                      <option>Verde</option>
                      <option>Rojo</option>
                      <option>Negro</option>
                </select>
                    </div>
                    <div class="col-xs-2">
                      <button type="button" class="boton-formulario borrarCategoria"><img src="../img/delete.png" width="15"/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-6">
                <label for="inputFechaInicioTorneo">Fecha de inicio</label>
                <input id="inputFechaInicioTorneo" type="date" />
              </div>
              <div class="col-xs-6">
                <label for="inputFechaFinTorneo">Fecha de finalización</label>
                <input id="inputFechaFinTorneo" type="date" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label for="inputEntradasDisponiblesTorneo">Entradas disponibles</label>
                <input id="inputEntradasDisponiblesTorneo" type="number" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label for="inputOrganizacionBefenicaTorneo">Organización Benefica</label>
                <input id="inputOrganizacionBefenicaTorneo" type="text" lst="lstOrganizacionesBeneficas" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <button class="btn btn-pages button" id="RegEventoTorneo">Registrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="radio" name="tabs" id="tabtwo">
      <label class="label" for="tabtwo">Exhibiciones</label>
      <div class="tab" id="TabExhibiciones" class="row">
        <div class="tableContent-Init col-xs-12">
          <button class="btn btn-add">Crear nuevo encuentro de Exhibición</button>
          <div class="SearchSection">
            <span class="Span-Buscar-Eventos">Buscar</span>
            <div class="SearchInputs Search-eventos">
              <input type="search" id="searchInputExhibiciones" placeholder="Digite el dato a buscar">
            </div>
          </div>
          <table id="tableEventosExhibiciones" class="table table-action">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha de inicio</th>
                <th>Fecha de finalización</th>
                <th>Lugar</th>
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div class="FormContent-Init Form-ColorPages-Eventos col-xs-5">
          <span class="close"><img src="../img/close.png" width="15"/></span>
          <div class="Form">
            <h2></h2>
            <div class="row">
              <div class="col-xs-12">
                <label for="inputNombreExhibicion">Nombre</label>
                <input id="inputNombreTorneo" type="text" required/>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label for="selectLugar">Lugar</label>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <select id="selectLugarExhibicion" list="lstLugares" required>
                  <option selected>Seleccione un lugar</option>
                  <option></option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label>Partrocinadores</label>
                <button type="button" class="boton-formulario" id="agregarPatrocinador"><img src="../img/plus.png" width="15"/></button>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div id="itemPatrocinadores">
                  <div class="row">
                    <div class="col-xs-5">
                      <select list="lstPatrocinadores">
              					<option selected>Seleccione una empresa</option>
              					<option></option>
                  		</select>
                    </div>
                    <div class="col-xs-5">
                      <select list="Productos">
                    		<option>Seleccione un producto</option>
                  		</select>
                    </div>
                    <div class="col-xs-2">
                      <button type="button" class="boton-formulario"><img src="../img/delete.png" width="15"/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label>Academias participantes</label>
                <button type="button" class="boton-formulario" id="agregarAcademia"><img src="../img/plus.png" width="15"/></button>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div id="itemAcademias">
                  <div class="row">
                    <div class="col-xs-5">
                      <select list="lstAcademias">
                  					<option selected>Seleccione una academia</option>
                  					<option></option>
                  		</select>
                    </div>
                    <div class="col-xs-5">
                      <select list="lstProfesores">
                    		<option>Seleccione un profesor</option>
                    		</select>
                    </div>
                    <div class="col-xs-2">
                      <button type="button" class="boton-formulario"><img src="../img/delete.png" width="15"/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label>Categorias aceptadas</label>
                <button type="button" id="agregarCategoria" class="boton-formulario"><img src="../img/plus.png" width="15"/></button>
              </div>
            </div>
            <div id="itemAcademias">
              <div class="row">
                <div class="col-xs-12">
                  <select>
              					<option selected>Seleccione un grado</option>
                        <option>Blanco</option>
                        <option>Amarillo</option>
                        <option>Azul</option>
                        <option>Verde</option>
                        <option>Rojo</option>
                        <option>Negro</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-6">
                <label for="inputFechaInicioExhibicion">Fecha de inicio</label>
                <input id="inputFechaInicio" type="date" />
              </div>
              <div class="col-xs-6">
                <label for="inputFechaFinExhibicion">Fecha de finalización</label>
                <input id="inputFechaFinTorneo" type="date" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label for="inputEntradasDisponiblesExhibicion">Entradas disponibles</label>
                <input id="inputEntradasDisponiblesTorneo" type="number" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label for="inputOrganizacionBefenicaExhibicion">Organización Benefica</label>
                <input id="inputOrganizacionBefenicaTorneo" type="text" lst="lstOrganizacionesBeneficas" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label for="inputCostoInscripcionTorneo">Costo inscripción</label>
                <input id="inputCostoInscripcionTorneo" type="text" lst="lstOrganizacionesBeneficas" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label for="inputInvitadoEspecial">Invitado Especial</label>
                <button type="button" class="boton-formulario" id="agregarInvitado"><img src="../img/plus.png" width="15"/></button>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div id="itemInvitados">
                  <div class="row">
                    <div class="col-xs-10">
                      <input id="inputInvitadoEspecial" type="email" />
                    </div>
                    <div class="col-xs-2">
                      <button type="button" class="boton-formulario"><img src="../img/delete.png" width="15"/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <button class="btn btn-pages button" style="display:inline-block;" id="RegExhibiciones">Registrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="radio" name="tabs" id="tabthree">
      <label class="label" for="tabthree">Fogueos</label>
      <div class="tab" id="TabFogueos" class="row">
        <div class="tableContent-Init col-xs-12">
          <button class="btn btn-add">Crear encuentro de fogueo</button>
          <div class="SearchSection">
            <span class="Span-Buscar-Eventos">Buscar</span>
            <div class="SearchInputs Search-eventos">
              <input type="search" id="searchInputFogueos" placeholder="Digite el dato a buscar">
            </div>
          </div>
          <table id="tableEventosFogueos" class="table table-action">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha de inicio</th>
                <th>Fecha de finalización</th>
                <th>Lugar</th>
                <th></th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div class="FormContent-Init Form-ColorPages-Eventos col-xs-5">
          <span class="close"><img src="../img/close.png" width="15"/></span>
          <div class="Form">
            <h2></h2>
            <div class="row">
              <div class="col-xs-12">
                <label for="inputNombreExhibicion">Nombre</label>
                <input id="inputNombreTorneo" type="text" required/>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label for="selectLugar">Lugar</label>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <select id="selectLugarExhibicion" list="lstLugares" required>
                  <option selected>Seleccione un lugar</option>
                  <option></option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label>Partrocinadores</label>
                <button type="button" class="boton-formulario" id="agregarPatrocinador"><img src="../img/plus.png" width="15"/></button>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div id="itemPatrocinadores">
                  <div class="row">
                    <div class="col-xs-5">
                      <select list="lstPatrocinadores">
                        <option selected>Seleccione una empresa</option>
                        <option></option>
                      </select>
                    </div>
                    <div class="col-xs-5">
                      <select list="Productos">
                        <option>Seleccione un producto</option>
                      </select>
                    </div>
                    <div class="col-xs-2">
                      <button type="button" class="boton-formulario"><img src="../img/delete.png" width="15"/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label>Academias participantes</label>
                <button type="button" class="boton-formulario" id="agregarAcademia"><img src="../img/plus.png" width="15"/></button>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <div id="itemAcademias">
                  <div class="row">
                    <div class="col-xs-5">
                      <select list="lstAcademias">
                            <option selected>Seleccione una academia</option>
                            <option></option>
                      </select>
                    </div>
                    <div class="col-xs-5">
                      <select list="lstProfesores">
                        <option>Seleccione un profesor</option>
                        </select>
                    </div>
                    <div class="col-xs-2">
                      <button type="button" class="boton-formulario"><img src="../img/delete.png" width="15"/></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label>Categorias aceptadas</label>
                <button type="button" id="agregarCategoria" class="boton-formulario"><img src="../img/plus.png" width="15"/></button>
              </div>
            </div>
            <div id="itemAcademias">
              <div class="row">
                <div class="col-xs-12">
                  <select>
                        <option selected>Seleccione un grado</option>
                        <option>Blanco</option>
                        <option>Amarillo</option>
                        <option>Azul</option>
                        <option>Verde</option>
                        <option>Rojo</option>
                        <option>Negro</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-6">
                <label for="inputFechaInicioExhibicion">Fecha de inicio</label>
                <input id="inputFechaInicio" type="date" />
              </div>
              <div class="col-xs-6">
                <label for="inputFechaFinExhibicion">Fecha de finalización</label>
                <input id="inputFechaFinTorneo" type="date" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label for="inputEntradasDisponiblesExhibicion">Entradas disponibles</label>
                <input id="inputEntradasDisponiblesTorneo" type="number" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label for="inputOrganizacionBefenicaExhibicion">Organización Benefica</label>
                <input id="inputOrganizacionBefenicaTorneo" type="text" lst="lstOrganizacionesBeneficas" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <label for="inputCostoInscripcionTorneo">Costo inscripción</label>
                <input id="inputCostoInscripcionTorneo" type="text" lst="lstOrganizacionesBeneficas" />
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <button class="btn btn-pages  button" style="display:inline-block;" id="RegSedes">Registrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<?php
    $Scrpts = array("js/Evento/logicaNegocioEvento.js","js/Evento/logicaInterfazEvento.js");
?>