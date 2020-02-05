//let got = [];

function getJson() {
    fetch('http://localhost/GOT/js/insertarDatos.php')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
   console.log(myJson);
   
   //hacerEstructura(myJson);
  });
}

function hacerEstructura(got) {
    console.log(got);
    let container = document.getElementById("contenedorFichas");
    
    got.got.forEach(personaje => {
        container.innerHTML += 
        '<img src="'+personaje.imagen+'">'+
        '<div class="datos">'+
        '<div class="small cabecera">Nombre</div>'+
        '<div class="medium cabecera">Apellidos</div>'+
        '<div class="small dato">'+personaje.nombre+'</div>'+
        '<div class="medium dato">'+personaje.apellidos+'</div>'+
        '<div class="medium cabecera">Padres</div>'+
        '<div class="small cabecera">Casa</div>'+
        '<div class="medium dato">'+personaje.padres+'</div>'+
        '<div class="small dato">'+personaje.familia+'</div>'+
        '<div class="big cabecera">Titulo</div>'+
        '<div class="big dato">'+personaje.titulo+'</div>'+
         '</div>'
    });
    
}

function init() {
    getJson();
}

window.onload = init;