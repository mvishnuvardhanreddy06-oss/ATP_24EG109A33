/**
 * Exercise 1: Copy & Extend an Array
 * Demonstrates the use of the spread operator to clone and extend arrays without mutating the original.
 */

const fruits = ["apple", "banana"];

// Create a new array moreFruits by copying 'fruits' and adding "orange"
const moreFruits = [...fruits, "orange"];

console.log("Original Fruits Array:", fruits);
console.log("Extended Fruits Array (moreFruits):", moreFruits);

if (fruits.length !== moreFruits.length) {
  console.log("\nSuccess: Original array remains unchanged.");
}