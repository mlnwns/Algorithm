const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

function lowerBound(arr, target, start, end) {
	while (start < end) {
		const mid = parseInt((start + end) / 2);

		if (arr[mid] >= target) end = mid;
		else start = mid + 1;
	}
	return end;
}

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number).reverse();

const d = [0];
for (x of arr) {
	if (d[d.length - 1] < x) {
		d.push(x);
	} else {
		const index = lowerBound(d, x, 0, d.length);
		d[index] = x;
	}
}

console.log(n - (d.length - 1));
