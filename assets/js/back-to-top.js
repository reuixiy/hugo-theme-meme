backToTop();

function backToTop() {
    var backToTop = document.getElementById('back-to-top');
    if (backToTop !== null) {
        window.addEventListener('scroll', function () {
            window.scrollY > 100 ? backToTop.classList.add('show') : backToTop.classList.remove('show');
        });
    }
}