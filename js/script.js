/* Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

var seconds = 5;
var minNum = 1;
var maxNum = 50;
var numList = [];
var userList = [];

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

}, seconds * 1000);



// - Funzioni -
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }