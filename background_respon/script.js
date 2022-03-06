const bidangs = document.querySelectorAll('.bidang');

bidangs.forEach(function (bidang) {
    bidang.addEventListener('mouseover', function () {
        bidang.classList.add('active');
        bidang.classList.remove('nonActive');
    });
    bidang.addEventListener('mouseleave', function() {
        bidang.classList.remove('active');
        bidang.classList.add('nonActive');
    })
});