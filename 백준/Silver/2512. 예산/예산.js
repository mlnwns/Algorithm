const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const m = Number(input[2]);

let start = 1;
let end = Math.max(...arr);

let result = 0;
while (start <= end) {
	const mid = parseInt((start + end) / 2);
	let total = 0;
	for (x of arr) {
		total += Math.min(mid, x);
	}

	if (total <= m) {
		result = mid;
		start = mid + 1;
	} else {
		end = mid - 1;
	}
}

console.log(result);
