# Progetto Esame: Centro Adozioni Canine "Rifugio Amici Fedeli"

Questo progetto consiste in un sito web Multi-page responsive sviluppato per un centro di adozioni canine. L'applicazione utilizza tecnologie standard quali HTML5 per la marcatura strutturale, CSS3 per la formattazione grafica e JavaScript per la gestione della logica interattiva di navigazione lato client.

---

## 1. Struttura dei File del Progetto

La struttura delle directory adotta una netta separazione delle competenze, organizzando i file in base al loro ruolo architetturale:

* `html/index.html` - La Home Page del sito contenente la presentazione del rifugio e la sezione principale.
* `html/cani.html` - La pagina di catalogo che espone le schede informative dei cani disponibili per l'adozione.
* `html/contatti.html` - La pagina informativa contenente i recapiti fisici, telefonici, telematici e gli orari del centro.
* `css/style.css` - Il foglio di stile globale condiviso da tutti i documenti HTML per garantire l'uniformità visiva.
* `js/script.js` - Il file JavaScript deputato alla gestione degli eventi e alla manipolazione dell'oggetto window del browser.

---

## 2. Offerta Tecnica e Scelte Sviluppate

### Architettura Multi-page nativa
Il progetto implementa un sistema di navigazione Multi-page senza l'ausilio di framework esterni. La consistenza visiva tra le diverse sezioni viene assicurata dalla replica della struttura dell'elemento `<header>`, che funge da barra di navigazione comune. I collegamenti ipertestuali sono implementati mediante tag `<a>` configurati con percorsi assoluti rispetto alla cartella di lavoro corrente, garantendo il caricamento sequenziale dei documenti senza conflitti di puntamento.

### Impaginazione e Layout
La formattazione grafica estende i principi del responsive web design. I blocchi principali sono inseriti all'interno della classe `.layout-centrale`, la quale limita la larghezza massima a 800 pixel per ottimizzare la leggibilità sui monitor desktop. Il design si basa su un forte contrasto cromatico tra i toni scuri di header e footer (colore blu notte `#1e293b`) e gli elementi di interazione ed evidenziazione (colore arancione `#f97316`).

### Gestione dell'Asincronia e degli Eventi via JavaScript
La logica interattiva del sito è interamente delegata al file `script.js`. Il codice seleziona gli elementi del Document Object Model (DOM) mediante identificatori univoci (`document.getElementById`). Attrappo un controllo condizionale, lo script verifica l'esistenza dell'elemento nella pagina corrente prima di associare un ascoltatore di eventi (`addEventListener`). Al verificarsi del click, viene invocata una funzione di callback che reindirizza dinamicamente l'utente alterando la proprietà `window.location.href`.

---

## 3. Registro delle Attività (To-Do List)

- Sviluppo della marcatura strutturale HTML5 per tutte e tre le pagine del sito.
- Inserimento dei commenti esplicativi riga per riga all'interno del codice per la validazione teorica.
- Implementazione del foglio di stile CSS condiviso con configurazione di margini, padding e layout centrale.
- Gestione degli stati di interazione dinamica mediante pseudoclassi `:hover` su collegamenti e bottoni.
- Creazione dello script JavaScript per il reindirizzamento controllato dalla Home Page alla pagina catalogo.
- Verifica del corretto puntamento dei percorsi assoluti e relativi all'interno dell'albero delle cartelle.
- Validazione dei documenti tramite i motori di controllo W3C per assicurare la conformità agli standard web attuali.

---
