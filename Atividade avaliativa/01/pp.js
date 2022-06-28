const control = document.querySelectorAll(".control");

let itematual = 0;
const item = 0;

const images = document.querySelectorAll(".imagatual");

const itemax = images.length;

let i = 1;
let y = 1;

let k;

function mudarfoto() {

    
    let c = document.getElementById("foto" + i);
    
    
    if (c.classList.contains("hyy")){

        c.classList.remove("hyy");

    }else{

        
        c.classList.add("hyy");

    }

    

    i++
    console.log(i)
    
    if(i === 5){

        i = 1;

    }
}




function mudardireita() {
    
   
    let b = document.getElementById("foto"+ i);


    if (b.classList.contains("hyy")){

        b.classList.remove("hyy");

    }else{

        
        b.classList.add("hyy");

    }

    
    i++;
    console.log(b.classList)
    
    if(i === 5){

        i = 1;
        
    }

}
