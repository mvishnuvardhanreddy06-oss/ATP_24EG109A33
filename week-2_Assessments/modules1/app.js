//iii. app.js - Main application
                  // TODO: Import task functions
                  import { addTask, getAllTasks, completeTask } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  console.log(addTask("eating", "medium", "2027-01-01"));
                  console.log(addTask("sleeping", "low", "2028-01-02"));
                  console.log(addTask("studying", "high", "2026-01-03"));
                  // 2. Display all tasks
                  console.log(getAllTasks());
                  // 3. Complete a task
                  console.log(completeTask(1));
                  // 4. Display all tasks again
                  console.log(getAllTasks());