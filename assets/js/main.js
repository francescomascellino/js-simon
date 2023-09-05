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

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const today = new Date();
console.log("oggi", today);

const todayInMs = today.getTime();
console.log("today in ms from 1970 =", todayInMs);

/* 
function calcTomorrow(date, days) {
    date.setDate(date.getDate() + days);
    return date
}

const tomorrow = calcTomorrow(today, 1)
console.log("domani", tomorrow);
 */

const endTimer = new Date(2023, 8, 6, 9, 30)
console.log("end timer", endTimer);

const endTimerInMS = endTimer.getTime();
console.log("end timer in ms from 1970 =", todayInMs);

const msFromTodayToEnd = endTimerInMS - todayInMs;

