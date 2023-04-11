import { isEscapeKey } from './big-picture.js';
const body = document.querySelector('body');
const successTemplateFragment = document.querySelector('#success')
  .content
  .querySelector('.success');
const errorTemplateFragment = document.querySelector('#error')
  .content
  .querySelector('.error');

function showSuccessMessage() {
  const successMessage = successTemplateFragment.cloneNode(true);
  body.appendChild(successMessage);
  const successButton = document.querySelector('.success__button');
  function closeSuccessMessage() {
    const onSuccessMessageClose = document.querySelector('.success');
    onSuccessMessageClose.remove();
  }
  successButton.addEventListener('click', closeSuccessMessage);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeSuccessMessage();
    }
  });
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('success')) {
      closeSuccessMessage();
    }
  });
}

function showErrorMessage() {
  const errorMessage = errorTemplateFragment.cloneNode(true);
  body.appendChild(errorMessage);
  const errorButton = document.querySelector('.error__button');
  function closeErrorMessage() {
    const onErrorMessageClose = document.querySelector('.error');
    onErrorMessageClose.remove();
  }
  errorButton.addEventListener('click', closeErrorMessage);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeErrorMessage();
    }
  });
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('error')) {
      closeErrorMessage();
    }
  });
}

export { showSuccessMessage, showErrorMessage };
