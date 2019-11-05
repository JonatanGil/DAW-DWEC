Jugador=[];
IA=[];
ganador=0;
empate=false;
turno=1;
contador=0;

const div = document.querySelectorAll("div");
div.forEach(boton => {boton.addEventListener('click', pulsar,false)});




function pulsar(e){
    if(ganador==0){
        if(turno=="1"){
            if(!this.classList.contains("fichaJugador")){
                if(!this.classList.contains("fichaIA")){
                this.classList.add("fichaJugador");
                var valor = this.id;
                Jugador.push(valor);
                turno++;
                contador++;
                    
            }}
        }else{
            if(!this.classList.contains("fichaJugador")){
                if(!this.classList.contains("fichaIA")){
                this.classList.add("fichaIA");
                var valor = this.id;
                IA.push(valor);
                turno--;
                contador++;
                    
            }}
        }
    }


        ganadorAlguien(e);

}

function ganadorAlguien(e){

    
    if((Jugador.includes("1") && Jugador.includes("2") && Jugador.includes("3")) ||
       (Jugador.includes("4") && Jugador.includes("5") && Jugador.includes("6")) ||
       (Jugador.includes("7") && Jugador.includes("8") && Jugador.includes("9")) ||

       (Jugador.includes("1") && Jugador.includes("4") && Jugador.includes("7")) ||
       (Jugador.includes("2") && Jugador.includes("5") && Jugador.includes("8")) ||
       (Jugador.includes("3") && Jugador.includes("6") && Jugador.includes("9")) ||

       (Jugador.includes("1") && Jugador.includes("5") && Jugador.includes("9")) ||
       (Jugador.includes("3") && Jugador.includes("5") && Jugador.includes("7"))){
         ganador="1";
    }

    if((IA.includes("1") && IA.includes("2") && IA.includes("3"))  ||
       (IA.includes("4") && IA.includes("5") && IA.includes("6")) ||
       (IA.includes("7") && IA.includes("8") && IA.includes("9")) ||

       (IA.includes("1") && IA.includes("4") && IA.includes("7")) ||
       (IA.includes("2") && IA.includes("5") && IA.includes("8")) ||
       (IA.includes("3") && IA.includes("6") && IA.includes("9")) ||

       (IA.includes("1") && IA.includes("5") && IA.includes("9")) ||
       (IA.includes("3") && IA.includes("5") && IA.includes("7"))){
         ganador="2";
    }

   
    if(ganador!=0){
        quitarListeners();// Funciona
        if(ganador=="1"){
            alert("has ganado");
        }else{
         if(ganador=="2"){
              alert("ha ganado la maquina");
         }
        }

    }else{
        if(contador=="9"){
            alert("empate");
            quitarListeners();// Funciona
        }
    }
   



}


function quitarListeners(){

    const div = document.querySelectorAll("div");
    div.forEach(boton => {boton.removeEventListener('click', pulsar,false)});



}