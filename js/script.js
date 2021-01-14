/* Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

var seconds = 1;
var minNum = 1;
var maxNum = 50;
var numList = [];
var userList = [];
var resultList = [];
var count = 0;

// 1 - genero dei numeri random assegnandoli ad un array
var i = 0;
do {
    var rndmNumber = generaRandom(minNum, maxNum);

    if (numList.includes(rndmNumber) == false) {
        numList.push(rndmNumber);
    }
    i++;

} while (numList.length < 5);

console.log(numList);
alert(numList);

// Imposto timeout prima di far partire il gioco
setTimeout(() => {

    // Prompt di inserimento numero utente con controllo se il numero è corretto e se il numero si ripete o meno
    var j = 0;
    do {

        var userNum = Math.abs(parseInt(prompt('Inserisci un numero')));

        if (userNum >= minNum && userNum <= maxNum && userList.includes(userNum) == false) {
            userList.push(userNum);
        } else if (isNaN(userNum)) {
            alert('Attenzione! Non hai inserito nessun numero! Riprova');
        } else {
            alert('Numero errato!');
        }

        j++;

    } while (userList.length < 5);

    console.log(userList);

    // Verifica se e quanti numeri inseriti dall'utente sono presenti tra i numeri da indovinare
    for (var i = 0; i < 5; i++) {

        var k = numList[i];

        for (var b = 0; b < 5; b++) {

            var check = userList.includes(k, b);

        }

        var b = 0;
        do {
            var check = userList.includes(k, b);

            if (check && resultList.includes(k) == false) {
                resultList.push(k);
                count++;
            }
            b++;
        } while (b < 5);
        

    }

    console.log(resultList);
    console.log(count);

    // Stampo esito partita con numero di inserimenti corretti e lista numeri
    console.log(`Hai indovinato ${count} numeri: ${resultList}`);
    alert(`Hai indovinato ${count} numeri: ${resultList}`);

}, seconds * 1000);



// - Funzioni -
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }