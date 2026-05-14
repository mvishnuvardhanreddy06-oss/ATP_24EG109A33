//task.js - Task operations
                    // TODO: Import validator functions
                 import {validateTitle,validatePriority,validateDueDate} from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                        if (!validateTitle(title)) {
                            return "Invalid task title";
                        }
                        if (!validatePriority(priority)) {
                            return "Invalid priority";
                        }
                        if (!validateDueDate(dueDate)) {
                            return "Invalid due date";
                        }

                      // If valid, add to tasks array
                        const newTask = {
                            id: tasks.length + 1,
                            title,
                            priority,
                            dueDate,
                            completed: false
                        };
                        tasks.push(newTask);
                        return "Task added successfully";
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                      return tasks;
                    }
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                      const task = tasks.find(t => t.id === taskId);
                      if (task) {
                        task.completed = true;
                        return "Task marked as complete";
                      }
                      return "Task not found";
                    }

                  // Export functions
export {addTask, getAllTasks, completeTask}