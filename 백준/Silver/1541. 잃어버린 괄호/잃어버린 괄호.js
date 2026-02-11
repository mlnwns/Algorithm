const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim();

const groups = input.split("-");

const [first, ...rest] = groups;

let answer = first
	.split("+")
	.map(Number)
	.reduce((acc, cur) => acc + cur, 0);

for (const group of rest) {
	const sum = group
		.split("+")
		.map(Number)
		.reduce((acc, cur) => acc + cur, 0);

	answer -= sum;
}

console.log(answer);
