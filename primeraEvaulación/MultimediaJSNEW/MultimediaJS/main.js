window.onload = init;

var anuncioISON = true;

function init(){
    
    const videos = document.querySelectorAll("video");
    console.log(videos);
    videos.forEach(video => {video.addEventListener('click', cambiarVideoMain);});
    //denegar click derecho en los videos
    videos.forEach(video => {video.oncontextmenu = function(){return false};});
    document.querySelectorAll("button").forEach(botones => {botones.addEventListener('click',iniciarFunciones);});
    anuncioSpam();
    

}
//añadir click i los videos 



async function anuncioSpam(){

    const videos = document.querySelectorAll("video");
    console.log(videos);
    videos.forEach(video => {
        video.oncontextmenu = function(){return false}
        video.click = function(){return false};
        ;});

    videos.forEach(video => {video.onc = function(){return false};});

    var videoActual = document.querySelector("content");
    var anuncio = document.createElement("div");
    var cerrarAnuncio = document.createElement("button");

    anuncio.classList.add("anuncio");
    cerrarAnuncio.classList.add("equis");
    anuncio.innerHTML=anuncio.innerText+"El anuncio de espam se va  ir en:";


   cerrarAnuncio.addEventListener("click", function(){
        var a = document.querySelector("content");  
        a.removeChild(anuncio);
        anuncioISON=false;
        console.log(anuncioISON);
    }, false); 

    videoActual.appendChild(anuncio);

    console.log(cerrarAnuncio);

    for (let i = 9; i >= 0; i--) {

    await new Promise(resolve => {
        console.log(i);
        anuncio.innerHTML="<br><br><br>"+anuncio.innerText.substring(0, anuncio.innerText.length-1)+"<br>"+i; 
        
        setTimeout(() => {
            if(i==0) {cerrarAnuncio.style.opacity=1;}
            resolve();}, i*50
            );
        
        });
    }

    anuncio.appendChild(cerrarAnuncio);



}

/* setInterval(() => {anuncio.innerHTML=anuncio.innerText.substring(0, anuncio.innerText.length-1)+"<br>"+i;}, 1*i); 
        setInterval(() => {if(i==0) {anuncio.style.opacity=0;}}, 20); */


var imagenMuted=true;

function iniciarFunciones(event){


    if(anuncioISON){
        return false;
    }

    var video = document.getElementById("videoActual");

    console.log(video);

    switch (this.id) {
        case "muted":{
            mutedado(video);
        }break;

        case "haciaAtras":{
            haciaAtras(video);
        }break;

        case "PausePlay":{
            pausePlay(video);
        }break;

        case "haciaAlante":{
            haciaDelante(video);
        }break;

        case "reset":{
            reset(video);
        }break;

        case "volumenMenos":{
            volumenMenos(video);
        }break;

        case "volumenMas":{
            volumenMas(video);
        }break;
    }

    
}

function mutedado(videomain){
    var isVolumeMuted = videomain.muted;
    var botonMuted = document.getElementById("muted");
    console.log(botonMuted);
    if(isVolumeMuted==true){
        botonMuted.firstElementChild.src="imagenes/nomuted.png";
        videomain.muted=false;
    }else{
        botonMuted.firstElementChild.src="imagenes/muted.png";
        videomain.muted=true; 
    }
    
}

function haciaAtras(videomain){
    var punteroVideo = videomain.currentTime;
    videomain.currentTime=punteroVideo-10;
}

function pausePlay(videomain){
    var isPaused = videomain.paused;
    if(isPaused){videomain.play();}else{videomain.pause();}
}

function haciaDelante(videomain){
    var punteroVideo = videomain.currentTime;
    videomain.currentTime=punteroVideo+10;
}

function volumenMenos(videomain){
    console.log(videomain);
    try {
        videomain.volume+=-0.1;
    } catch (error) {
        console.log("volumen minimo en el reproductor");
    }
}


function volumenMas(videomain){
    try {
    videomain.volume+=0.1;
    } catch (error) {
        console.log("volumen maximo en el reproductor");
    }
}

function reset(videomain){
    videomain.currentTime= 0;
}

function cambiarVideoMain(i){

    if(anuncioISON){
        return false;
    }

    if(this.id!=="videoActual"){

        var videoNuevo = this.getAttribute("src");
        var videoViejo = document.getElementById("videoActual").getAttribute("src");

        var postNuevo = this.getAttribute("poster");
        postViejo = document.getElementById("videoActual").getAttribute("poster");

        /*console.log(videoViejo);
        console.log(this.getAttribute("src"));*/

        document.getElementById("videoActual").setAttribute("src",videoNuevo);
        this.setAttribute("src",videoViejo);

        document.getElementById("videoActual").setAttribute("poster", postNuevo);
        this.setAttribute("poster",postViejo);

    }else{
        return false;
    }
    


    anuncioISON=true;
    anuncioSpam();
}