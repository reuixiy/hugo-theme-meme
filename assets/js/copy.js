// Copy Button for Code Blocks

// References
// 1. https://tomspencer.dev/blog/2018/09/14/adding-click-to-copy-buttons-to-a-hugo-powered-blog/
// 2. https://www.dannyguo.com/blog/how-to-add-copy-to-clipboard-buttons-to-code-blocks-in-hugo/

const copyText = '{{ i18n "copy" }}';
const copiedText = '{{ i18n "copied" }}';

document.querySelectorAll('.post-body > pre').forEach((e) => {
    e.outerHTML = `<div style="position: relative">${e.outerHTML}</div>`;
});

function addCopyButtons(clipboard) {
    const divs = document.querySelectorAll('table.lntable, .highlight > pre, .post-body > div > pre');

    divs.forEach((containerEl) => {
        containerEl.parentNode.style.position = 'relative';

        const button = document.createElement('button');
        button.className = 'copy-button';
        button.type = 'button';
        button.innerText = copyText;

        if (containerEl.classList.contains('lntable')) {
            var codeBlock = containerEl.querySelectorAll('.lntd')[1];
        } else {
            var codeBlock = containerEl.querySelector('code');
        }

        button.addEventListener('click', () => {
            clipboard.writeText(codeBlock.innerText).then(() => {
                /* Chrome doesn't seem to blur automatically,
                   leaving the button in a focused state. */
                button.blur();

                button.innerText = copiedText;

                setTimeout(() => {
                    button.innerText = copyText;
                }, 1000);
            }).catch((error) => {
                button.innerText = 'Error';

                console.error(error);
            });
        });

        containerEl.appendChild(button);

        {{ if .Site.Params.enableCopyAutoHide }}
            containerEl.parentNode.addEventListener('mouseover', () => {
                button.style = 'visibility: visible; opacity: 1';
            });

            containerEl.parentNode.addEventListener('mouseout', () => {
                button.style = 'visibility: hidden; opacity: 0';
            });
        {{ end }}
    });
}

if (navigator && navigator.clipboard) {
    addCopyButtons(navigator.clipboard);
} else {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/clipboard-polyfill@2.8.6/dist/clipboard-polyfill.min.js';
    script.defer = true;
    script.onload = function() {
        addCopyButtons(clipboard);
    };

    document.body.appendChild(script);
}
