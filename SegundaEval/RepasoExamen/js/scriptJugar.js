let got;
function getJson() {
    fetch('got.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {

        let container = document.getElementById("contenedorFotos");
        //let datos = datos;
         myJson.got.forEach(personaje => {
             container.innerHTML+='<div class="col-xs-6 col-sm-3 contenedorJuego" id="' + personaje.nombre + '"data-family="' + personaje.familia + '" draggable="true">' +
                 '<img class="img-thumbnail" id="imagen" src="' + personaje.imagen + '" draggable="false">' +
                         '<select class="form-control">' +
                         '<option>Selecciona familia...</option>' +
                         '<option value="Casa Lannister">Casa Lanniester</option>' +
                         '<option value="Casa Targaryen">Casa Targaryen</option>' +
                         '<option value="Casa Stark">Casa Stark</option>' +
                         '<option value="Casa Bolton">Casa Bolton</option>' +
                         '<option value="Casa Tyrell">Casa Tyrell</option>' +
                         '<option value="Casa Baratheon">Casa Baratheon</option>' +
                         '<option value="Casa Clegane">Casa Clegane</option>' +
                         '</select>' +
                         '</div>';
         });
    });
}

/*function hacerEstructura(datos) {
    let container = document.getElementById("contenedorFotos");
   //let datos = datos;
    datos.got.forEach(personaje => {
        container.innerHTML+='<div class="col-xs-6 col-sm-3 contenedorJuego" id="' + personaje.nombre + '"data-family="' + personaje.familia + '" draggable="true">' +
            '<img class="img-thumbnail" id="imagen" src="' + personaje.imagen + '" draggable="false">' +
                    '<select class="form-control">' +
                    '<option>Selecciona familia...</option>' +
                    '<option value="Casa Lannister">Casa Lanniester</option>' +
                    '<option value="Casa Targaryen">Casa Targaryen</option>' +
                    '<option value="Casa Stark">Casa Stark</option>' +
                    '<option value="Casa Bolton">Casa Bolton</option>' +
                    '<option value="Casa Tyrell">Casa Tyrell</option>' +
                    '<option value="Casa Baratheon">Casa Baratheon</option>' +
                    '<option value="Casa Clegane">Casa Clegane</option>' +
                    '</select>' +
                    '</div>';
    });
}*/

function comprobarAciertos() {
    let aciertos = 0;
    let fallos = 0;
    let divCheck = document.getElementById('check');

    for (div of divCheck.children) {

        if(div.children.length > 0){

            let contenido = div.firstChild.nextSibling.dataset.family;
            let id = div.id;

            if(contenido == id) aciertos++;
            else fallos++;

        }
    }

    mostrarResultado(aciertos,fallos);
}
 
    function mostrarResultado(aciertos, fallos) {

        console.log('aciertos:' + aciertos);
        console.log('fallos:' + fallos);
    
        let divResultados = document.createElement('div');
        let body = document.querySelector('body');
    
        divResultados.innerHTML = '';
    
        divResultados.innerHTML =
            '<p>ACIERTOS: ' + aciertos + '</p>' +
            '<p>FALLOS: ' + fallos + '</p>';
    
        body.appendChild(divResultados);
    }


async function init() {
    //getJson();
    await getJson();
    document.querySelector('button').addEventListener('click', comprobarAciertos);
}

window.onload = init;