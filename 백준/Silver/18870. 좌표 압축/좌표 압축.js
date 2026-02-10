const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

const arr = input[1].split(" ").map(Number);

const sortedUnique = [...new Set(arr)].sort((a, b) => a - b);

const indexMap = new Map();
sortedUnique.forEach((value, index) => {
	indexMap.set(value, index);
});

const result = arr.map((v) => indexMap.get(v));

console.log(result.join(" "));
