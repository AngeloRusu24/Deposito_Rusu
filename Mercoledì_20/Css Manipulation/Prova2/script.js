// Seleziono elementi HTML
let box = document.getElementById("box");
let btnBordo = document.getElementById("btnBordo");
let btnRotazione = document.getElementById("btnRotazione");
let btnNascondi = document.getElementById("btnNascondi");

// 1. Bottone Bordo
btnBordo.addEventListener("click", function () {
    
    // Cambio spessore e colore bordo
    box.style.border = "5px dashed red";
    
});

// 2. Bottone Rotazione
btnRotazione.addEventListener("click", function () {
    
    // Ruoto il box
    box.style.transform = "rotate(20deg)";
    
});

// 3. Bottone Nascondi
btnNascondi.addEventListener("click", function () {
    
    // Nascondo il box
    box.style.visibility = "hidden";
    
});