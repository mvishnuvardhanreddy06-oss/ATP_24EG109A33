/**
 * Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
 * Demonstrates the behavior of shallow copies where nested objects are still shared.
 */

const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en",
  },
};

// 1. Create a shallow copy using the spread operator
const copiedUser = { ...user };

// 2. Modify top-level property
copiedUser.name = "Vamshi"; // This does NOT affect the original user

// 3. Modify nested object property
copiedUser.preferences.theme = "light"; // This DOES affect the original user because the reference is shared

console.log("--- Shallow Copy Verification ---");
console.log("Original User Name:", user.name); // Ravi (Unchanged)
console.log("Copied User Name:", copiedUser.name); // Vamshi (Changed)

console.log("\nOriginal User Theme:", user.preferences.theme); // light (CHANGED! Due to shallow copy)
console.log("Copied User Theme:", copiedUser.preferences.theme); // light (Changed)

console.log("\nNote: In a shallow copy, nested objects (like 'preferences') are copied by reference, not by value.");