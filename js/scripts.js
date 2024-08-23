let numberInside = document.getElementById('number')
// let element ='';
let numberRandomList = [];
while (numberRandomList.length < 5)  {
    // let element = document.createElement('div');
    let numberRandom = getRndInteger(1, 5);
    if (!numberRandomList.includes(numberRandom)) {
        numberRandomList.push(numberRandom);
        numberInside.innerHTML +=  ` <div> ${numberRandom} </div> ` ;   

        // let element = document.createElement('div');
        // element.innerHTML = ;
        // numberInside.append(element)
    }
    console.log('numberRandom', numberRandom , typeof numberRandom);
    // numberInside.append(element)
}
// let element = document.createElement('div');
// // element.innerHTML = numberRandomList;
// numberInside.append(element)


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

let timer = 30

let clock = setInterval(function () {
    let currentTime = parseInt(document.getElementById('timerFinish').innerText);
    currentTime --;
    console.log("currentTime", currentTime, typeof currentTime);
    document.getElementById('timerFinish').innerHTML = currentTime
    if (currentTime == 0) {
        clearInterval(clock)
        
    }
    
}, 1000);

setTimeout(function () {
    document.getElementById('esteticClock').innerHTML =  '';
    
}, 31000);


setTimeout(function () {
    numberInside.innerHTML = '';
    
}, 31000);
console.log('numberRandomList', numberRandomList, typeof numberRandomList)





let numberUtenteList = [];
let numeriIndovinati = 0;
let numeriIndovinatiValue = []
let result = document.getElementById('risultato');
setTimeout(function(){
    for (let i = 0; i < 5; i++) {
        let numberUtente = parseInt(prompt('Quale numeri hai visto?'));
        numberUtenteList.push(numberUtente)
        if (numberUtenteList[i] == numberRandomList[i]) {
            numeriIndovinati++;
            numeriIndovinatiValue.push(numberUtenteList[i]);


            console.log('numero giusto')
        }
        else {
            console.log('Numero sbagliato')
        }

        console.log('numberUtente', numberUtente, typeof numberUtente);
    }
    numberInside.innerHTML =  'quanti numeri indovinati: ' + ' ' + numeriIndovinati + ' ' + 'quali numeri indovinati: ' + ' ' + (numeriIndovinatiValue.join(' '));
    console.log('numberUtenteList', numberUtenteList, typeof numberUtenteList);
    console.log('numeriIndovinati', numeriIndovinati, typeof numeriIndovinati);
    console.log('numeriIndovinatiValue', numeriIndovinatiValue, typeof numeriIndovinati);
    
    
},32000);

// function stampa(x) {
    
//     result.innerHTML =  x;
    
// }








