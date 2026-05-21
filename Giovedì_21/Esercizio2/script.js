let form = document.getElementById("formLibro");
let contenitore = document.getElementById("contenitoreLibri");
let btnHamburger = document.getElementById("btnHamburger");
let menuNavigazione = document.getElementById("menuNavigazione");

btnHamburger.addEventListener("click", function() {
    menuNavigazione.classList.toggle("mostraMenu");
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let titolo = document.getElementById("titoloLibro").value;
    let autore = document.getElementById("autoreLibro").value;
    let genere = document.getElementById("genereLibro").value;
    let anno = document.getElementById("annoLibro").value;
    let descrizione = document.getElementById("descrizioneLibro").value;

    let card = document.createElement("div");
    card.className = "card-libro";

    nuovaCard = "<h3>" + titolo + "</h3>" +
                "<p><strong>Autore:</strong> " + autore + "</p>" +
                "<p><strong>Genere:</strong> " + genere + "</p>" +
                "<p><strong>Anno:</strong> " + anno + "</p>" +
                "<p><strong>Descrizione:</strong> " + descrizione + "</p>";

    contenitore.appendChild(nuovaCard);

    form.reset();
});
