import { isEscapeKey } from './utils.js';
import { onDocumentKeydown } from './form.js';
const body = document.querySelector('body');
const successTemplateFragment = document.querySelector('#success')
  .content
  .querySelector('.success');
const errorTemplateFragment = document.querySelector('#error')
  .content
  .querySelector('.error');

const showSuccessMessage = () => {
  const successMessage = successTemplateFragment.cloneNode(true);
  body.appendChild(successMessage);
  const successButton = document.querySelector('.success__button');
  const onСloseSuccessMessage = () => {
    const successText = document.querySelector('.success');
    if (successText) {
      successText.remove();
    }
  };

  successButton.addEventListener('click', onСloseSuccessMessage);
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      onСloseSuccessMessage();
    }
  });
  document.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('success')) {
      onСloseSuccessMessage();
    }
  });
};

const showErrorMessage = () => {
  const errorMessage = errorTemplateFragment.cloneNode(true);
  body.appendChild(errorMessage);
  const errorButton = document.querySelector('.error__button');
  const onСloseErrorMessage = () => {
    const errorText = document.querySelector('.error');
    if (errorText) {
      errorText.remove();
    }
  };

  const closeErrorMessage = () => {
    onСloseErrorMessage();
  };

  errorButton.addEventListener('click', onСloseErrorMessage);
  document.removeEventListener('keydown', onDocumentKeydown);
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
};

export { showSuccessMessage, showErrorMessage };
