/**
 * Assignment 2: Online Course Name Processor
 * Demonstrates string array manipulations including filtering, mapping, and joining via reduce.
 */

const courses = ["javascript", "react", "node", "mongodb", "express"];
console.log("Original Courses:", courses);

// 1. filter() courses with name length > 5
const longNameCourses = courses.filter((course) => course.length > 5);
console.log("Courses with length > 5:", longNameCourses);

// 2. map() to convert course names to uppercase
const upperCaseCourses = courses.map((course) => course.toUpperCase());
console.log("Uppercase Courses:", upperCaseCourses);

// 3. reduce() to generate a single string: "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
const courseString = courses
  .map((course) => course.toUpperCase())
  .reduce((acc, curr) => `${acc} | ${curr}`);
console.log("Formatted Course List:", courseString);

// 4. find() the course "react"
const reactCourse = courses.find((course) => course === "react");
console.log("Found Course:", reactCourse);

// 5. findIndex() of "node"
const nodeIndex = courses.findIndex((course) => course === "node");
console.log("Index of 'node':", nodeIndex);