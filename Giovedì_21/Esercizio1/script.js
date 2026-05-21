// 1. SELEZIONE ELEMENTI (Uso dei 3 metodi obbligatori)
let titolo = document.getElementById("titoloZoo");
let contenitore = document.getElementById("listaAnimali");
let info = document.querySelector("#infoZoo");

// 2. FUNZIONE UNICA PER AGGIUNGERE ANIMALI (Parte 2, 3 e 4)
function aggiungiAnimale(nome, descrizione, classeCss) {
    titolo.innerText = "Zoo dei Grandi " + (nome === "Leone" ? "Felini" : "Mammiferi");
    info.innerText = "Aggiunto un " + nome + " allo zoo.";

    let card = document.createElement("div");
    card.className = "card-animale " + classeCss;
    card.innerHTML = "<h3>Nome: " + nome + "</h3><p>Descrizione: " + descrizione + "</p>";
    
    contenitore.appendChild(card);
}

// 3. ASSOCIAZIONE EVENTI AI PULSANTI
document.getElementById("btnLeone").addEventListener("click", function() {
    aggiungiAnimale("Leone", "classe-leone");
});

document.getElementById("btnElefante").addEventListener("click", function() {
    aggiungiAnimale("Elefante", "classe-elefante");
});

document.querySelector("#btnRimuovi").addEventListener("click", function() {
    if (contenitore.lastElementChild) {
        contenitore.removeChild(contenitore.lastElementChild);
        info.innerText = "Animale rimosso dallo zoo.";
    } else {
        alert("Lo zoo è vuoto!");
    }
});

document.getElementById("btnTema").addEventListener("click", function() {
    document.querySelectorAll("body")[0].classList.toggle("tema-scuro");
});