export const getRandomNumberInRange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomElement = (list) => {
  const randomIndex = getRandomNumberInRange(1, list.length) - 1;
  return list[randomIndex];
};

export const generateCombo = (lists) =>
  Object.keys(lists).map((key) => getRandomElement(lists[key]));
