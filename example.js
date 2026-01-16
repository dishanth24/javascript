let count = 100;

let countdown = setInterval(() => {
  console.log(count);
  count--;

  if (count < 0) {
    clearInterval(countdown);
    console.log("Done!");
  }
}, 10);
