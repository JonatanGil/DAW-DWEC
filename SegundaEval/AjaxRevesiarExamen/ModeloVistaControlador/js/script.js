
window.onload = cargar;


function cargar() {

    console.log("carga");

    fetch("../php/obtener_jugadores.php")
        .then(function (res) {
            if (res.status >= 200 && res.status < 300) {
                return res.json();
            }
        }).then(resjson => {
            console.log(resjson);
        }).catch(function (err) {
        });
}

