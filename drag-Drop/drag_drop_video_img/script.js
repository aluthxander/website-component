const form = document.querySelector('form'),
    fileInput = form.querySelector('.file-input'),
    areaProgress = document.querySelector('.progress-area'),
    areaUpload = document.querySelector('.area-Upload');

form.addEventListener('click', () => {
    fileInput.click();
});
fileInput.onchange = ({target}) => {
    let file = target.files[0];
    if (file) {//jika file dipilih
        let namaFile = file.name;//mengambail nama file
        uploadFile(namaFile);//memanggil uploadFile dengan argument nama dari file yang dipilih 
    }
}

function uploadFile(nama) {
    let xhr = new XMLHttpRequest();//membuat xml object(ajax)
    xhr.open("POST", );
    xhr.send();
}