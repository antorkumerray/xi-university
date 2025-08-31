var header = document.getElementById("header");
var nav = document.getElementById("nav");
var menuBtn = document.getElementById("menubtn");

menuBtn.onclick = () => {
    nav.classList.toggle('nav-active');
}

window.onscroll = () => {
    nav.classList.remove('nav-active');
}

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 20);
});