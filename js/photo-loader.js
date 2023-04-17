const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const fileChooser = document.querySelector('.img-upload__wrapper input[type=file]');
const preview = document.querySelector('.img-upload__preview img');
const previewEffects = document.querySelectorAll('.effects__preview');


fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    preview.src = URL.createObjectURL(file);

    previewEffects.forEach(
      (picture) => {
        picture.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
      });
  }

});
