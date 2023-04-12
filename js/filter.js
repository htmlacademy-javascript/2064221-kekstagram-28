const NUMBER_OF_PHOTOS = 10;
const imgFilter = document.querySelector('.img-filters');
const filterDefault = imgFilter.querySelector('#filter-default');
const filterRandom = imgFilter.querySelector('#filter-random');
const filterDiscussed = imgFilter.querySelector('#filter-discussed');

function showFilter() {
  imgFilter.classList.remove('img-filters--inactive');
}
const activeFilter = (button) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const shuffleMiniatures = () => Math.random() - 0.5;

const compareMiniatures = (photoA, photoB) => {
  const rankA = photoA.comments.length;
  const rankB = photoB.comments.length;
  return rankB - rankA;
};

const initFilterListeners = (photos, miniaturePictures) => {
  filterDefault.addEventListener('click', (evt) => {
    miniaturePictures(photos);
    activeFilter(evt.target);
  });

  filterRandom.addEventListener('click', (evt) => {
    miniaturePictures(photos
      .slice()
      .sort(shuffleMiniatures)
      .slice(0, NUMBER_OF_PHOTOS));
    activeFilter(evt.target);
  });

  filterDiscussed.addEventListener('click', (evt) => {
    miniaturePictures(photos
      .slice()
      .sort(compareMiniatures));
    activeFilter(evt.target);
  });
};

export { showFilter, initFilterListeners};
