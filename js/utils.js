
import { MESSAGES, NAMES, DESCRIPTIONS, AVATAR_COUNT, PHOTO_COUNT, MIN_LIKE_COUNT, MAX_LIKE_COUNT, COMMENT_COUNT } from './const.js';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from({ length: getRandomInteger(1, 2) }, () =>
  getRandomArrayElement(MESSAGES)).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});


const createPhoto = (id) => ({
  id,
  url: `photos/${getRandomInteger(1, PHOTO_COUNT)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(MIN_LIKE_COUNT, MAX_LIKE_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment
  ),
});

const getPhoto = () =>
  Array.from({ length: PHOTO_COUNT }, (_, photoIndex) =>
    createPhoto(photoIndex + 1)
  );

getPhoto();
