window.onload = init();

function init(){
    
    const videoMain = document.querySelectorAll("video");
    
    videoMain.forEach(b => {b.addEventListener('click', cambiarVideoMain);});

    console.log(videoMain);
}





function cambiarVideoMain(a){

    var videoActual = document.querySelector("videoActual");
    console.log(videoActual);


}