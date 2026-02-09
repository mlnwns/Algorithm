const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.split("\n");

const arr = input[0].split(" ").map(Number);

const [min, medium, max] = arr.sort((a, b) => a - b);

console.log(`${min} ${medium} ${max}`);
