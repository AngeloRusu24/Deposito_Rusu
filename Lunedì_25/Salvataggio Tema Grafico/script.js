
        const body = document.body;
        const temaButton = document.getElementById("temaButton");

        // Controllo tema salvato nel Local Storage all'apertura della pagina
        const temaSalvato = localStorage.getItem("tema");

        if (temaSalvato === "dark") {
            body.classList.add("dark");
        }

        // Gestione del click sul pulsante per il cambio tema
        temaButton.addEventListener("click", function () {

            body.classList.toggle("dark");

            // Salvataggio permanente dello stato del tema nel browser
            if (body.classList.contains("dark")) {
                localStorage.setItem("tema", "dark");
            } else {
                localStorage.setItem("tema", "light");
            }
        });