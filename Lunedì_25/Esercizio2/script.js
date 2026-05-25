// Recupera i dati salvati convertendoli da testo a oggetto
function prendiGiocattoliSalvati() {
    const stringaDati = localStorage.getItem("negozio_giocattoli");
    console.log("Dati grezzi letti dal LocalStorage:", stringaDati);
    if (stringaDati) {
        return JSON.parse(stringaDati); 
    } else {
        return [];
    }
}

// Gestione della pagina di inserimento dati
if (document.getElementById("formGiocattolo")) {
    console.log("Sei nella pagina di INSERIMENTO");
    const form = document.getElementById("formGiocattolo");
    
    form.addEventListener("submit", function() {
        const giocattoli = prendiGiocattoliSalvati();
        
        // Crea l'oggetto con i valori prelevati dai campi del form
        const nuovoGiocattolo = {
            nome: document.getElementById("nome").value.trim(),
            categoria: document.getElementById("categoria").value,
            prezzo: parseFloat(document.getElementById("prezzo").value), 
            eta: parseInt(document.getElementById("eta").value),        
            disponibile: document.getElementById("disponibile").value
        };
        
        giocattoli.push(nuovoGiocattolo);
        localStorage.setItem("negozio_giocattoli", JSON.stringify(giocattoli));
        
        console.log("Giocattolo salvato. Nuovo database:", giocattoli);
        alert("Giocattolo salvato con successo nel LocalStorage!");
    });
}

// Gestione della pagina di visualizzazione dell'elenco
if (document.getElementById("listaGiocattoli")) {
    console.log("Sei nella pagina dell'ELENCO");
    const contenitoreLista = document.getElementById("listaGiocattoli");
    const giocattoli = prendiGiocattoliSalvati();
    
    console.log("Giocattoli da stampare nell'elenco:", giocattoli);
    
    if (giocattoli.length === 0) {
        contenitoreLista.innerHTML = "<p>Nessun giocattolo presente nel magazzino.</p>";
    } else {
        // Genera un blocco HTML per ciascun giocattolo presente nell'array
        giocattoli.forEach(function(item) {
            const card = document.createElement("div");
            card.className = "giocattolo-card";
            card.innerHTML = `
                <h3>${item.nome}</h3>
                <p><strong>Categoria:</strong> ${item.categoria}</p>
                <p><strong>Prezzo:</strong> ${item.prezzo.toFixed(2)} €</p>
                <p><strong>Età consigliata:</strong> ${item.eta}+ anni</p>
                <p><strong>Stato:</strong> ${item.disponibile === 'si' ? 'Disponibile' : 'Esaurito'}</p>
            `;
            contenitoreLista.appendChild(card);
        });
    }
}

// Gestione della pagina dei calcoli statistici e riepilogo
if (document.getElementById("totaleGiocattoli")) {
    console.log("Sei nella pagina del RIEPILOGO");
    const giocattoli = prendiGiocattoliSalvati();
    
    document.getElementById("totaleGiocattoli").textContent = giocattoli.length;
    
    if (giocattoli.length > 0) {
        let sommaPrezzi = 0;
        const insiemeCategorie = new Set(); 
        const listaNonDisponibili = document.getElementById("listaNonDisponibili");
        
        giocattoli.forEach(function(item) {
            sommaPrezzi += item.prezzo;
            insiemeCategorie.add(item.categoria);
            // Verifica i prodotti esauriti e li aggiunge alla lista specifica
            if (item.disponibile === "no") {
                const li = document.createElement("li");
                li.textContent = `${item.nome} (${item.categoria}) - ${item.prezzo.toFixed(2)} €`;
                listaNonDisponibili.appendChild(li);
            }
        });
        
        // Esegue la media matematica dei prezzi dei prodotti
        const media = sommaPrezzi / giocattoli.length;
        document.getElementById("prezzoMedio").textContent = media.toFixed(2) + " €";
        document.getElementById("listaCategorie").textContent = Array.from(insiemeCategorie).join(", ");
        
        if (listaNonDisponibili.children.length === 0) {
            listaNonDisponibili.innerHTML = "<li>Tutti i prodotti sono attualmente disponibili.</li>";
        }
    }
}