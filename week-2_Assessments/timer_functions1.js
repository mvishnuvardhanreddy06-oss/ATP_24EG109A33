/**
 * Assignment: Exam Portal Simulator
 * Demonstrates the use of setTimeout() to schedule delayed execution of code.
 */

const simulateExamSubmission = () => {
  console.log("--- Exam Portal Activity ---");
  
  // Step 1: Immediate feedback
  console.log("Exam submitted successfully.");

  // Step 2: Evaluation phase (after 2 seconds)
  setTimeout(() => {
    console.log("Evaluating answers...");
  }, 2000);

  // Step 3: Result phase (after 4 seconds)
  setTimeout(() => {
    console.log("Result: Pass ✅");
  }, 4000);
};

simulateExamSubmission();