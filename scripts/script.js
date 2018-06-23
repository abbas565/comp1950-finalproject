// Responsive Menu - Dropdown
const body = document.body;
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', openMenu);

function openMenu(){
    body.classList.toggle('show');
}

var a = document.getElementById("Prospective-Student");

a.onclick = function() {
    var b = document.getElementById("snumber");
    b.style.display = "none";
}

var a = document.getElementById("Current-Student");

a.onclick = function() {
    var b = document.getElementById("snumber");
    b.style.display = "block" ;
}