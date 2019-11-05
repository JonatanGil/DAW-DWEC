document.getElementById("jsstyle").addEventListener("click",function cambiarTexto(){
    tamaño=tamaño+0.2;   
    document.getElementById("text").style.fontSize=tamaño+"em";
    document.getElementById("text").style.color="Red";
    document.getElementById("text").style.fontFamily="monospace";
    console.log(tamaño);
 //   texto.classList.add("CambiarColorTamaño");
})





var tamaño= 1;