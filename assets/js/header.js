// Header Inner Width

{{ with .Site.Params.headerFallbackWidth | default "32em" }}
    const headerFallbackWidth = '{{ . }}';
{{ end }}

const headerInner = document.querySelector('.header-inner');
const mainInner = document.querySelector('.main-inner');

if (mainInner !== null) {
    const mainInnerWidth = window.getComputedStyle(mainInner, null).getPropertyValue('width');

    headerInner.style.setProperty('--main-inner', mainInnerWidth);
} else {
    headerInner.style.setProperty('--main-inner', headerFallbackWidth);
}

headerInner.style.setProperty('opacity', 1);


// Measure header height for the scrolling fix
{
    const header = document.querySelector('.header');
    if (header) {
        const headerHeight = window.getComputedStyle(header, null).getPropertyValue('height');
        document.documentElement.style.setProperty('--header-height', headerHeight);
    }
}
