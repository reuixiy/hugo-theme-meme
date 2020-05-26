window.addEventListener("DOMContentLoaded", event => {
    // Measure header height for the scrolling fix
    const header = document.querySelector('.header');
    if (header) {
        const headerHeight = window.getComputedStyle(header, null).getPropertyValue('height');
        document.documentElement.style.setProperty('--header-height', headerHeight);
    }
}, {once: true});
