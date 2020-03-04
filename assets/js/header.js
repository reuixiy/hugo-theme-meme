// Header Inner Width

const headerInner = document.querySelector('.header-inner');
const mainInner = document.querySelector('.main-inner');

function setHeaderInnerWidth() {
    const mainInnerWidth = window.getComputedStyle(mainInner, null).getPropertyValue('width');

    headerInner.style.setProperty('--main-inner', mainInnerWidth);
}

if (mainInner !== null) {
    setHeaderInnerWidth();

    window.addEventListener('resize', setHeaderInnerWidth);
} else {
    {{ with .Site.Params.headerFallbackWidth | default "32em" }}
        headerInner.style.setProperty('--main-inner', '{{ . }}');
    {{ end }}
}


// Hide switcher's parentNode if it has `data-hide`

function addDisplayNone(e) {
    const ele = document.getElementById(e);
    if (ele !== null) {
        const hide = ele.getAttribute('data-hide');
        if (hide !== null) {
            ele.parentNode.style = 'display: none';
        }
    }
}

addDisplayNone('theme-switcher');

addDisplayNone('lang-switcher');
