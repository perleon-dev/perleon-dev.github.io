var Modal = function(obj){
  
  var item1="";
  for(var i = 0; i < obj.Labores.length; i++) {
    item1 += `<span class="badge rounded-pill ${obj.Labores[i].Estilo}">${obj.Labores[i].Labor}</span>`;
    document.getElementById("FormLabores").innerHTML = item1;
  }

  var item2="";
  for(var e = 0; e < obj.Tecnologias.length; e++) {
    item2 += `<span class="badge rounded-pill ${obj.Tecnologias[e].Estilo}">${obj.Tecnologias[e].Labor}</span>`;
    document.getElementById("FormTecnologias").innerHTML = item2;
  }
}

function Idioma(lenguaje){
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var x = JSON.parse(this.responseText);
      x = ("ESP"==lenguaje) ? x.ESP:x.ENG;

      var obj="";
      var skillsItem ="";
      var art ="";
      var presentacion =`<h5 class="card-title">${x.NombreCompleto}</h5>
                            <p class="card-text">${x.Cargo}</p>`;

      for(var u = 0; u<x.DatosPersonales.length; u++)
      {
        presentacion +=`<p class="card-text mb-0">${x.DatosPersonales[u].item}</p>`;
      }

      /* Listar los datos personales */
      document.getElementById("DatosPersonales-Esp").innerHTML = presentacion;

      /* Mostrar la presentacion */
      document.getElementById("Presentacion-Esp").innerHTML = x.Presentacion;

      /* Listar las habilidades */
      for(var e = 0; e<x.Skills.length; e++)
      {
        skillsItem +=`<ul class="list-group col-3">
                        <li class="list-group-item ${x.Skills[e].Estilo}">${x.Skills[e].Area}</li>`;

        for(var a = 0; a<x.Skills[e].Lista.length; a++)
        {
          skillsItem +=`<li class="list-group-item">${x.Skills[e].Lista[a].Habilidad}</li>`;
        }

        skillsItem +=`</ul>`;

      }

      document.getElementById("Skills-Esp").innerHTML = skillsItem;

      /* Listar experiencia laboral */
      for(var i = 0; i < x.ExperienciaLaboral.length; i++) {

          obj += `<div class="d-flex position-relative pt-3">
                      <img src="${x.ExperienciaLaboral[i].Img}" height="120" class="flex-shrink-0 me-3" alt="...">
                      <div>
                        <h5 class="mt-0">${x.ExperienciaLaboral[i].RazonSocial}</h5>
                        <p style="text-align: justify;">${x.ExperienciaLaboral[i].Descripcion}</p>
                          <button class="btn btn-primary btn-sm" data-bs-toggle="modal" onclick='Modal(${JSON.stringify(x.ExperienciaLaboral[i].Resumen)})' data-bs-target="#ModalResumenExperiancia">Resumen</button>
                      </div>
                    </div>`;
        }

      document.getElementById("FormExperiencia-Esp").innerHTML = obj;

      /* Listar Articulos */

      for(var o = 0; o < x.Articulos.length; o++){
          art +=`<div class="card">
                  <img src="${x.Articulos[o].Imagen}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${x.Articulos[o].Titulo}</h5>
                    <p class="card-text" style="text-align: justify;">${x.Articulos[o].Contenido}</p>
                    <p class="card-text"><small class="text-muted">${x.Articulos[o].Fecha}</small></p>
                  </div>
                </div>`;
          }

        document.getElementById("Articulos-Esp").innerHTML = art;
    }
  };

  xhttp.open("GET", "/index.json", true);
  xhttp.send();
}

Idioma("ESP");