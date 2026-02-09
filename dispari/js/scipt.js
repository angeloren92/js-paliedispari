/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?

-Chiediamo al giocatore se punta su pari o dispari
-Chiediamo un numero al giocatore tra 1 e 5
-Generiamo un numero random (con funzione) che restituisce il valore random
    -assegniamo il return ada variabile
-Sommiamo i numeri con una funzione
-troviamo il vincitore

tools
-variabili
-funzioni
-math con metodi floor e random
-operatori matematici
-if/else
-operatori logici
-console.log
-prompt
*/

const oddOrEven = 'pari';
const num = 3;

function getNumRandom () {
    numRandom = (Math.floor(Math.random()*5) +1);
    return numRandom;
}

const computerNum = getNumRandom();

function sum (num1, num2) {
    sum = num1 + num2;
    return sum;
}

sum = sum(num, getNumRandom())



console.log(sum)