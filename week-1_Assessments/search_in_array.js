/**
 * Function to search for an element in an array.
 * @param {Array} arr The array to search in.
 * @param {*} searchElement The element to look for.
 * @returns {number|string} The index of the element or "not found".
 */
const searchNum = (arr, searchElement) => {
  const index = arr.indexOf(searchElement);
  return index !== -1 ? index : "not found";
};

const numbers = [10, 20, 30, 40, 50];
const target = 50;
const result = searchNum(numbers, target);

console.log(`Searching for ${target} in [${numbers}]: Result = ${result}`);