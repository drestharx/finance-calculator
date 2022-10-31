const mount = document.querySelector('#mount');
const time = document.querySelector('#time');
const select = document.querySelector('#select-input');
const interest = document.querySelector('#interest');
const btn = document.querySelector('.btn');
const refresh = document.querySelector('.refresh-btn');
const firstP = document.querySelector('.first-p');
const secondP = document.querySelector('.second-p');

//funcion - convierte el dato ingresado a dias
function convTimeInterest() {
    let timeToUse;

    switch (select.value) {
        case 'day':
            timeToUse = time.value;
            break;
        case 'week':
            timeToUse = time.value * 7;
            break;
        case 'month':
            timeToUse = time.value * 30;
            break;
        case 'year':
            timeToUse = time.value * 360;
            break;
        default:
            alert('Nose encuentra en las opciones');
    }

    return timeToUse;
}

function calcSimpleInterest(event) {

    event.preventDefault();
    
    const mountNumber = Number(mount.value);
    const period = Number(convTimeInterest());
    const interestNumber = Number(interest.value);
    const interestGain = mountNumber * period * ((interestNumber / 100) / 360);
    const finalMount = mountNumber + interestGain;

    firstP.innerText = `El interes ganado es de $${interestGain.toFixed(2)}`;
    secondP.innerText = `Valor final: $${finalMount.toFixed(2)}`;
 
}

btn.addEventListener('click', calcSimpleInterest);