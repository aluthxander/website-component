const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const body = document.querySelector('body');


signupBtn.onclick = function () {
    formBx.classList.add('active');
    body.style.backgroundColor= '#f43648';
}
signinBtn.onclick = function () {
    formBx.classList.remove('active');
    body.style.backgroundColor = '#03a9f4'
}