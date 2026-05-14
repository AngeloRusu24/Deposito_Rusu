// Dichiarazione variabili
// 'let' permette di dichiarare variabili il cui valore può cambiare
let nome = "Mario";        // Tipo: string (testo)

// 'const' definisce una costante, il suo valore non può essere riassegnato
const eta = 30;           // Tipo: number (numerico)

let attivo = true;        // Tipo: boolean (vero/falso)

// Tipi speciali
// Una variabile dichiarata ma non inizializzata ha valore 'undefined'
let valoreNonDefinito;    // Tipo: undefined

// 'null' rappresenta l'assenza intenzionale di un valore
let valoreVuoto = null;   // Tipo: null

// Concatenazione di stringhe e variabili
let messaggio = nome + " ha " + eta + " anni";

// Stampa il risultato nella console del browser
console.log(messaggio);