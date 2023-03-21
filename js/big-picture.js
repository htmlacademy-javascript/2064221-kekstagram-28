const isEscapeKey = (evt) => evt.key === 'Escape';

const bigPicture = document.querySelector('.pictures');

const renderPicturesDetals = ({ url, description, likes}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__comments').textContent = description;
};

export {isEscapeKey};

