setTimeout(() => {
  process.stdout.write('\r|   '); //We can use the special character \r to return our cursor back to the beginning
}, 100);       // of the line that we were on.After this, anything we write next to stdout will overwrite the line.

//Spaces are added after the character so that the cursor moves far enough away from our animation
//Removing the space padding at the end of the strings will mean that the cursor will sit on top of the animation, making it harder to see

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1300);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1700);