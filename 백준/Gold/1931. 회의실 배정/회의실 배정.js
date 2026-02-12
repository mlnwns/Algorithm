const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n")
	.slice(1);

const arr = input.map((i) => i.split(" ").map(Number));

arr.sort((a, b) => {
	if (a[1] !== b[1]) return a[1] - b[1];
	else {
		return a[0] - b[0];
	}
});

let count = 0;
let endTime = 0;

for (let i = 0; i < arr.length; i++) {
	if (arr[i][0] >= endTime) {
		endTime = arr[i][1];
		count++;
	}
}

console.log(count);
