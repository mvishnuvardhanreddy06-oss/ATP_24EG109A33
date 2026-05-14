/**
 * Assignment 8: Employee Payroll Processor
 * Processes salary data and bonuses using array methods.
 */

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" },
];

console.log("Employee Directory:", employees);

// 1. filter() employees from IT department
const itEmployees = employees.filter((emp) => emp.department === "IT");
console.log("IT Department Employees:", itEmployees);

// 2. map() to add netSalary = salary + 10% bonus
const employeesWithBonus = employees.map((emp) => ({
  ...emp,
  netSalary: emp.salary * 1.1,
}));
console.log("Payroll with 10% Bonus:", employeesWithBonus);

// 3. reduce() to calculate total salary payout
const totalPayout = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(`Total Salary Payout: ₹${totalPayout}`);

// 4. find() employee with salary 30000
const salary30kEmp = employees.find((emp) => emp.salary === 30000);
console.log("Employee earning ₹30,000:", salary30kEmp);

// 5. findIndex() of employee "Neha"
const nehaIndex = employees.findIndex((emp) => emp.name === "Neha");
console.log("Index of 'Neha' in directory:", nehaIndex);