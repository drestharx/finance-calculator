const mount = document.querySelector('#mount');
const timeLife = document.querySelector('#time-life');
const periodSelect = document.querySelector('#periods');
const interestRate = document.querySelector('#interest-rate');
const btn = document.querySelector('.btn');
const rechargeButton = document.querySelector('.recharge-icon');
const p1 = document.querySelector('.p-result1');
const p2 = document.querySelector('.p-result2');


function convertirTime() {
    let timeToUse;
    
    switch(periodSelect.value) {
        case 'year':
            timeToUse = Number(timeLife.value);
            break;
        case 'month1':
            timeToUse = Number(timeLife.value) * 12;
            break;
        case 'month3':
            timeToUse = Number(timeLife.value) * 4;
            break;
        case 'month6':
            timeToUse = Number(timeLife.value) * 2;
            break;
        default:
        console.warn('algo salio mal');
    
    }

    return timeToUse;
}
    
function convertirInterest() {
    let interestToUse;

    switch(periodSelect.value) {
        case 'year':
            interestToUse = (Number(interestRate.value) / 100);
            break;
        case 'month1':
            interestToUse = (Number(interestRate.value) / 100) / 12;
            break;
        case 'month3':
            interestToUse = (Number(interestRate.value) / 100) / 4;
            break;
        case 'month6':
            interestToUse = (Number(interestRate.value) / 100) / 2;
            break;
        default:
            console.warn('algo salio mal');     
    }

    return interestToUse;
}

function calcCompound(event) {
    event.preventDefault();

    const flujo = [];
    let interestPerPeriod;
    const interes = convertirInterest();
    const tiempo = convertirTime();

    flujo[0] = Number(mount.value);

    for(let i = 1; i <= tiempo; i++) {
        interestPerPeriod = flujo[i - 1] * interes;
        flujo[i] = flujo[i - 1] + interestPerPeriod;
    }

    p1.innerText = `El valor futuro es de $${(flujo[flujo.length - 1]).toFixed(2)}`;

}

btn.addEventListener('click', calcCompound);