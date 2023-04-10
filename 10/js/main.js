import './utils.js';
import './data.js';
import './pictures.js';
import { renderGallery } from './pictures.js';
import './form.js';
import './scale.js';
import { getData, sendData } from './api.js';
import { showAlert } from './utils.js';
import { hideModal, setOnFormSubmit } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';


setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});

try {
  const date = await getData();
  renderGallery(date);
} catch (err) {
  showAlert(err.message);
}
