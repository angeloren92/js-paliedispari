/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma 

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi? 
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?

-Chiediamo all'utente di inserire una parola che andremo a controllare
-Creiamo una funzione con un nome che ci permetta di capire che stiamo invertedo una parola
    -la funzione ha bisogno di paramentri 
    -la funzione deve invertire il contenuto della stringa andando ad iterare tante volte quanto la lunghezza della stringa
    -la funzione deve restituire un valore che andreamo ad utilizzare successivamente
-Creiamo una seconda funziona per verificare il risultato ottenuto con la parola iniziale per capire se sia palindroma o meno
    -la funzione può sia restituire un valore da salvare e/o loggare fuori dalla fx, oppure possiamo dare l'istruzione di visualizzare direttamente in display
-Abbiamo bisogno che ci venga restituito un valore booleano o un messaggio per capire se è palindroma la parola
-->PS essendo case sensitive dobbiamo assicurarci che l'input corrisponda all'inversione, nel caso l'utente inserisca la parola con la maiuscola

tools
-variabili
-prompt
-console.log
-funzione x2
-if else
*/

//funzione per invertire la parola
function getReversedWord (word) { // funzione che ha bisogno di un parametro
    let reversedWord = '';  // la dichiarabile è necessaria solo in questo ambito
    for (let i = word.length -1; i >= 0; i--) { //iteriamo n volte la lunghezza della parola
        let char = word[i]; //prendiamo le lettere della parola al contrario
        reversedWord += char; //contateniamo le lettere restituite
    }
    return reversedWord; //restituiamo il valore
}

//funzione per verificare se la parola sia palindroma
function logIsPaliWord (word, reversedWord) { //diamo come parametri le due parole da confrontare
    let isPaliWord = word.toLowerCase() == reversedWord.toLowerCase(); /*confronto tutto in lowercase con operatore ternario, dato che è una condizione molto semplice*/ 
    console.log(`E' la parola Palindroma? ${isPaliWord}`); //log risultato
}
//ho voluto creare due funzioni, una con return e una senza retun per studiarle. 
let inputWord = prompt('Inserisci la Parola per verificare se sia Palindroma: ');  //input
/* ho concatenato le due funzioni, in modo da evitare di salvare la parola reversata in una ulteriore variabile,
dato che getReversedWord restituisce già il valore reversato */
logIsPaliWord(inputWord, getReversedWord(inputWord));