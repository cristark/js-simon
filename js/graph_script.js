/* Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

$(document).ready(function(){

    var seconds = 5;
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
            $('.card_numbers .number .front_card p').eq(i).text(rndmNumber);
        }
        i++;

    } while (numList.length < 5);

    console.log(numList);

    //Click su pulsante start per avviare gioco
    $('.start p').click(function(){
        
        // Attivazione animazione per girare carte con numeri da indovinare
        for (var i = 0; i < 5; i++) {

        $('.card_numbers .number').eq(i).addClass('flip_on');

        }

        // Avvio CountDown per poi nascondere nuovamente le carte da indovinare
        var countDown = setInterval(function() {

            if (seconds == 0) {
                clearInterval(countDown);
                $('.start').fadeOut();
                // !Aggiungere istruzione per mostrare sezione inserimento numeri
                for (var i = 0; i < 5; i++) {
    
                    $('.card_numbers .number').eq(i).addClass('flip_off');
                    $('.card_numbers .number').eq(i).removeClass('flip_on');
            
                }
            } else {
                $('.start p').text(seconds);
            }
            seconds--;

        }, 1000);
    });

});

// - Funzioni -
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }