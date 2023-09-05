/* Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!

Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi? */

const daysEl = document.getElementById("giorni");
const hoursEl = document.getElementById("ore");
const minEl = document.getElementById("minuti");
const secEl = document.getElementById("secondi");

const secondInMS = 1000;
const minuteInMs = secondInMS * 60;
const hourInMs = minuteInMs * 60;
const dayInMs = hourInMs * 24;

/* 
function calcTomorrow(date, days) {
    date.setDate(date.getDate() + days);
    return date
}

const tomorrow = calcTomorrow(today, 1)
console.log("domani", tomorrow);
 */

//FISSA PUO' RESTARE FUORI
const endTimer = new Date(2023, 8, 6, 9, 30)
// console.log("end timer", endTimer);

const timer = setInterval(countdown, 1000);

function countdown() {

    //DEVE PRENDERE A OGNI LOOP IL VALORE CORRENTE
    const today = new Date();
    // console.log("oggi", today);

    const todayInMs = today.getTime();
    // console.log("today in ms from 1970 =", todayInMs);

    const endTimerInMS = endTimer.getTime();
    // console.log("end timer in ms from 1970 =", todayInMs);

    //DIFFRENZA TRA OGGI E IL TEMPO LIMITE IN MS
    const msFromTodayToEnd = endTimerInMS - todayInMs;

    //FINCHE' E' > 0 RESTA TEMPO
    if (msFromTodayToEnd > 0) {

        //I GIORNI RESTANTI SONO UGUALI AI MS RIMANENTI DIVISO I GG IN MS
        const remDays = Math.floor(msFromTodayToEnd / dayInMs);
        // console.log("giorni restanti =", remDays);

        //IL RESTO DELLA DIVISIONE PRECEDENTE VIENE USATO PER CALCOLARE LE ORE
        const remHrs = Math.floor((msFromTodayToEnd % dayInMs) / hourInMs);
        // console.log("ore restanti =", remHrs);

        //IL RESTO DELLA DIVISIONE PER ORE VIENE USATO PER CALCOLARE I MINUTI
        const remMins = Math.floor((msFromTodayToEnd % hourInMs) / minuteInMs);
        // console.log("minuti restanti =", remMins);

        //IL RESTO DELLA DIVISIONE PER MINUTI VIENE USATO PER CALCOLARE I SEC
        const remSecs = Math.floor((msFromTodayToEnd % minuteInMs) / secondInMS);
        // console.log("secondi restanti =", remSecs);

        daysEl.innerHTML = `${remDays}`;
        hoursEl.innerHTML = `${remHrs}`;
        minEl.innerHTML = `${remMins}`;
        secEl.innerHTML = `${remSecs}`;

    } else {
        clearInterval(countdown);
    }

};


