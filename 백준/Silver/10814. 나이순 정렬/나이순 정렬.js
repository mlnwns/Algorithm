const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n")
	.slice(1);

const arr = [];

input.forEach((guest) => arr.push(guest.split(" ")));

arr.sort((a, b) => {
	return a[0] - b[0];
});

console.log(arr.map((guest) => guest.join(" ")).join("\n"));
