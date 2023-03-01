const PHOTO_COUNT = 25;
const AVATAR_COUNT = 6;
const MIN_LIKE_COUNT = 15;
const MAX_LIKE_COUNT = 200;
const COMMENT_COUNT = 17;
const NAMES = [
  'Иван',
  'Юлия',
  'Игорь',
  'Сергей',
  'София',
  'Федор',
  'Геннадий',
  'Мария',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Остаюсь верен традициям – воскресное селфи',
  'Мыслями на пляже.',
  'Жизнь слишком коротка для плохого настроения.',
  'Открываю для себя мир. Скоро вернусь',
  'Говорю “да” новым приключениям',
  'Лучшая тренировка – бег на короткие дистанции, от холодильника к телевизору и обратно',
  'Если бы у меня было чувство юмора, я бы придумал подпись посмешнее',
  'На календаре четверг воспоминаний. Если оставите комментарий, я на вас подпишусь',
  'У всех есть такой друг…',
];

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
