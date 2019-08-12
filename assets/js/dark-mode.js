// Note: Original code from https://derekkedziora.com/blog/dark-mode

{{ $themeColor := .Site.Params.themeColor }}
{{ $themeColorDark := .Site.Params.themeColorDark }}

const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');

if (theme === "dark") {
    document.getElementById("theme-toggle").innerHTML = "🌙";
    
    var els = [].slice.apply(document.getElementsByClassName("chroma"));
    for (var i = 0; i < els.length; i++) {
        els[i].className = els[i].className.replace(/ *\bchroma\b/g, "chroma-dark");
    }
} else if (theme === "light") {
    document.getElementById("theme-toggle").innerHTML = "🌞";

    var els = [].slice.apply(document.getElementsByClassName("chroma-dark"));
    for (var i = 0; i < els.length; i++) {
        els[i].className = els[i].className.replace(/ *\bchroma-dark\b/g, "chroma");
    }
} else if (userPrefers === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '{{ $themeColorDark }}');
    window.localStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "🌙";

    var els = [].slice.apply(document.getElementsByClassName("chroma"));
    for (var i = 0; i < els.length; i++) {
        els[i].className = els[i].className.replace(/ *\bchroma\b/g, "chroma-dark");
    }
} else if (userPrefers === "light") {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('meta[name="theme-color"]').setAttribute('content', '{{ $themeColor }}');
    window.localStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "🌞";

    var els = [].slice.apply(document.getElementsByClassName("chroma-dark"));
    for (var i = 0; i < els.length; i++) {
        els[i].className = els[i].className.replace(/ *\bchroma-dark\b/g, "chroma");
    }
}

function modeSwitcher() {
    const currentMode = document.documentElement.getAttribute('data-theme');
    if (currentMode === "dark") {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '{{ $themeColor }}');
        window.localStorage.setItem('theme', 'light');
        document.getElementById("theme-toggle").innerHTML = "🌞";

        var els = [].slice.apply(document.getElementsByClassName("chroma-dark"));
        for (var i = 0; i < els.length; i++) {
            els[i].className = els[i].className.replace(/ *\bchroma-dark\b/g, "chroma");
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '{{ $themeColorDark }}');
        window.localStorage.setItem('theme', 'dark');
        document.getElementById("theme-toggle").innerHTML = "🌙";

        var els = [].slice.apply(document.getElementsByClassName("chroma"));
        for (var i = 0; i < els.length; i++) {
            els[i].className = els[i].className.replace(/ *\bchroma\b/g, "chroma-dark");
        }
    }
}

// Sync Across Tabs
// https://codepen.io/tevko/pen/GgWYpg

window.addEventListener('storage', function (event) {
    if (event.newValue === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '{{ $themeColorDark }}');
        document.getElementById("theme-toggle").innerHTML = "🌙";

        var els = [].slice.apply(document.getElementsByClassName("chroma"));
        for (var i = 0; i < els.length; i++) {
            els[i].className = els[i].className.replace(/ *\bchroma\b/g, "chroma-dark");
        }
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector('meta[name="theme-color"]').setAttribute('content', '{{ $themeColor }}');
        document.getElementById("theme-toggle").innerHTML = "🌞";

        var els = [].slice.apply(document.getElementsByClassName("chroma-dark"));
        for (var i = 0; i < els.length; i++) {
            els[i].className = els[i].className.replace(/ *\bchroma-dark\b/g, "chroma");
        }
    }
});