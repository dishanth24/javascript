/* object tto json */
let jsonData  = JSON.stringify(UserActivation);
console.log(jsonData);
console.log(typeof jsonData); //string

/* json to object */    
let objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData); //object

/* real API JSON example */

let apiJsonExample = {
    "id" : 1,
    "name":"dishu",
    "city":"bangalore",
    "isStudent": true,
    "skills": ["javascript", "python", "java"]
};

/* loop through JSON Data */

let users = [
    {"name": "Dishu"},
    {"name": "Aishu"}
];

users.forEach(u =>{
    console.log(u.name);
});