const isEscapeKey = (evt) => evt.key === 'Escape';
const commentTemplate = document.querySelector('#comments')
  .content
  .querySelector('.social__comment');

const bigPicture = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');

const commentsLoader = document.querySelector('.comments-loader');
const commentCount = document.querySelector('.social__comment-count');

const COMMENTS_TO_SHOW = 5;
let commentsShow = 0;
let currentComments = [];

const renderComments = (newComments) => {
  commentsList.innerHTML = '';
  const commentFragment = document.createDocumentFragment();

  newComments.forEach(({ avatar, name, message }) => {
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;

    commentFragment.appendChild(comment);
  });
  commentsList.appendChild(commentFragment);
};

const renderShowComments = () => {
  commentsShow += COMMENTS_TO_SHOW;

  if (commentsShow >= currentComments.length) {
    commentsLoader.classList.add('hidden');
    commentsShow = currentComments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentsShow; i++) {
    const commentElement = renderComments(currentComments[i]);
    fragment.append(commentElement);
  }

  commentsList.innerHTML = '';
  commentsList.append(fragment);
  commentCount.innerHTML = `${commentsShow} из <span class = "comments-count">${currentComments.length}</span> комментариев`;
};

const onCommentsLoaderButtonClick = () => renderShowComments();
commentsLoader.addEventListener('click', onCommentsLoaderButtonClick);

const renderPicturesDetals = ({ url, description, likes, comments }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  currentComments = comments;
  renderComments(comments);
};


export { isEscapeKey, renderPicturesDetals, renderShowComments };

