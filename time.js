/*syntax*/
setTimeout(function()
{
    console.log("Hello after 2 secondss");   
},2000);

 /*with arrow function*/

 setTimeout(() => {
    alert("Time's up!");
 }, 3000);

 /*setInterval*/

 setInterval(()=>
 {
    console.log("repeating every 1 second");
 },2000);

 /* stop timer*/

 let timer = setInterval(() => {
  console.log("Running...");
}, 1000);

clearInterval(timer);

