//import il modulo nativo di Node.js per la gestione dei file
const fs = require("fs");

//creazione funziona mostraMessaggio
function mostraMessaggio() {
   fs.readFile("/Martedì_26/Esercizio2/file.txt", "utf8", (errore, contenuto) => {

        if (errore) {
            console.log("Errore nella lettura del file" );
            return;
        }

        console.log("Contenuto del file letto con successo: ");
        console.log(contenuto);
    });


    const codiceHtmlCompleto = `
    <!DOCTYPE html>
    <html lang="it">
    <head>
        <meta charset="UTF-8">
        <title>Pagina Server</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f7f6; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
            .box { background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); text-align: center; }
            .messaggio { margin-top: 20px; padding: 15px; background-color: #e2f0d9; color: #385723; border-left: 5px solid #70ad47; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class="box">
            <h1>Connessione Riuscita!</h1>
            <p>Testo recuperato dal file .txt:</p>
            <div class="messaggio">${testoDelFile}</div>
        </div>
    </body>
    </html>
    `;


}

//esportazione della funzione mostraMessaggio
module.exports = {
    mostraMessaggio
};