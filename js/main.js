import './utils.js';
import './pictures.js';
import { renderGallery } from './pictures.js';
import './form.js';
import './scale.js';
import { getData, sendData } from './api.js';
import { showAlert, debounce } from './utils.js';
import { hideModal, setOnFormSubmit } from './form.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { showFilter, initFilterListeners} from './filter.js';
import './photo-loader.js';

const RENDER_PHOTOS_DELAY = 500;

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
  const data = await getData();
  renderGallery(data);
  initFilterListeners(data, debounce(renderGallery, RENDER_PHOTOS_DELAY));
  showFilter();
} catch (err) {
  showAlert(err.message);
}
