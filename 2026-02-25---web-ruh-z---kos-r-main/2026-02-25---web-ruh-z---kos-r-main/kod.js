function nagyitKep(melyikKep) {
    let nagyito = document.getElementById("nagykep");
    nagyito.src = melyikKep;
}

function visszaKep() {
    document.getElementById("nagykep").src = "ures.jpg";
}

function szamol(){
    let ram_darab = document.getElementById("db1").value;
    let ram_reszosszeg = ram_darab * 25000;
    document.getElementById("resz1").innerHTML = ram_reszosszeg + " Ft";

    let monitor_darab = document.getElementById("db2").value;
    let monitor_reszosszeg = monitor_darab * 55000;
    document.getElementById("resz2").innerHTML = monitor_reszosszeg + " Ft";

    let hdd_darab = document.getElementById("db3").value;
    let hdd_reszosszeg = hdd_darab * 30000;
    document.getElementById("resz3").innerHTML = hdd_reszosszeg + " Ft";

    let ssd_darab = document.getElementById("db4").value;
    let ssd_reszosszeg = ssd_darab * 42000;
    document.getElementById("resz4").innerHTML = ssd_reszosszeg + " Ft";

    let tap_darab = document.getElementById("db5").value;
    let tap_reszosszeg = tap_darab * 15000;
    document.getElementById("resz5").innerHTML = tap_reszosszeg + " Ft";

    let vegosszeg = ram_reszosszeg + monitor_reszosszeg + hdd_reszosszeg + ssd_reszosszeg + tap_reszosszeg;
    document.getElementById("osszertek").innerHTML = vegosszeg + " Ft";
}
