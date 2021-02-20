//https://api.github.com/users/PercyLeon123/repos

var Modal = function(obj) {

    var item1 = "";
    for (var i = 0; i < obj.Labores.length; i++) {
        item1 += `<span class="badge ${obj.Labores[i].Estilo}" style="margin-right:5px;">${obj.Labores[i].Labor}</span>`;
    }

    document.getElementById("FormLabores").innerHTML = item1;

    var item2 = "";
    for (var e = 0; e < obj.Tecnologias.length; e++) {
        item2 += `<span class="badge ${obj.Tecnologias[e].Estilo}" style="margin-right:5px;">${obj.Tecnologias[e].Labor}</span>`;
    }

    document.getElementById("FormTecnologias").innerHTML = item2;
}

function Idioma(lenguaje) {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var x = JSON.parse(this.responseText);

            /* Lenguaje */
            if ("ESP" == lenguaje)
                x = x.ESP;
            else if ("ENG" == lenguaje)
                x = x.ENG;
            else
                x = x.ESP;

            var obj = "";
            var skillsItem = "";
            var redesSociales = "";
            var art = "";
            var presentacion = `<h5 class="card-title">${x.NombreCompleto}</h5>
                            <p class="card-text">${x.Cargo}</p>`;
            var optionIdioma = "";
            var campoEstado = "";

            document.getElementById("NavTitle").innerHTML = x.NavTitle;
            document.getElementById("Item1").innerHTML = x.NavItem1;
            document.getElementById("Item2").innerHTML = x.NavItem2;
            document.getElementById("Item3").innerHTML = x.NavItem3;
            document.getElementById("Item4").innerHTML = x.NavItem4;
            document.getElementById("Item5").innerHTML = x.NavItem5;
            document.getElementById("Title-Presentacion").innerHTML = x.TitlePresentacion;
            document.getElementById("Title-ExperienciaLaboral").innerHTML = x.TitleExperienciaLaboral;
            document.getElementById("Title-Articulos").innerHTML = x.TitleArticulos;
            document.getElementById("TitleSituacion").innerHTML = x.TitleSituacion;
            document.getElementById("TitleHabilidades").innerHTML = x.TitleHabilidades;
            document.getElementById("TitleDespedida").innerHTML = x.TitleDespedida;
            document.getElementById("TitleModal").innerHTML = x.TitleModal;
            document.getElementById("TitleLabores").innerHTML = x.TitleLabores;
            document.getElementById("TitleTecnologias").innerHTML = x.TitleTecnologias;

            document.getElementById("TitleLanguage").innerHTML = x.TitleLanguage;

            /* Listar los idiomas para la web */
            for (var b = 0; b < x.Idiomas.length; b++) {
                var select = (lenguaje == x.Idiomas[b].Abreviatura) ? "selected" : "";
                optionIdioma += `<option value="${x.Idiomas[b].Abreviatura}" ${select}>${x.Idiomas[b].Idioma}</option>`;
            }
            /* Mostrar los idiomas para la web */
            document.getElementById("ListaIdioma").innerHTML = optionIdioma;

            /* Listar los datos personales */
            for (var u = 0; u < x.DatosPersonales.length; u++) {
                presentacion += `<p class="card-text mb-0">${x.DatosPersonales[u].item}</p>`;
            }

            /* Listar las redes Sociales */
            for (var c = 0; c < x.RedesSociales.length; c++) {
                redesSociales += `<a class="text-dark" href="${x.RedesSociales[c].Cuenta}"><i class="fab ${x.RedesSociales[c].Icono} ${x.RedesSociales[c].Estilo}"></i></a>`;
            }

            /* Mostrar las redes Sociales */
            document.getElementById("Contactame").innerHTML = redesSociales;

            /* Mostar los datos personales */
            document.getElementById("DatosPersonales-Esp").innerHTML = presentacion;

            /* Mostrar la presentacion */
            document.getElementById("Presentacion-Esp").innerHTML = x.Presentacion;

            /* Listar Estado */
            for (var li = 0; li < x.SitucionActual.length; li++) {
                campoEstado += `<div class="card text-dark mb-3 px-0" style="max-width: 18rem;">
                        <div class="card-header bg-blue fw-bold">${x.SitucionActual[li].Header}</div>
                        <div class="card-body">
                          <h5 class="card-title">${x.SitucionActual[li].Titulo}</h5>
                          <p class="card-text"  style="text-align: justify;">${x.SitucionActual[li].Descripcion}</p>
                        </div>
                     </div>`;
            }

            document.getElementById("SitucionActual").innerHTML = campoEstado;

            /* Listar las habilidades */
            for (var e = 0; e < x.Skills.length; e++) {
                cl = (e == x.Skills.length - 1) ? "mx-0 px-0" : "mx-0 px-0";
                skillsItem += `<ul class="list-group col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mt-3 mt-lg-2 ${cl}" style="max-width: 19rem;">
                        <li class="list-group-item ${x.Skills[e].Estilo}">${x.Skills[e].Area}</li>`;

                for (var a = 0; a < x.Skills[e].Lista.length; a++) {

                    skillsItem += `<li class="list-group-item d-flex justify-content-between align-items-center px-2">
                          ${x.Skills[e].Lista[a].Habilidad}
                          <span class="badge bg-info rounded-pill">${x.Skills[e].Lista[a].Nivel}</span>
                        </li>`;
                }

                skillsItem += `</ul>`;
            }

            document.getElementById("Skills-Esp").innerHTML = skillsItem;

            /* Mostrar experiencia laboral resumen */
            document.getElementById("Resumen-ExpeLaboral").innerHTML = x.ExperienciaLaboral.Resumen;

            /* Listar experiencia laboral */
            for (var i = 0; i < x.ExperienciaLaboral.Lista.length; i++) {

                obj += `<div class="card mb-3">
                    <div class="row px-0 mx-0">
                      <div class=" px-0 px-md-2 col-lg-3 col-md-4 d-flex justify-content-center align-items-center">
                        <img class="img-thumbnail ${x.ExperienciaLaboral.Lista[i].Estilo}" src="${x.ExperienciaLaboral.Lista[i].Img}">
                      </div>
                      <div class=" col-lg-9 col-md-8 px-0 mx-0">
                        <div class="card-body">
                          <h5 class="card-title">${x.ExperienciaLaboral.Lista[i].RazonSocial}</h5>
                          <p class="card-text" style="text-align: justify;">${x.ExperienciaLaboral.Lista[i].Descripcion}</p>
                          <p class="card-text d-flex justify-content-between align-items-center"><button class="btn btn-primary btn-sm" data-bs-toggle="modal" onclick='Modal(${JSON.stringify(x.ExperienciaLaboral.Lista[i].Resumen)})' data-bs-target="#ModalResumenExperiancia">Resumen</button><small class="text-secondary">${x.ExperienciaLaboral.Lista[i].Tiempo}</small></p>
                        </div>
                      </div>
                    </div>
                  </div>`;
            }

            document.getElementById("FormExperiencia-Esp").innerHTML = obj;

            document.getElementById("Descripcion-Articulos").innerHTML = x.Articulos.Descripcion;
            /* Listar Articulos */

            for (var o = 0; o < x.Articulos.Lista.length; o++) {
                art += `<div class=" col-12 col-md-6 col-lg-4 mt-4 mt-lg-3">
                  <img src="${x.Articulos.Lista[o].Imagen}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${x.Articulos.Lista[o].Titulo}</h5>
                    <p class="card-text" style="text-align: justify;">${x.Articulos.Lista[o].Contenido}</p>
                    <p class="card-text"><small class="text-muted">${x.Articulos.Lista[o].Fecha}</small></p>
                  </div>
                </div>`;
            }

            document.getElementById("Articulos-Esp").innerHTML = art;

            /* Mostrar contenido del footer */
            document.getElementById("TitleDespedidaArt").innerHTML = x.Despedida.TitleDespedidaArt;
            document.getElementById("ContentDespedida").innerHTML = x.Despedida.ContentDespedida;
            document.getElementById("FooterDespedida").innerHTML = x.Despedida.FooterDespedida;

            /* Mostrar contenido del footer */
            document.getElementById("Footer").innerHTML = x.Footer;
        }
    };

    xhttp.open("GET", "/index.json", true);
    xhttp.send();
}

const valores = window.location.search;
var param = (valores == '') ? "ESP" : valores.replace('?', '');

Idioma(param);