/* An object stores related data in key : value pairs.*/

/* create object */

let student = {
    name : "dish",
    age : 20,
    isstudent: true
};

/*access object data*/

console.log(student.name);
console.log(student['age']);

/*update object data*/
student.age = 21;
console.log(student.age);

/*add new key-value pair*/
student.city = "New York";
console.log(student.city);

/*remove key-value pair*/
delete student.isstudent;
console.log(student);

/*loop through object*/
for(let key in student){
    console.log(key + ": " + student[key]);
}

/*object wit function (method)*/

let user ={
    name : "Alice",
    greet : function()
    {
        console.log("Hello " + this.name);
    }   
}

user.greet(); //Hello Alice

/*object methods*/
let person = {
    firstName : "John",
    lastName : "Doe",
    fullName : function()
    {
        return this.firstName + " " + this.lastName;
    }
};
console.log(person.fullName()); //John Doe
