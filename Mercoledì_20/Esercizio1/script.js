// Selezionare gli elementi del DOM tramite getElementById()
let inputTesto = document.getElementById("inputTesto");
let inserisciBottone = document.getElementById("inserisciBottone");
let lista = document.getElementById("lista");
let eliminaLista = document.getElementById("eliminaLista");
let cambiaColore = document.getElementById("cambiaColore");
let contatoreLista = document.getElementById("contatoreLista");
let svuotaLista = document.getElementById("svuotaLista");

// Registriamo l'event listener sul bottone per intercettare il click
inserisciBottone.addEventListener("click", function() {

    //Leggere il valore scritto nell'input
    let valoreInput = inputTesto.value;

    if (valoreInput === "")
    {
        alert("Inserisci un testo valido");
    }
    else
    {
        //Creare dinamicamente un nuovo elemento della lista (li)
        let nuovoElemento = document.createElement("li");

        // Inserisco testo
        nuovoElemento.innerHTML = valoreInput;

        // Aggiungo alla lista
        lista.appendChild(nuovoElemento);

        // Pulisco il campo di input
        inputTesto.value = "";

        // Aggiorno il contatore degli elementi nella lista
        contatoreLista.innerHTML = "Numero di elementi nella lista: " + lista.children.length;

    }

    //bottone per eliminare la lista
    eliminaLista.addEventListener("click", function() {
        
        lista.innerHTML = "";
        lista.children.length = "";
        contatoreLista.innerHTML = "Numero di elementi nella lista: 0";
    });

    //cambiare colore della lista
    cambiaColore.addEventListener("click", function() {

        lista.style.color = "purple";
    });

    svuotaLista.addEventListener("click", function() {

        lista.children.length = "";
        contatoreLista.innerHTML = "Numero di elementi nella lista: 0";
    });



});