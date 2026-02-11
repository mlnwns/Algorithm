const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

const N = Number(input[0]);

let total = 0;
let current = 0;

while (total <= N) {
	current++;
	total += current;
}

console.log(current - 1);
