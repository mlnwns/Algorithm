const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

const [k, n] = input[0].split(" ").map(Number);
const arr = [];

for (let i = 1; i < k + 1; i++) {
	arr.push(Number(input[i]));
}

let left = 1;
let right = Math.max(...arr);
let answer = 0;

while (left <= right) {
	let sum = 0;
	const mid = parseInt((left + right) / 2);

	for (let i = 0; i < k; i++) {
		sum += parseInt(arr[i] / mid);
	}

	if (sum >= n) {
		answer = mid;
		left = mid + 1;
	} else {
		right = mid - 1;
	}
}

console.log(answer);
