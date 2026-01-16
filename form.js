let form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let error = document.getElementById("error");

  if (username === "") {
    error.innerText = "Username is required";
  } else {
    error.innerText = "Form submitted successfully!";
  }
});
 /* password validatiion*/

 if(password.length<6)
 {
    error.innerText="password too short";
 }

 ErrorEvent.stye.color="red";