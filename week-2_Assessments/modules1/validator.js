
// Task Management System (ToDo App Modules):
//      Building a task manager like Todoist
//i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        if(!title){
                            return false;
                        }
                        if(title.length < 3){
                            return false;
                        }
                        return true;
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        if(priority === "low" || priority === "medium" || priority === "high"){
                            return true;
                        }
                        return false;
                      }
                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        let dueDate = new Date(date);
                        let today = new Date();
                        if(dueDate > today){
                            return true;
                        }
                        return false;
                      }
export {validateTitle, validatePriority, validateDueDate}