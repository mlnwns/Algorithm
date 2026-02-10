const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

console.log(
	input[0]
		.split("")
		.map(Number)
		.sort((a, b) => b - a)
		.join(""),
);
