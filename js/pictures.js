import {getPhoto} from './data.js';

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const container = document.querySelector('.pictures');

const miniaturePictures = getPhoto();

const fragment = document.createDocumentFragment();

miniaturePictures.forEach(({ url, description, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  fragment.appendChild(pictureElement);
});

container.appendChild(fragment);
