let angle = 0;

function rotateImage() {
    angle = ( angle + ( 360.0 / 26 ) ) % 360;
    var img = document.getElementById('scheibeAussen');
    img.style.transform = "rotate(" + angle.toString() + "deg)";
}

function rotateImageBackwards() {
    angle = (angle - (360.0 / 26)) % 360;
    var img = document.getElementById('scheibeAussen');
    img.style.transform = "rotate(" + angle.toString() + "deg)";
}

function verschiebenUm(verschiebezahl) {
    angle = 360 - (verschiebezahl * (360.0 / 26));
    var img = document.getElementById('scheibeAussen');
    img.style.transform = "rotate(" + angle.toString() + "deg)";
}