/**
 * Script to find the sum of marks in an array.
 */

const marks = [90, 78, 65, 98];

const sum = marks.reduce((acc, curr) => acc + curr, 0);

console.log(`The sum of marks [${marks}] is: ${sum}`);