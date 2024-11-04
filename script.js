// Muuda navigeerimisriba taustavärvi kerimisel
window.onscroll = function() {
    changeNavbarColor();
};

function changeNavbarColor() {
    const navbar = document.querySelector('nav');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.style.backgroundColor = "rgba(51, 51, 51, 0.9)"; // Tumedam värv kerimise ajal
    } else {
        navbar.style.backgroundColor = "rgba(51, 51, 51, 0.7)"; // Algne värv
    }
}
