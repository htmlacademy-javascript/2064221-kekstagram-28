// проверяет длину строки
const stringLength = (string, number) => {
  if (string.length <= number) {
    return true;
  } return false;
};

stringLength('проверяемая строка', 10);

// проверяет на полиндром
const isPalindrom = (line) => {
  const tempLine = line
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseLine = '';
  for (let i = tempLine.length - 1; i >= 0; i--) {
    reverseLine += tempLine.at(i);
  }
  return tempLine === reverseLine;
};

isPalindrom('Лёша на полке клопа нашёл');


// возвращает цифры из строки в виде целого числа
const extractNumber = (originalLine) => {
  let result = '';
  for (let i = 0; i < originalLine.length; i++) {
    if (!Number.isNaN (parseInt(originalLine.at(i), 10))) {
      result += originalLine.at(i);
    }
  }
  return parseInt (result, 10);
};

extractNumber('1 кефир, 0.5 батона');

// возвращает исходную строку, дополненную указанными символами до заданной длины
const padStart = (originalString, minLength, pad) => {
  const actualPad = minLength - originalString.length;
  if (actualPad <= 0) {
    return originalString;
  }

  return pad.slice (0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + originalString;
};

padStart('qwerty', 4, '0');
