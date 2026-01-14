let students = [
    { name : "dishu", age: 20},
    { name : "raju", age: 20},
    { name : "anu", age: 20}
];

console.log(students[0].name); // dishu
console.log(students[1]['age']); // 20  

//loop through array of objects
for(let i=0; i<students.length; i++)
    {
    console.log("Name: " + students[i].name + ", Age: " + students[i].age);
}

/*add new object to array*/
students.push({name: "mona", age: 21});
console.log(students);

/*remove object from array*/
students.pop();
console.log(students);  

/*array of objects with method*/
let employees = [
    { name: "Alice", salary: 5000,
      getDetails: function() 
      {
          return this.name + " earns " + this.salary;
      }
    },
    { name: "Bob", salary: 6000,
      getDetails: function() 
      {
          return this.name + " earns " + this.salary;
      }
    }
];

for(let i=0; i<employees.length; i++){
    console.log(employees[i].getDetails());
}   
//Alice earns 5000
//Bob earns 6000