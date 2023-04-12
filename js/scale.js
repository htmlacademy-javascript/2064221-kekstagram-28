const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const SCALE_STEP = 25;
const PERCENT = 100;
const valueElement = document.querySelector('.scale__control--value');
const controlSmaller = document.querySelector('.scale__control--smaller');
const controlBigger = document.querySelector('.scale__control--bigger');
const imageElement = document.querySelector('.img-upload__preview img');

valueElement.value = `${DEFAULT_SCALE}%`;

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / PERCENT})`;
  valueElement.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(valueElement.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(valueElement.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

controlSmaller.addEventListener('click', onSmallerButtonClick);
controlBigger.addEventListener('click', onBiggerButtonClick);

export {resetScale};
