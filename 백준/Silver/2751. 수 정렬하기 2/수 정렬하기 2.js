const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
    .trim()
	.split("\n")
	.slice(1)
	.map(Number);

const arr = input.sort((a, b) => a - b);

console.log(arr.join("\n"));
