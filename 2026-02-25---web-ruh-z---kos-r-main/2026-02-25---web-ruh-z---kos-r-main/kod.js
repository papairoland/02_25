function nagyitKep(melyikKep) {
    let nagyito = document.getElementById("nagykep");
    nagyito.src = melyikKep;
}

function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}

function kivalaszt(melyikTermek) {
    let termek = document.getElementById(melyikTermek);
    let darab = window.prompt("Hány darabot szeretne?");

    if (darab != null && darab != "") {
        let kosar = document.getElementById("kosar");
        let nev = termek.innerHTML;
        kosar.innerHTML += "<p>" + darab + " db " + nev + "</p>";
    }
}
