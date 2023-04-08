import './utils.js';
import './data.js';
import './pictures.js';
import { getPhoto } from './data.js';
import { renderGallery } from './pictures.js';
import './form.js';
import './scale.js';

renderGallery(getPhoto());
