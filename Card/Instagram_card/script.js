let hati = document.querySelectorAll('.button .left .bi')[0];
let suka = document.querySelector('.likes');
let bookM = document.querySelector('.button .right .bi');

hati.addEventListener('click', function () {
    if (hati.classList == 'bi bi-heart') {
        hati.classList.replace('bi-heart', 'bi-heart-fill');
        hati.style.color = 'rgb(204, 46, 46)';
        hati.classList.add('action');
        setTimeout(function () {
            hati.classList.remove('action');
        }, 500);
        suka.innerHTML = 1 + ' likes';
    } else {
        hati.classList.replace('bi-heart-fill', 'bi-heart');
        hati.style.color = 'black';
        hati.classList.add('action');
        setTimeout(function () {
            hati.classList.remove('action');
        }, 500);
        suka.innerHTML = '0 likes';
    }
});

bookM.addEventListener('click', function () {
    if (bookM.classList.value == 'bi bi-bookmark') {
        bookM.classList.replace('bi-bookmark', 'bi-bookmark-fill');
        bookM.classList.add('action');
        setTimeout(function () {
            bookM.classList.remove('action');
        }, 500);
    } else {
        bookM.classList.replace('bi-bookmark-fill', 'bi-bookmark');
        bookM.style.color = 'black';
        bookM.classList.add('action');
        setTimeout(function () {
            bookM.classList.remove('action');
        }, 500);
    }
})