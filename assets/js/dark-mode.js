// Note: Original code from https://derekkedziora.com/blog/dark-mode

{{ $themeColor := .Site.Params.themeColor }}
{{ $themeColorDark := .Site.Params.themeColorDark }}

// `content` is defined in assets/scss/main.scss via CSS media query `prefers-color-scheme`
const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');

// `theme` is defined in layouts/partials/head.html
if (theme === "dark") {
    goDark();
} else if (theme === "light") {
    goLight();
} else if (userPrefers === "dark") {
    goDarkMeta();
    window.localStorage.setItem('theme', 'dark');
    goDark();
} else if (userPrefers === "light") {
    goLightMeta();
    window.localStorage.setItem('theme', 'light');
    goLight();
}

function modeSwitcher() {
    const currentMode = document.documentElement.getAttribute('data-theme');
    if (currentMode === "dark") {
        goLightMeta();
        window.localStorage.setItem('theme', 'light');
        goLight();
    } else {
        goDarkMeta();
        window.localStorage.setItem('theme', 'dark');
        goDark();
    }
}

// Sync Across Tabs
// https://codepen.io/tevko/pen/GgWYpg

window.addEventListener('storage', function (event) {
    if (event.newValue === "dark") {
        goDarkMeta();
        goDark();
    } else {
        goLightMeta();
        goLight();
    }
});

// Functions

function goDarkMeta() {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '{{ $themeColorDark }}');
}

function goLightMeta() {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '{{ $themeColor }}');
}

function goDark() {
    document.getElementById("theme-toggle").innerHTML = "🌙";

    var els = [].slice.apply(document.getElementsByClassName("chroma"));
    for (var i = 0; i < els.length; i++) {
        els[i].className = els[i].className.replace(/ *\bchroma\b/g, "chroma-dark");
    }
}

function goLight() {
    document.getElementById("theme-toggle").innerHTML = "🌞";

    var els = [].slice.apply(document.getElementsByClassName("chroma-dark"));
    for (var i = 0; i < els.length; i++) {
        els[i].className = els[i].className.replace(/ *\bchroma-dark\b/g, "chroma");
    }
}
