const backToTop = document.getElementById('back-to-top');

if (backToTop !== null) {
    window.addEventListener(
        'scroll',
        throttle(function() {
            window.scrollY > 100 ? backToTop.classList.add('show') : backToTop.classList.remove('show');
        }, delayTime)
    );
}
