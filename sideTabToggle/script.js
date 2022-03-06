const tabs = document.querySelector('.container');
const tabButton = document.querySelectorAll('.tap-button');
const konten = document.querySelectorAll('.content');

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        konten.forEach(k => {
            k.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}