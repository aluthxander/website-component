const dropArea = document.querySelector('.drag-area');
const dragText = dropArea.querySelector('header');
const button = dropArea.querySelector('button');
const input = dropArea.querySelector('input');
let file;




button.onclick=()=>{
    input.click();
}

input.addEventListener('change', function () {
    file = this.files[0];
    dropArea.classList.add('active');
    showFile();
});

// ketika user menggeser file ke area-drag
dropArea.addEventListener('dragover', (event) => {
    event.preventDefault();//mencegah perilaku defaultnya
    dropArea.classList.add('active');
    dragText.textContent ="release to Upload File"
});


// ketika user menggeser file keluar dari area-drag
dropArea.addEventListener('dragleave', () => {
    dropArea.classList.remove('active');
    dragText.textContent = "Drag & Drop to Upload File"
});

// ketika user meletakkkan file di area-drag
dropArea.addEventListener("drop", (event) => {
    event.preventDefault(); //mencegah perilaku defaultnya
    file = event.dataTransfer.files[0];
    showFile();
    
});

function showFile() {
    let fileType = file.type;
    let validTypeFile = ['image/jpeg', 'image/png', 'image/jpg']; //type2 file yang bisa didrop diarea-drag 
    if (validTypeFile.includes(fileType)) {
        let fileReader = new FileReader(); //membuat object FileReader
        fileReader.onload = () => {
            let fileURL = fileReader.result;
            let imgTag = `<img src="${fileURL}" alt="">`
            dropArea.innerHTML = imgTag; //menambahkan tag img ke dalam drag-area
        }
        fileReader.readAsDataURL(file);
    } else {
        alert('maaf, ini bukan file gambar');
        dropArea.classList.add('active');
    }
}