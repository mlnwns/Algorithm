const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n")
	.slice(1);

const arr = [];

for (const line of input) {
	const [a, b] = line.split(" ").map(Number);
	arr.push([a, b]);
}

arr.sort((a, b) => {
	if (a[0] === b[0]) return a[1] - b[1];
	return a[0] - b[0];
});

for (const [a, b] of arr) {
	console.log(a, b);
}
