let filterForm = null;
let searchIndex = null;
let defaultFilter = { text: '', changeType: [] };

function debounce(delay, func) {
  let timer = 0;
  return function debounced(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  }
}

function normalizeSearchText(text) {
  return text.replace(/[\s\n]+/g, ' ').trim().toLowerCase();
}

function setupFilters() {
  filterForm = document.querySelector('form.tracker-filter');
  if (filterForm) {
    searchIndex = indexRows();

    filterForm.addEventListener('submit', (event) => event.preventDefault());
    filterForm.addEventListener('input', debounce(200, () => {
      const filters = getFormData(filterForm);
      filterRows(filters, searchIndex);
    }));

    filterRows(getFormData(filterForm), searchIndex);
  }
}

function getFormData(filterForm) {
  const data = { text: '', changeType: [], pageId: null };

  const textField = filterForm.querySelector('input[name="search"]').value;
  const searchText = textField.replace(/(?:^|\s)pageid:\s*([A-Za-z0-9-]+)/i, (_, id) => {
    data.pageId = id;
    return '';
  });
  data.text = normalizeSearchText(searchText);

  data.changeType = ['access', 'substance'].filter(type => {
    return filterForm.querySelector(`input[name="change-${type}"]`).checked;
  });

  return data;
}

function filterByPage(id) {
  if (filterForm) {
    filterForm.querySelector('input[name="search"]').value = `pageId:${id}`;
    filterRows(getFormData(filterForm), searchIndex);
  }
}

window.edgiWebTracker = { filterByPage };

function filterRows(filters, index) {
  for (const item of index) {
    let show = true;

    if (filters.pageId) {
      show = item.pageId === filters.pageId;
    }

    if (show && filters.changeType.length) {
      show = filters.changeType.some(type => item.changeTypes.includes(type));
    }

    if (show && filters.text) {
      show = item.text.includes(filters.text);
    }

    item.node.style.display = show ? '' : 'none';
  }
}

function indexRows() {
  // This isn't really much of an index, but we don't have so much data that
  // searching all these is too expensive.
  return Array.from(document.querySelectorAll('.tracker-row,.tracker-item')).map(node => {


    const changeTypes = Array.from(node.querySelectorAll('[data-change-type]'))
      .map(node => node.dataset.changeType);
    return {
      node,
      text: normalizeSearchText(node.textContent),
      changeTypes: changeTypes,
      pageId: node.dataset.pageId,
    }
  });
}

setupFilters();
