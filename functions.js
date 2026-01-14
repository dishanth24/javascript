function greet ()
{
    console.log("hello Javascript");
}
greet();

/*function with parameters*/
function greets(name) {
    console.log("Hello " + name);
}
greets("ALice");

/*function with return type*/

function add(a,b){
    return a + b;
}
let result = add(5,10);
console.log(result);    

/*arrow function*/
const multiply = (a,b)=>a*b;
console.log(multiply(5,10));

/*function expression*/
const divide = function(a,b){
    return a/b;
}
