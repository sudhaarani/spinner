let arr = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 100;
arr.forEach((element) => {
  setTimeout(() => {
    process.stdout.write("\r"+element+"   ");
  }, delay);
  delay += 200;
});
setTimeout(() => {
  process.stdout.write("\n"); // the next prompt appears on the same line, to avoid that we are delaying \n as well, so used setTimeout
}, delay);
