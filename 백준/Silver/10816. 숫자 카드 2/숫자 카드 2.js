const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

const n = Number(input[0]);
const arr = input[1]
	.split(" ")
	.map(Number)
	.sort((a, b) => a - b);
const m = Number(input[2]);
const targets = input[3].split(" ").map(Number);

function lowerBound(arr, left, right, target) {
	while (left < right) {
		const mid = parseInt((left + right) / 2);

		if (arr[mid] >= target) right = mid;
		else left = mid + 1;
	}
	return left;
}

function upperBound(arr, left, right, target) {
	while (left < right) {
		const mid = parseInt((left + right) / 2);

		if (arr[mid] > target) right = mid;
		else left = mid + 1;
	}
	return left;
}

function countByRange(arr, leftValue, rightValue) {
	const leftIndex = lowerBound(arr, 0, arr.length, leftValue);
	const rightIndex = upperBound(arr, 0, arr.length, rightValue);

	return rightIndex - leftIndex;
}

const answer = [];
for (let i = 0; i < m; i++) {
	answer.push(countByRange(arr, targets[i], targets[i]));
}
console.log(answer.join(" "));
