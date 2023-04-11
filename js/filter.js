const filter = document.querySelector('.img-filters');
const filterDefault = filter.querySelector('#filter-default');
const filterRandom = filter.querySelector('#filter-random');
const filterDiscussed = filter.querySelector('#filter-discussed');

const RERENDER_DELAY = 500;

function showFilter() {
  filter.classList.remove('img-filters--inactive');
}


export { showFilter};
