// Reactive Dark Mode with Three-Mode Support (Light → Dark → System)
// https://web.dev/prefers-color-scheme/#reacting-on-dark-mode-changes (old reference)
// https://twitter.com/ChromeDevTools/status/1197175265643745282 (old reference)

// Initialize theme based on user preference
const userPreference = localStorage.getItem('theme') || 'system';
applyThemeFromPreference(userPreference);

// Listen for system preference changes
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
mediaQuery.addEventListener('change', () => {
    // Only apply system changes if user preference is 'system'
    if (getUserPreference() === 'system') {
        applyThemeFromPreference('system');
        changeMode();
    }
});

window.addEventListener("DOMContentLoaded", () => {
    // Update meta tags and code highlighting
    changeMode();
    
    // Set initial icon based on user preference
    updateThemeIcons(getUserPreference());

    // Theme Switcher with three-mode support (new implementation)
    // https://derekkedziora.com/blog/dark-mode (old reference)
    const themeSwitcher = document.getElementById('theme-switcher');

    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', (e) => {
            e.preventDefault();
            cycleTheme();
            changeMode();
        });
    }
}, {once: true});

// Sync Across Tabs
// https://codepen.io/tevko/pen/GgWYpg (old reference)
window.addEventListener('storage', function (event) {
    if (event.key !== 'theme') {
        return;
    }
    
    applyThemeFromPreference(event.newValue || 'system');
    changeMode();
});

// Functions

function getUserPreference() {
    return localStorage.getItem('theme') || 'system';
}

function getSystemPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getCurrentTheme() {
    return document.documentElement.getAttribute('data-theme') || getSystemPreference();
}

function applyThemeFromPreference(preference) {
    let actualTheme;
    
    if (preference === 'system') {
        actualTheme = getSystemPreference();
    } else {
        actualTheme = preference;
    }
    
    changeModeMeta(actualTheme);
    updateThemeIcons(preference);
}

function cycleTheme() {
    const currentPreference = getUserPreference();
    let newPreference;
    
    // Cycle: light → dark → system → light...
    switch (currentPreference) {
        case 'light':
            newPreference = 'dark';
            break;
        case 'dark':
            newPreference = 'system';
            break;
        case 'system':
        default:
            newPreference = 'light';
            break;
    }
    
    localStorage.setItem('theme', newPreference);
    applyThemeFromPreference(newPreference);
}

function updateThemeIcons(preference) {
    // Hide all icons first
    const icons = document.querySelectorAll('.theme-icon-light, .theme-icon-dark, .theme-icon-system');
    icons.forEach(icon => icon.style.display = 'none');
    
    // Show the appropriate icon based on user preference (not actual theme)
    const iconToShow = document.querySelector(`.theme-icon-${preference}`);
    if (iconToShow) {
        iconToShow.style.display = 'inline-block';
    }
}

function changeModeMeta(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function changeMode() {
    const isDark = getCurrentTheme() === 'dark';

    // Change theme color meta
    const themeColor = isDark ? '{{ .Site.Params.themeColorDark }}' : '{{ .Site.Params.themeColor }}';
    document.querySelector('meta[name="theme-color"]').setAttribute('content', themeColor);

    {{ if and .Site.Params.enableUtterances (eq hugo.Environment "production") }}
        // Change Utterances Comments Theme
        // https://github.com/utterance/utterances/issues/229
        if (isDark) {
            changeUtterancesTheme('{{ .Site.Params.utterancesThemeDark | default "photon-dark" }}');
        } else {
            changeUtterancesTheme('{{ .Site.Params.utterancesTheme | default "github-light" }}');
        }
        function changeUtterancesTheme(theme) {
            const iframe = document.querySelector('.utterances-frame');
            if (iframe !== null) {
                const message = {
                    type: 'set-theme',
                    theme: theme
                };
                iframe.contentWindow.postMessage(message, 'https://utteranc.es');
            }
        }
    {{ end }}

    {{ if and .Site.Params.enableGiscus (eq hugo.Environment "production") }}
        // Change Giscus Comments Theme
        if (isDark) {
            changeGiscusTheme('{{ .Site.Params.giscusThemeDark | default "dark" }}');
        } else {
            changeGiscusTheme('{{ .Site.Params.giscusTheme | default "light" }}');
        }
        function changeGiscusTheme(theme) {
            function sendMessage(message) {
                const iframe = document.querySelector('iframe.giscus-frame');
                if (iframe !== null) {
                    iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
                }
            }
            sendMessage({
                setConfig: {
                    theme: theme,
                },
            });
        }
    {{ end }}

    // Mermaid
    // https://github.com/reuixiy/hugo-theme-meme/issues/205
    if (typeof mermaidConfig !== 'undefined') {
        const mermaids = document.querySelectorAll('.mermaid');

        mermaids.forEach(e => {
            if (e.getAttribute('data-processed')) {
                // Already rendered, clean the processed attributes
                e.removeAttribute('data-processed');
                // Replace the rendered HTML with the stored text
                e.innerHTML = e.getAttribute('data-graph');
            } else {
                // First time, store the text
                e.setAttribute('data-graph', e.textContent);
            }
        });

        if (isDark) {
            mermaidConfig.theme = '{{ .Site.Params.mermaidThemeDark | default "dark" }}';
            mermaid.initialize(mermaidConfig);
            mermaid.init();
        } else {
            mermaidConfig.theme = '{{ .Site.Params.mermaidTheme | default "default" }}';
            mermaid.initialize(mermaidConfig);
            mermaid.init();
        }
    }
}
