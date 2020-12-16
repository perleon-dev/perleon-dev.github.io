

var Modal = function(obj){

  console.log(obj);
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


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var x = JSON.parse(this.responseText);
    console.log("response: "+x.ExperienciaLaboral);
    var obj="";
    for(var i = 0; i < x.ExperienciaLaboral.length; i++) {
        obj += `<div class="d-flex position-relative mt-3">
                    <img src="${x.ExperienciaLaboral[i].Img}" height="120" class="flex-shrink-0 me-3" alt="...">
                    <div>
                      <h5 class="mt-0">${x.ExperienciaLaboral[i].RazonSocial}</h5>
                      <p style="text-align: justify;">${x.ExperienciaLaboral[i].Descripcion}</p>
                        <button class="btn btn-primary btn-sm" data-bs-toggle="modal" onclick='Modal(${JSON.stringify(x.ExperienciaLaboral[i].Resumen)})' data-bs-target="#ModalResumenExperiancia">Resumen</button>
                    </div>
                  </div>`;

      document.getElementById("FormExperiencia").innerHTML = obj;
    }
  }
};

xhttp.open("GET", "/index.json", true);
xhttp.send();
