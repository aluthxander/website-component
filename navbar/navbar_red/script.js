const Toggle = document.querySelector('.toggle');
const navbar = document.querySelector('nav');

Toggle.onclick = function () {
    this.classList.toggle('active');
    navbar.classList.toggle('active');
}