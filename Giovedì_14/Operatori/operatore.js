// Dichiarazione variabili iniziali
let a = 10;
let b = 5;

// Operatori aritmetici
let somma = a + b;           // Risultato: 15
let differenza = a - b;      // Risultato: 5
let prodotto = a * b;        // Risultato: 50
let divisione = a / b;       // Risultato: 2

// Operatori di confronto
let uguale = (a == "10");           // true (usa la coercizione)
let strettamenteUguale = (a === "10"); // false (controlla anche il tipo)
let maggiore = (a > b);            // true

// Operatori logici
let condizione = (a > 5 && b < 10); // true (AND: entrambe vere)
let alternativa = (a < 5 || b < 10); // true (OR: almeno una vera)
let negazione = !(a > b);           // false (NOT: inverte il valore)

// Operatori di assegnazione
let x = 10;
x += 5;     // Scorciatoia per x = x + 5 (Risultato: 15)

// Output finale
console.log(somma, uguale, strettamenteUguale, condizione);