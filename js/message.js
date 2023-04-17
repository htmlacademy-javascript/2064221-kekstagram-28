import { isEscapeKey } from './utils.js';
import { onDocumentKeydown } from './form.js';
const body = document.querySelector('body');
const successTemplateFragment = document.querySelector('#success')
  .content
  .querySelector('.success');
const errorTemplateFragment = document.querySelector('#error')
  .content
  .querySelector('.error');

const closeSuccessMessage = () => {
  const successText = document.querySelector('.success');
  if (successText) {
    successText.remove();
  }
  document.removeEventListener('keydown', onDocumentMessageKeydown);
  document.removeEventListener('click', onDocumentClick);
};

const onCloseSuccessMessage = () => {
  closeSuccessMessage();
};

const showSuccessMessage = () => {
  const successMessage = successTemplateFragment.cloneNode(true);
  body.appendChild(successMessage);
  const successButton = document.querySelector('.success__button');

  successButton.addEventListener('click', onCloseSuccessMessage);
  document.addEventListener('keydown', onDocumentMessageKeydown);
  document.addEventListener('click', onDocumentClick);
};


const closeErrorMessage = () => {
  const errorText = document.querySelector('.error');
  if (errorText) {
    errorText.remove();
  }
  document.removeEventListener('keydown', onDocumentMessageKeydown);
  document.removeEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown); //возвращаем обработчик закрытия формы

};

const onCloseErrorMessage = () => {
  closeErrorMessage();
};

const showErrorMessage = () => {
  const errorMessage = errorTemplateFragment.cloneNode(true);
  body.appendChild(errorMessage);
  const errorButton = document.querySelector('.error__button');

  errorButton.addEventListener('click', onCloseErrorMessage);
  document.addEventListener('keydown', onDocumentMessageKeydown);
  document.addEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onDocumentKeydown); //снимаем на время обработчик закрытия формы
};

function onDocumentMessageKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
    closeSuccessMessage();
  }
}
function onDocumentClick(evt) {
  if (evt.target.classList.contains('error')) {
    closeErrorMessage();
    closeSuccessMessage();
  }
}

export { showSuccessMessage, showErrorMessage };
