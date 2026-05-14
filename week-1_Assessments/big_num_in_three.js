/**
 * Script to find the largest of three given numbers.
 */

const a = 10;
const b = 20;
const c = 30;

if (a > b && a > c) {
  console.log(`${a} (a) is the largest number.`);
} else if (b > a && b > c) {
  console.log(`${b} (b) is the largest number.`);
} else if (c > a && c > b) {
  console.log(`${c} (c) is the largest number.`);
} else if (a === b && b === c) {
  console.log("All numbers are equal.");
} else {
  console.log("There is no single largest number (multiple numbers are tied for largest).");
}