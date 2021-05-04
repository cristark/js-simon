/* Un alert espone 5 numeri casuali. Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente. 
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

$(document).ready(() => {

    let seconds = 2;
    const minNum = 1;
    const maxNum = 50;
    const numList = [];
    const userList = [];
    const wrongList = [];
    const positionArr = [];

    // Genero numero random da 0 a 5 per conoscere posizione della carta giocatore che compare dopo aver avviato il gioco
    while (positionArr.length < 5) {

        let rndmNum = generaRandom(0, 4);
        
        if (positionArr.includes(rndmNum) == false) {
            positionArr.push(rndmNum);
        }

    };

    // Utilizzo destructuring per assegnare i valori dell'array appena creato alle varie posizioni
    const [rndmPos1, rndmPos2, rndmPos3, rndmPos4, rndmPos5] = positionArr;
    console.log(positionArr);
    
    // Genero dei numeri random assegnandoli ad un array
    var i = 0;
    do {
        var rndmNumber = generaRandom(minNum, maxNum);
        /* console.log(rndmNumber); */
        if (numList.includes(rndmNumber) == false) {
            numList.push(rndmNumber);
        }
        i++;
        
    } while (numList.length < 5);
    
    console.log('Lista numeri da indovinare', numList);
    console.log(`Prima posizione carta giocatore: ${rndmPos1}`);

    // Stampo numeri su HTML prendendoli dall'array appena creato
    for (var i = 0; i < numList.length; i++) {

        $('.card_numbers .number .front_card p').eq(i).text(numList[i]);
    }

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
                $('.start').addClass('hide');
                $('.user_numbers').removeClass('hide');
                $('.user_numbers .user_cards .number').eq(rndmPos1).removeClass('ghost');
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
    
    
    
    //| Click su pulsante PRIMA CARTA GIOCATORE
    $('.number .btn').eq(rndmPos1).click(function(){

        console.log(`Posizione carta giocatore: ${rndmPos1}`);
        
        var userValue = $('.user_numbers .user_cards .number').eq(rndmPos1).children().val();
        
        if (numList.includes(parseInt(userValue))) {
            userList.push(parseInt(userValue));
        } else {
            wrongList.push(parseInt(userValue));
        }

        $('.user_numbers .user_cards .number').eq(rndmPos1).addClass('ghost');
        $('.user_numbers .user_cards .number').eq(rndmPos2).removeClass('ghost');

    });

    
    //| Click su pulsante PROSEGUI
    $('.number .btn').eq(rndmPos2).click(function(){
        
        var userValue = $('.user_numbers .user_cards .number').eq(rndmPos2).children().val();
        
        if (numList.includes(parseInt(userValue))) {
            userList.push(parseInt(userValue));
        } else {
            wrongList.push(parseInt(userValue));
        }

        $('.user_numbers .user_cards .number').eq(rndmPos2).addClass('ghost');
        $('.user_numbers .user_cards .number').eq(rndmPos3).removeClass('ghost');

    });
    

    //| Click su pulsante PROSEGUI
    $('.number .btn').eq(rndmPos3).click(function(){
        
        var userValue = $('.user_numbers .user_cards .number').eq(rndmPos3).children().val();
        
        if (numList.includes(parseInt(userValue))) {
            userList.push(parseInt(userValue));
        } else {
            wrongList.push(parseInt(userValue));
        }

        $('.user_numbers .user_cards .number').eq(rndmPos3).addClass('ghost');
        $('.user_numbers .user_cards .number').eq(rndmPos4).removeClass('ghost');

    });


    //| Click su pulsante PROSEGUI
    $('.number .btn').eq(rndmPos4).click(function(){
        
        var userValue = $('.user_numbers .user_cards .number').eq(rndmPos4).children().val();
        
        if (numList.includes(parseInt(userValue))) {
            userList.push(parseInt(userValue));
        } else {
            wrongList.push(parseInt(userValue));
        }

        $('.user_numbers .user_cards .number').eq(rndmPos4).addClass('ghost');
        $('.user_numbers .user_cards .number').eq(rndmPos5).removeClass('ghost');

    });


    //| Click su pulsante PROSEGUI
    $('.number .btn').eq(rndmPos5).click(function(){
        
        var userValue = $('.user_numbers .user_cards .number').eq(rndmPos5).children().val();
        
        if (numList.includes(parseInt(userValue))) {
            userList.push(parseInt(userValue));
        } else {
            wrongList.push(parseInt(userValue));
        }

        $('.user_numbers .user_cards .number').eq(rndmPos5).addClass('ghost');

        if (userList.length == 0) {
            alert('Mi dispiace, non hai indovinato alcun numero. Riprova!');
        } else if (userList.length == 5) {
            alert('Complimenti! Hai indovinato tutti i numeri! Hai una memoria di ferro!');
        } else {
            alert(`Hai indovinato ${userList.length} numeri: ${userList}`);
        }

        console.log(`Lista numeri corretti: ${userList}`);
        console.log(`Lista numeri sbagliati: ${wrongList}`);

    });
    


});

// - Funzioni -
function generaRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}