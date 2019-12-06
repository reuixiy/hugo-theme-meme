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
    setDark();
    goDark();
} else if (userPrefers === "light") {
    goLightMeta();
    setLight();
    goLight();
}

function modeSwitcher() {
    const currentMode = document.documentElement.getAttribute('data-theme');
    if (currentMode === "dark") {
        goLightMeta();
        setLight();
        goLight();
    } else {
        goDarkMeta();
        setDark();
        goDark();
    }
}

// Reactive Dark Mode
// https://web.dev/prefers-color-scheme/#reacting-on-dark-mode-changes
// https://twitter.com/ChromeDevTools/status/1197175265643745282

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeMediaQuery.addListener((e) => {
    const darkModeOn = e.matches;
    if (darkModeOn) {
        goDarkMeta();
        setDark();
        goDark();
    }
});

const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
lightModeMediaQuery.addListener((e) => {
    const lightModeOn = e.matches;
    if (lightModeOn) {
        goLightMeta();
        setLight();
        goLight();
    }
});

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

function setDark() {
    window.localStorage.setItem('theme', 'dark');
}

function setLight() {
    window.localStorage.setItem('theme', 'light');
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
