/**
 * Assignment 4: E-commerce Cart Summary
 * Manages a shopping cart using array methods.
 */

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true },
];

console.log("Current Cart:", cart);

// 1. filter() to get only inStock products
const availableProducts = cart.filter((item) => item.inStock);
console.log("In-Stock Products:", availableProducts);

// 2. map() to create a new array with: { name, totalPrice }
const cartSummary = cart.map((item) => ({
  name: item.name,
  totalPrice: item.price * item.quantity,
}));
console.log("Cart Summary (Name & Total):", cartSummary);

// 3. reduce() to calculate grand total cart value
const grandTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log(`Grand Total Cart Value: ₹${grandTotal}`);

// 4. find() to get details of "Mouse"
const mouseDetails = cart.find((item) => item.name === "Mouse");
console.log("Details for 'Mouse':", mouseDetails);

// 5. findIndex() to find the position of "Keyboard"
const keyboardIndex = cart.findIndex((item) => item.name === "Keyboard");
console.log("Index of 'Keyboard':", keyboardIndex);