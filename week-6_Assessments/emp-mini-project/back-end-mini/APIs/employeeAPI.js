import express from 'express';
import { EmployeeModel } from '../Models/EmployeeModel.js';

export const employeeRoutes = express.Router();

// Create new employee profile
employeeRoutes.post("/employee", async (request, response) => {
  const employeeData = request.body;
  const newEmpDoc = new EmployeeModel(employeeData);
  const result = await newEmpDoc.save();
  
  response.status(201).json({ message: "employee created successfully" });
});

// Retrieve all employee records
employeeRoutes.get('/employees', async (request, response) => {
  const allEmployees = await EmployeeModel.find();
  response.status(200).json({ message: "employees retrieved", payLoad: allEmployees });
});

// Modify existing employee data
employeeRoutes.put('/employee/:id', async (request, response) => {
  const targetId = request.params.id;
  const updatedData = request.body;
  
  const resultEmp = await EmployeeModel.findByIdAndUpdate(
    targetId, 
    { $set: { ...updatedData } }, 
    { new: true }
  );
  
  if (!resultEmp) {
    return response.status(400).json({ message: "employee not found" });
  }
  
  response.status(200).json({ message: "employee Updated.", payLoad: resultEmp });
});

// Remove employee record
employeeRoutes.delete('/employee/:id', async (request, response) => {
  const targetId = request.params.id;
  const deletedEmp = await EmployeeModel.findByIdAndDelete(targetId);
  
  response.status(200).json({ message: "employee deleted.", payLoad: deletedEmp });
});