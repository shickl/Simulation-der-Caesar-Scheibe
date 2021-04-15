let winkel = 0;
let scheibeAussen = document.getElementById('scheibeAussen');

function scheibeDrehen() {
    winkel = ( winkel + 360 / 26 ) % 360;
    scheibeAussen.style.transform = "rotate(" + winkel.toString() + "deg)";
}

function scheibeRueckwaertsDrehen() {
    winkel = (winkel - 360 / 26) % 360;
    scheibeAussen.style.transform = "rotate(" + winkel.toString() + "deg)";
}

function verschiebenUm(verschiebezahl) {
    winkel = 360 - (verschiebezahl * 360 / 26);
    scheibeAussen.style.transform = "rotate(" + winkel.toString() + "deg)";
}