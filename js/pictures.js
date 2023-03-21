import {getPhoto} from './data.js';
import {isEscapeKey} from './big-picture.js';


const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const container = document.querySelector('.pictures');

const miniaturePictures = getPhoto();

const fragment = document.createDocumentFragment();

miniaturePictures.forEach(({ url, description, likes, comments, id}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  const bigPictureOpenElement = document.querySelector('.big-picture');
  const bigPictureCloseElement = bigPictureOpenElement.querySelector('.big-picture__cancel');

  const onDocumentKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeBigPicture ();
    }
  };

  function openBigPicture () {
    bigPictureOpenElement.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onDocumentKeydown);
  }

  function closeBigPicture () {
    bigPictureOpenElement.classList.add('hidden');

    document.removeEventListener('keydown', onDocumentKeydown);
  }
  pictureElement.addEventListener ('click', () => {
    openBigPicture ();
  });

  bigPictureCloseElement.addEventListener ('click', () => {
    closeBigPicture ();
  });
  pictureElement.dataset.pictureElementId = id;

  fragment.appendChild(pictureElement);
});

container.appendChild(fragment);

export {pictureTemplate};


