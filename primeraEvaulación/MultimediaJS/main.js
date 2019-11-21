window.onload = init;

function init(){
    
    const videoMain = document.querySelectorAll("video");
    console.log(videoMain);
    videoMain.forEach(b => {b.addEventListener('click', cambiarVideoMain);});
    document.querySelectorAll("button").forEach(botones => {botones.addEventListener('click',iniciarFunciones);});
    
    

}
//añadir click a los videos 








function iniciarFunciones(event){
    console.log(this.id);
    
}


function cambiarVideoMain(a){



}