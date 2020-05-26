window.addEventListener("DOMContentLoaded", event => {
    const langSwitcher = document.getElementById('lang-switcher');

    if (langSwitcher) {
        const langs = document.getElementById('langs');

        langSwitcher.addEventListener('mouseover', function() {
            langs.style = 'display: block';
        });

        langSwitcher.addEventListener('mouseout', function() {
            langs.style = 'display: none';
        });
    }
}, {once: true});
