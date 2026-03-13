const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];




//1. Insert new Emp at 2nd position
employees.splice(1,0,{eno: 110,name: "vishnu",marks: [1,2,3]})
    console.log(employees)
  
//2. Remove an emp with name "Kiran"
for(let i=0;i<employees.length;i++){
    if(employees[i].name=="Kiran"){
        employees.splice(i,1);
        break
    }
}
console.log(employees)
//3.Change the last mark 95 to 75 of emp  "Sneha"
for(let i=0;i<employees.length;i++){
    if(employees[i].name=="Sneha"){
      employees[i].marks[2]=75
      break
    }
  }
  console.log(employees)