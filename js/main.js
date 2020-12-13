'use strict'

let slider=document.querySelector('.slider_content');
let sliderInd=document.querySelectorAll('.slider_test');


let contador=1,
    sizeWidth=sliderInd[0].clientWidth,
    intervalo=2000;
window.addEventListener("resize",()=>{
    sizeWidth=sliderInd[0].clientWidth;
});

setInterval(function tiempo(){
    slides();
},intervalo);


function slides(){
    slider.style.transform='translate('+(-sizeWidth*contador)+'px)';
    slider.style.transition='transform 1s';

    contador++;

    if(contador===sliderInd.length){ 
        contador=0;
        setTimeout(() => {
            slider.style.transform='translate(0px)';
            slider.style.transition='transform 0s';
        }, intervalo);
    }

}
