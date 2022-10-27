const price = document.querySelector('#price');
const cost = document.querySelector('#cost');
const btn = document.querySelector('.btn');
const resultado = document.querySelector('.resultado');
const pResultado = document.querySelector('.p-resultado');

//funcion calculos de procentaje
function calcEarnPercent(event) {
    event.preventDefault();

    if(!price.value && !cost.value) {
        pResultado.innerText = 'Ingresa el precio y el costo';
    } else if(!price.value) {
        pResultado.innerText = 'Ingresa el precio';
    } else if(!cost.value){
        pResultado.innerHTML = 'Ingresa el costo';
    } else if(price.value && cost.value) {
        
        const earning = price.value - cost.value;
        const earnPercent = (earning / price.value) * 100;
    
        if(earnPercent < 0) {
            pResultado.innerText = 'Tienes una perdida de: ' + Math.abs(earnPercent.toFixed(2)) + '%'; 
        } else if(earnPercent == 0) {
            pResultado.innerText = 'No existe ganancia, ni perdida.'; 
        } else {
            pResultado.innerText = 'El porcentaje de ganancia es: ' + earnPercent.toFixed(2) + '%'; 
        }

    }


}


btn.addEventListener('click' ,calcEarnPercent);