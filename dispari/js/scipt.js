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

//funzione per restituire un numero casuale da 1 a 5
function getNumRandom () {
    const numRandom = (Math.floor(Math.random()*5) +1);
    return numRandom;
}
//funzione per restituire la somma di due numeri
function getSum (num1, num2) {
    const sum = num1 + num2;
    return sum;
}
//funzione per scoprire se abbiamo vinto
function getDoYouWin (sum, oddOrEven) {
    const doYouWin = (sum % 2 === 0 && oddOrEven.toLowerCase() === 'pari') ? 'Hai vinto' : 'Hai perso';
    return doYouWin;
}
//funzione per controllare che sia giusto l'intervallo inserito
function getCorrectRange (num) {
    const correctRange = (num > 0 && num <= 5) ;
    return correctRange;
}
//funzione per controllare oddOrEven che siamo corretti
function getCorrectOddOrEven (oddOrEven) {
    const correctOddOrEven = (oddOrEven.toLowerCase() == 'pari' || oddOrEven.toLowerCase() == 'dispari') ;
    return correctOddOrEven;
}

// inputs utente
const oddOrEven = prompt('Scegli Pari o dispari: ');
const num = parseInt(prompt('Inserisci un numero da 1 a 5: '));
// inputs checks
const correctOddOrEven = getCorrectOddOrEven(oddOrEven);
const correctRange = getCorrectRange(num);

//input corretti
if (correctRange === true && correctOddOrEven === true) {
    // calcoli
    const computerNum = getNumRandom();
    sum = getSum(num, computerNum);
    const winner = getDoYouWin(sum, oddOrEven);
    //visualizzazione risultato
    console.log(
        `${winner}, la somma è: ${sum}
        Hai scommesso su: ${oddOrEven}
        Hai scelto il numero: ${num}
        Il computer ha il numero: ${computerNum}
        `
    );
} else { //input sbagliati
    alert('Per Favore inserisci dei Valori Validi');
} 