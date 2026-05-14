/**
 * Assignment 3: Student Marks List
 * Analyzes exam scores using array methods like filter, map, and reduce.
 */

const marks = [78, 92, 35, 88, 40, 67];
console.log("Original Marks:", marks);

// 1. filter() marks ≥ 40 (pass marks)
const passingMarks = marks.filter((mark) => mark >= 40);
console.log("Passing Marks (≥ 40):", passingMarks);

// 2. map() to add 5 grace marks to each student
const marksWithGrace = marks.map((mark) => mark + 5);
console.log("Marks after adding 5 grace marks:", marksWithGrace);

// 3. reduce() to find highest mark
const highestMark = marks.reduce((max, current) => (current > max ? current : max), marks[0]);
console.log("Highest Mark:", highestMark);

// 4. find() first mark below 40
const firstFailure = marks.find((mark) => mark < 40);
console.log("First failing mark (< 40):", firstFailure);

// 5. findIndex() of mark 92
const indexAt92 = marks.findIndex((mark) => mark === 92);
console.log("Index of mark 92:", indexAt92);