/* array stores multiples values in one variables*/

/*creating an array*/
let fruits = ['apple', 'banana', 'mango', ];

/*indexing of array starts from 0*/

fruits[0]; //apple
fruits[1]; //banana
fruits[2]; //mango

/*access and change values*/
fruits[1] = 'orange'; //change banana to orange
console.log(fruits); //['apple', 'orange', 'mango']

/*add elements to array*/
fruits.push('grape'); //adds grape at the end
console.log(fruits); //['apple', 'orange', 'mango', 'grape']    

/*remove elements from array*/

fruits.pop(); //removes last element
console.log(fruits); //['apple', 'orange', 'mango'] 

/*array length*/
console.log(fruits.length); //3 

/*loop through array*/
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

/*array methods*/
let numbers = [1, 2, 3, 4, 5];      

/*map method*/
let squaredNumbers = numbers.map(function(num){
    return num * num;
}); 

console.log(squaredNumbers); //[1, 4, 9, 16, 25]

/*filter method*/
let evenNumbers = numbers.filter(function(num){
    return num % 2 === 0;
});     

console.log(evenNumbers); //[2, 4]

/*reduce method*/
let sum = numbers.reduce(function(total, num){
    return total + num;
}, 0);
console.log(sum); //15

/*find method*/
let foundNumber = numbers.find(function(num){
    return num > 3;
});

console.log(foundNumber); //4

/*forEach method*/
numbers.forEach(function(num){
    console.log(num);
});
