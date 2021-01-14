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

// - 1 - genero dei numeri random assegnandoli ad un array
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

setTimeout(() => {
    var j = 0;
    do {

        var userNum = parseInt(prompt('Inserisci un numero'));

        if (userList.includes(userNum) == false) {
            userList.push(userNum);
        }
        j++;
    } while (userList.length < 5);

    console.log(userList);

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

}, seconds * 1000);



// - Funzioni -
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }