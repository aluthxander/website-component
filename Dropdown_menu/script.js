const card = document.querySelector('.card');
const tombol = document.querySelector('.toggle');
tombol.onclick = function() {
    card.classList.toggle('active');
}