const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

const balloons = input[1].split(" ").map(Number);

const arrows = new Map();
let count = 0;

for (const height of balloons) {
	if (arrows.get(height)) {
		arrows.set(height, arrows.get(height) - 1);
	} else {
		count++;
	}

	arrows.set(height - 1, (arrows.get(height - 1) || 0) + 1);
}

console.log(count);
