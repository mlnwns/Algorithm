const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

 for (let i = 0; i < input.length - 1; i++) {
   const str = input[i];
   const reversed = str.split("").reverse().join("");
   if (str === reversed) {
     console.log("yes");
   } else {
     console.log("no");
   }
 }
