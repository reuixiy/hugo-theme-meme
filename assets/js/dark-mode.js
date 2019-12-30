// Back to Previous Mode & Respect System Preferences
// `userPrefers`, `darkModeMediaQuery`, `lightModeMediaQuery` is defined in layouts/partials/head.html

if (userPrefers === "dark") {
    changeMode("🌙", "chroma", "chroma-dark");
} else if (userPrefers === "light") {
    changeMode("🌞", "chroma-dark", "chroma");
} else if (darkModeMediaQuery.matches) {
    changeMode("🌙", "chroma", "chroma-dark");
} else if (lightModeMediaQuery.matches) {
    changeMode("🌞", "chroma-dark", "chroma");
}

// Reactive Dark Mode
// https://web.dev/prefers-color-scheme/#reacting-on-dark-mode-changes
// https://twitter.com/ChromeDevTools/status/1197175265643745282

darkModeMediaQuery.addListener((e) => {
    const darkModeOn = e.matches;
    if (darkModeOn) {
        changeModeMeta("dark");
        changeMode("🌙", "chroma", "chroma-dark");
        setMode("dark");
    }
});

lightModeMediaQuery.addListener((e) => {
    const lightModeOn = e.matches;
    if (lightModeOn) {
        changeModeMeta("light");
        changeMode("🌞", "chroma-dark", "chroma");
        setMode("light");
    }
});

// Mode Switcher
// https://derekkedziora.com/blog/dark-mode

function modeSwitcher() {
    const currentMode = document.documentElement.getAttribute('data-theme');
    if (currentMode === "dark") {
        changeModeMeta("light");
        changeMode("🌞", "chroma-dark", "chroma");
        setMode("light");
    } else {
        changeModeMeta("dark");
        changeMode("🌙", "chroma", "chroma-dark");
        setMode("dark");
    }
}

// Sync Across Tabs
// https://codepen.io/tevko/pen/GgWYpg

window.addEventListener('storage', function (event) {
    if (event.newValue === "dark") {
        changeModeMeta("dark");
        changeMode("🌙", "chroma", "chroma-dark");
    } else {
        changeModeMeta("light");
        changeMode("🌞", "chroma-dark", "chroma");
    }
});

// Functions

function changeMode() {
    document.getElementById("theme-toggle").innerHTML = arguments[0];

    var els = [].slice.apply(document.getElementsByClassName(arguments[1]));
    for (var i = 0; i < els.length; i++) {
        els[i].className = arguments[2];
    }

    // Utterances
    // https://github.com/utterance/utterances/issues/229
    {{ if and .Site.Params.enableUtterances (eq hugo.Environment "production") }}
        if (arguments[0] === "🌙") {
            changeUtterancesTheme("{{ .Site.Params.utterancesThemeDark }}");
        } else {
            changeUtterancesTheme("{{ .Site.Params.utterancesTheme }}");
        }
        function changeUtterancesTheme() {
            const iframe = document.querySelector('.utterances-frame');
            if (iframe !== null) {
                const message = {
                    type: 'set-theme',
                    theme: arguments[0]
                };
                iframe.contentWindow.postMessage(message, 'https://utteranc.es');
            }
        }
    {{ end }}
}

function setMode() {
    window.localStorage.setItem('theme', arguments[0]);
}
