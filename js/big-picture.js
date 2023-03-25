const isEscapeKey = (evt) => evt.key === 'Escape';
const commentTemplate = document.querySelector('#comments')
  .content
  .querySelector('.social__comment');

const bigPicture = document.querySelector('.big-picture');
const commentsList = document.querySelector('.social__comments');

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

const renderPicturesDetals = ({ url, description, likes, comments }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;

  renderComments(comments);
};

export { isEscapeKey, renderPicturesDetals };

