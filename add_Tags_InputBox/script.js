const ul = document.querySelector("ul"),
    input = document.querySelector('input'),
    countNumb = document.querySelector('.details span'),
    removeBtn = document.querySelector('button');
let maxTags = 10,
    tags = [];

countTag();

function countTag() {
    input.focus();
    countNumb.innerText = maxTags - tags.length;
}

function createTag() {
    // menghilangkan semua tag li sebelum menambahkan agar tidak terjadi duplikasi tag
    ul.querySelectorAll('li').forEach(li => li.remove());
    tags.slice().reverse().forEach(tag => {
        let liTag = `<li>${tag}<i class="bi bi-x" onclick = "remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML('afterbegin', liTag); //menambahkan atau menyisipkan li kedalam tag ul
    });
    countTag();
}

function remove(element, tag) {
    let index = tags.indexOf(tag); //mengambil index tag yang akan dihilangkan
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)]; // menghilangkan atau mengeluarkan tag yang dipilih dari array
    element.parentElement.remove(); //menghilangkan li dari tag removed
    countTag();
}

input.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
        let tag = e.target.value.replace(/\s+/g, ' ');
        // menghilangkan spasi yang terlalu panjang pada tag
        if (tag.length > 1 && !tags.includes(tag)) { //jika pangjang tag lebih besar dari 1 dan isi tag belum ada pada array tags
            if (tags.length < 10) { // isi tag jika tags masih kurang dari 10
                tag.split(',').forEach(tag => { //split masing-masing tag dengan coma
                    tags.push(tag);
                    createTag();
                });
            }
        }
        e.target.value = "";
    }
});

removeBtn.addEventListener('click', () =>{
    tags.length = 0;//mengkosongkan isi array
    ul.querySelectorAll('li').forEach(li => li.remove());//menghilangkan semua isi tags
    countTag();
});