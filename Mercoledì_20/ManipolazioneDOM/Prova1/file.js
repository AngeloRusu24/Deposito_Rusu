// =====================================
        // SELEZIONE ELEMENTI
        // =====================================

        let titolo = document.getElementById("titolo");

        let paragrafo = document.getElementById("paragrafo");

        let inputNome = document.getElementById("inputNome");

        let btnSalva = document.getElementById("btnSalva");

        let saluto = document.getElementById("saluto");

        let btnTitolo = document.getElementById("btnTitolo");

        let btnColore = document.getElementById("btnColore");

        let btnNascondi = document.getElementById("btnNascondi");

        let btnAggiungi = document.getElementById("btnAggiungi");

        let btnElimina = document.getElementById("btnElimina");

        let lista = document.getElementById("lista");



        // =====================================
        // CAMBIO TESTO
        // =====================================

        btnTitolo.addEventListener("click", function () {

            titolo.innerHTML = "Titolo modificato con JavaScript";

            paragrafo.innerHTML = "Paragrafo aggiornato";

        });



        // =====================================
        // CAMBIO STILE
        // =====================================

        btnColore.addEventListener("click", function () {

            titolo.style.color = "red";

            paragrafo.style.backgroundColor = "yellow";

        });



        // =====================================
        // NASCONDI / MOSTRA
        // =====================================

        btnNascondi.addEventListener("click", function () {

            if (paragrafo.style.display === "none") {

                paragrafo.style.display = "block";

            } else {

                paragrafo.style.display = "none";

            }

        });



        // =====================================
        // LETTURA INPUT
        // =====================================

        btnSalva.addEventListener("click", function () {

            // Leggo valore input
            let nome = inputNome.value;



            // Controllo campo vuoto
            if (nome.trim() === "") {

                saluto.innerHTML = "Campo obbligatorio";

            } else {

                saluto.innerHTML = "Ciao " + nome;

            }

        });



        // =====================================
        // AGGIUNTA ELEMENTO
        // =====================================

        btnAggiungi.addEventListener("click", function () {

            // Creo nuovo elemento li
            let nuovoElemento = document.createElement("li");



            // Inserisco testo
            nuovoElemento.innerHTML = "Nuovo elemento";



            // Aggiungo alla lista
            lista.appendChild(nuovoElemento);

        });



        // =====================================
        // ELIMINAZIONE ELEMENTO
        // =====================================

        btnElimina.addEventListener("click", function () {

            // Controllo se esistono elementi
            if (lista.children.length > 0) {

                // Elimino ultimo elemento
                lista.removeChild(lista.lastElementChild);

            }

        });



        // =====================================
        // EVENTO MOUSE
        // =====================================

        titolo.addEventListener("mouseover", function () {

            titolo.innerHTML = "Mouse sopra il titolo";

        });



        // =====================================
        // EVENTO TASTIERA
        // =====================================

        inputNome.addEventListener("keydown", function () {

            console.log("Tasto premuto");

        });
