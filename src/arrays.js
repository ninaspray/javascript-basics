const getNthElement = (index, array) => {
  if (index > (array.length - 1)) {
    return array[index - array.length]
  };
  return array[index];
};

const arrayToCSVString = array => {
  return array.join()
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
};

const removeNthElement = (index, array) => {
  return array.splice(2, 1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(",")
};

const uppercaseWordsInArray = strings => {
  return strings.map(strings => strings.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(strings => strings.split("").reverse().join("").split(" ").reverse().join(" "));
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const removen = [...array]
  removen.splice(2, 1)
  return removen;
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(strings => strings.charAt(0).match(/[a,e.i,o,u,]/i));
};

const removeSpaces = string => {
  return string.replace(/\s/g, "");
};

const sumNumbers = numbers => {
  sum = numbers.reduce((acc, number) => { return acc + number; }, 0);
  return sum;
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
