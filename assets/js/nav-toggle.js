// Create nav toggle icon

const navToggleLabel = document.querySelector('.nav-toggle');
const navToggleLabelInner = document.createElement('div');

navToggleLabelInner.className = 'nav-toggle-inner';
navToggleLabel.appendChild(navToggleLabelInner);

for (let i = 0; i < 3; i++) {
    const span = document.createElement('span');

    navToggleLabelInner.appendChild(span);
}


// Main function

const navToggle = document.getElementById('nav-toggle');
const header = document.querySelector('.header');
const navCurtain = document.querySelector('.nav-curtain');

navToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
        header.classList.add('open');
        navToggleLabel.classList.add('open');

        header.classList.remove('fade');

        navCurtain.style = 'display: block';
    } else {
        header.classList.remove('open');
        navToggleLabel.classList.remove('open');

        header.classList.add('fade');

        // Cannot remove `display: block` immediately, or CSS animation
        // will failed. The workaround is down below.

        // navCurtain.removeAttribute('style');
    }
});


// Fix animation failed caused by removing `display: block`

navCurtain.addEventListener('animationend', (e) => {
    if (!navToggle.checked) {
        e.target.removeAttribute('style');
    }
});


// Close nav when window is scrolled or resized by user

window.addEventListener(
    'scroll',
    throttle(function() {
        closeNav();
    }, delayTime)
);

window.addEventListener(
    'resize',
    throttle(function() {
        closeNav();
    }, delayTime)
);

function closeNav() {
    if (navToggle.checked) {
        navToggle.checked = false;

        header.classList.remove('open');
        navToggleLabel.classList.remove('open');

        header.classList.add('fade');
    }
}
