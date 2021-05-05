import WorldNeeds from "../data/WorldNeeds";

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

export const getUniqueID = () => Math.random().toString(36).substr(2, 9);

const shuffle = (array = []) => {
  //Fisher–Yates Shuffle
  let i = array.length;
  let j = 0;
  let temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    // swap randomly chosen element with current element
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const generateWorldNeeds = (count = 12) => {
  const nums = WorldNeeds.map((item, index) => index);
  const shuffledIndexes = shuffle(nums).slice(0, count);
  console.log(shuffledIndexes);
  const list = shuffledIndexes.map((i) => WorldNeeds[i]);
  return list;
};
