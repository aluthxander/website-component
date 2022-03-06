let menuToggle = document.querySelector('.toggle');
let navigasi = document.querySelector('.navigasi');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
    navigasi.classList.toggle('active');
}



// actifkan class
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = function(){
        let j = 0;
        while (j<list.length) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
    
}