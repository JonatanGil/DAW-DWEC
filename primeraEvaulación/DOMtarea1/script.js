        function EliminarCuadrado(eliminarCuadrado,eliminarBoton){
    

 
            //obtengo el padre
            var padre2 = eliminarBoton.parentNode;


            var papeleta2 = padre2.removeChild(eliminarBoton);

           
            /*setTimeout(padre.removeChild(nodoEliminarCuadrado), 4000);*/
            setTimeout(function(){padre.removeChild(nodoEliminarCuadrado)}, 1000);


           
            //hago el foco en el div que quiero eliminarCuadrado con la clase X=cuadrado1-2-3-4
            var nodoEliminarCuadrado = document.getElementById(eliminarCuadrado);

            //obtengo el padre
            var padre = nodoEliminarCuadrado.parentNode;

            nodoEliminarCuadrado.classList.add("eliminar");

        }

        function dobleClic(cuadrao){

            cuadrao.classList.add("cambiarCuadrado");
            
        }        


    
        function redondear(cuadrao){

            cuadrao.classList.add("transcionCirculo");

        }

        function desredondear(cuadrao){

            cuadrao.classList.remove("transcionCirculo");

        }

        function pulsar(cuadrao){
            cuadrao.classList.add("QuitarSombra");
        }

        function despulsar(cuadrao){
            cuadrao.classList.remove("QuitarSombra");
        }