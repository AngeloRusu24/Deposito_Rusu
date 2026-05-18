// Variabili
let eta = 20;
let patente = true;
let abbonamento = false;

// Condizione con AND (&&)
// Entrambe le condizioni devono essere vere
if (eta >= 18 && patente === true) {
    console.log("Puoi guidare l'auto.");
}

// Condizione con OR (||)
// Basta che una delle condizioni sia vera
if (eta < 18 || abbonamento === true) {
    console.log("Hai uno sconto speciale.");
}

// Condizione con NOT (!)
// Inverte il valore booleano
if (!abbonamento) {
    console.log("Non hai un abbonamento attivo.");
}

// Condizione più complessa
if ((eta >= 18 && patente) || abbonamento) {
    console.log("Accesso consentito.");
} else {
    console.log("Accesso negato.");
}