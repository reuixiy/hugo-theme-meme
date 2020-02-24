wrapTable();

function wrapTable() {
    const tables = document.querySelectorAll('div.post-body table');

    for (let i = 0; i < tables.length; i++) {
        const parent = tables[i].parentNode;
        const wrapper = document.createElement('div');

        wrapper.className = 'table-container';

        parent.replaceChild(wrapper, tables[i]);
        wrapper.appendChild(tables[i]);
    }
}
