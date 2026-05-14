/**
 * Employee Management System - Basic Operations
 * This script demonstrates array manipulations like insertion, deletion, and updates.
 */

const employees = [
  { eno: 101, name: "Ravi", marks: [78, 82, 91] },
  { eno: 102, name: "Bhanu", marks: [65, 70, 68] },
  { eno: 103, name: "Sneha", marks: [88, 92, 95] },
  { eno: 104, name: "Kiran", marks: [55, 60, 58] },
  { eno: 105, name: "Anitha", marks: [90, 85, 87] },
];

console.log("Initial Employees:", employees);

// 1. Insert new employee at 2nd position (index 1)
const newEmployee = { eno: 106, name: "Vamshi", marks: [80, 85, 90] };
employees.splice(1, 0, newEmployee);
console.log("\nAfter Inserting Vamshi at 2nd position:", employees);

// 2. Remove an employee with name "Kiran"
const kiranIndex = employees.findIndex((emp) => emp.name === "Kiran");
if (kiranIndex !== -1) {
  employees.splice(kiranIndex, 1);
  console.log("\nAfter Removing Kiran:", employees);
}

// 3. Change the last mark 95 to 75 of employee "Sneha"
const sneha = employees.find((emp) => emp.name === "Sneha");
if (sneha && sneha.marks.includes(95)) {
  const markIndex = sneha.marks.indexOf(95);
  sneha.marks[markIndex] = 75;
  console.log("\nAfter Updating Sneha's marks:", employees);
}