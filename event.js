/* event click*/
let btn= document.querySelector("#btn");
btn.addEventListener("click", function()
{
    console.log("button clicked");
});

/* input event(typing)*/

let input= document.querySelector("input");
input.addElementListerner("input",function()
{
    console.log("input.value");
})

/*submit event*/
let form = document.querySelector("form");

form.addEventListener("submit", function(e)
{
    e.preventDefault();
    console.log("form submitted");
})

/*event object(e)*/
btn.addEventListener("click", function(e){
    console.log(e.target);
})