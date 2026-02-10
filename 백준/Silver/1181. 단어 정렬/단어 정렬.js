const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n")
	.slice(1);

const unique = [...new Set(input)];

unique.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(unique.join("\n"));
