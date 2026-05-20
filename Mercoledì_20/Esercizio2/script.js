let inserisciBottone = document.getElementById("inserisciBottone");
let inputTesto = document.getElementById("inputTesto");
let inputTitolo = document.getElementById("modificaTitolo");
let lista = document.getElementById("lista");
let modificaTitolo = document.getElementById("modificaTitolo");
let bottoneModificaTitolo = document.getElementById("bottoneModificaTitolo");
let titoloPrincipale = document.getElementById("titoloPrincipale");
let eliminareUltimo = document.getElementById("eliminareUltimo");
let nascondiLista = document.getElementById("nascondiLista");
let mostraLista = document.getElementById("mostraLista");
let contatoreLista = document.getElementById("contatoreLista");

inserisciBottone.addEventListener("click", function() {

    let valoreInput = inputTesto.value;

    if (valoreInput === "")
    {
        alert("Inserisci un testo valido");
    }
    else
    {
        let nuovoElemento = document.createElement("li");
        nuovoElemento.innerHTML = valoreInput;
        lista.appendChild(nuovoElemento);
        inputTesto.value = "";
        // contatoreLista.innerHTML = "Numero di elementi nella lista: " + lista.children.length;
        aggiornaContatore();
    }

    

});


bottoneModificaTitolo.addEventListener("click", function() {

    let valoreInputTitolo = inputTitolo.value;

    if (valoreInputTitolo === "")
    {
        alert("Inserisci un testo valido");
    }
    else
    {
        titoloPrincipale.innerHTML = valoreInputTitolo;
        inputTitolo.value = "";
    }

});

eliminareUltimo.addEventListener("click", function() {

    let ultimoElemento = lista.lastChild;

    if (ultimoElemento)
    {
        lista.removeChild(ultimoElemento);
        aggiornaContatore();
    }

});

nascondiLista.addEventListener("click", function() {
    lista.classList.toggle("hide");
});

function aggiornaContatore() {
    let numeroElementi = lista.children.length;
    contatoreLista.innerHTML = "Numero di elementi nella lista: " + numeroElementi;
}