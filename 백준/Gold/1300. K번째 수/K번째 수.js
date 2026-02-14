const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

const n = Number(input[0]);
const k = Number(input[1]);

let left = 1;
let right = n * n;

let result = 0;
while (left <= right) {
	const mid = parseInt((left + right) / 2);
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += Math.min(Math.floor(mid / i), n);
	}
	if (total >= k) {
		result = mid;
		right = mid - 1;
	} else {
		left = mid + 1;
	}
}

console.log(result);
