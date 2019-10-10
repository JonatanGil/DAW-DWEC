window.onload = function(){

    let a =  document.getElementsByClassName("boton");


    for (let i = 0; i < a.length; i++) {

        a[i].addEventListener("click", sombraBoton);
        
    }
    

    function sombraBoton(evento){

        alert(isNaN(this.innerText));

         alert(isNaN(this.innerInt));

        let numeros = [1,2,3,4,5,6,7,8,9];

        if(isNaN(this.innerText)){
         for (var num = 0; num < 10; num++) {

            alert(num);
            
          }
        }

        if(this.innerText.indexOf()){

        }

    }
};