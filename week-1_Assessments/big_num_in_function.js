/**
 * Function to find the largest of three numbers.
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number|string} The largest number or a message if all are equal.
 */
const getLargestNumber = (a, b, c) => {
  if (a === b && b === c) {
    return "All the numbers are equal";
  }
  return Math.max(a, b, c);
};

const result = getLargestNumber(10, 20, 30);
console.log(`The largest number is: ${result}`);