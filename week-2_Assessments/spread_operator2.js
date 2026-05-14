/**
 * Exercise 2: Update User Object
 * Demonstrates cloning an object and adding new properties using the spread operator.
 */

const user = {
  name: "Ravi",
  city: "Hyderabad",
};

// Create a new object updatedUser by copying 'user' and adding 'age'
const updatedUser = { ...user, age: 25 };

console.log("Original User Object:", user);
console.log("Updated User Object:", updatedUser);

if (!user.age && updatedUser.age) {
  console.log("\nSuccess: Original object remains unchanged, and the new object has the 'age' property.");
}