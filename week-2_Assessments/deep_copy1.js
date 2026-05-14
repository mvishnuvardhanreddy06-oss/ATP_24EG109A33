/**
 * Hands-On 2: Deep Copy (Isolation & Safety Use Case)
 * Demonstrates the use of structuredClone() to create an independent copy of a nested object.
 */

const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085,
    },
  },
  items: [{ product: "Laptop", price: 70000 }],
};

// 1. Create a deep copy of order
const copiedOrder = structuredClone(order);

// 2. Modify properties in the copied object
copiedOrder.customer.address.city = "Bangalore";
copiedOrder.items[0].price = 85000;

console.log("--- Deep Copy Verification ---");
console.log("Original Order City:", order.customer.address.city); // Should be Hyderabad
console.log("Copied Order City:", copiedOrder.customer.address.city); // Should be Bangalore

console.log("\nOriginal Order Price:", order.items[0].price); // Should be 70000
console.log("Copied Order Price:", copiedOrder.items[0].price); // Should be 85000

if (order.customer.address.city !== copiedOrder.customer.address.city) {
  console.log("\nSuccess: Deep copy successful. Original object remains unchanged.");
}