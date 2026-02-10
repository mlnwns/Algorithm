const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

const K = input[0].split(" ").map(Number)[1];

const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

console.log(arr[K - 1]);
