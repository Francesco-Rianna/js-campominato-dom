

// prendo elemento del dom che genera la griglia
const buttonPlay = document.querySelector('.btn');
// prendo elemento del dom in cui devo inserire i quadrati
const gridContainer = document.querySelector('.ms-grid');
// inizio un ciclo for per prendermi 100 quadrati
// creo un array vuoto per i numeri casuali del computer
let cpuArrayNumber = []
console.log(cpuArrayNumber)

buttonPlay.addEventListener('click', function () {
    // Rimuovi eventuali quadrati già presenti nel contenitore
    gridContainer.innerHTML = '';

    // Genera 100 quadrati e li aggiunge al contenitore
    for (let i = 1; i <= 100; i++) {
        const newSquare = generateSquare(i);
        gridContainer.append(newSquare);
    }

    // Genera 16 numeri casuali unici per cpuArrayNumber
    while (cpuArrayNumber.length <= 16) {
        const randomNumber = getRndInteger(1, 100);
        if (!cpuArrayNumber.includes(randomNumber)) {
            cpuArrayNumber.push(randomNumber);
        }
    }
    // se il numero che clicca l'utente è presente nell'array casuale termina il gioco e la casella si colora di rosso 
    // altrimenti continua il gioco la cella si colora di rosso 
    // il gioco termina quando nella griglia restano solo bombe 

});





function generateSquare(number) {
    // creo l'elemento del dom
    const newSquare = document.createElement('div');
    // gli do una classe 
    newSquare.classList.add('ms-square');
    // inserisco il numero all'interno del div
    newSquare.innerHTML = `<span>${number} </span>`;

    newSquare.addEventListener('click', function () {

        newSquare.classList.toggle('ms-bg-square');
        console.log(number);


    })


    return newSquare
}




// funzione che genera numeri casuali trovata su w3school
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;;
}

