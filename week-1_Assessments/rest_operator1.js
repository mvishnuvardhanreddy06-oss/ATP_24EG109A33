/**
 * Function that receives any number of arguments and returns their sum.
 * Demonstrates the use of the rest operator and array.reduce().
 * @param {...number} numbers 
 * @returns {number} The sum of all arguments.
 */
const findSum = (...numbers) => {
  return numbers.reduce((accumulator, element) => accumulator + element, 0);
};

console.log(`Sum of (10, 20, 30, 40): ${findSum(10, 20, 30, 40)}`);
console.log(`Sum of empty arguments: ${findSum()}`);