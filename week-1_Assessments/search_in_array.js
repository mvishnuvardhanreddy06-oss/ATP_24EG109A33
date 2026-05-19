/**
 * Function to search for an element in an array.
 */
const searchNum = (arr, searchElement) => {
  const index = arr.indexOf(searchElement);
  return index !== -1 ? index : "not found";
};

const numbers = [10, 20, 30, 40, 50];
const target = 50;
const result = searchNum(numbers, target);

console.log(`Searching for ${target} in [${numbers}]: Result = ${result}`);
