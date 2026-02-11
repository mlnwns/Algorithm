const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n")
	.slice(1);

const line = input[0].split(" ").map(Number);
line.sort((a, b) => a - b);

let sum = 0;
let answer = 0;

for (const num of line) {
	sum += num;
	answer += sum;
}

console.log(answer);
