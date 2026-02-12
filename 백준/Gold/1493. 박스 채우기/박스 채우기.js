const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

const [L, W, H] = input[0].split(" ").map(Number);
const N = Number(input[1]);

const cubes = [];

for (let i = 2; i < 2 + N; i++) {
	cubes.push(input[i].split(" ").map(Number));
}

cubes.sort((a, b) => b[0] - a[0]);

let totalUsed = 0;
let filled = 0;

for (let i = 0; i < N; i++) {
	const [k, count] = cubes[i];
	const size = 2 ** k;

	let capacity =
		Math.floor(L / size) * Math.floor(W / size) * Math.floor(H / size);

	capacity -= filled;

	const use = Math.min(count, capacity);

	totalUsed += use;
	filled += use;

	filled *= 8;
}

const volume = L * W * H;

if (filled / 8 === volume) {
	console.log(totalUsed);
} else {
	console.log(-1);
}
