const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

const T = Number(input[0]);

const fib = [1, 2];

while (true) {
	const next = fib[fib.length - 1] + fib[fib.length - 2];
	if (next > 1_000_000_000) break;
	fib.push(next);
}

const result = [];

for (let t = 1; t <= T; t++) {
	let n = Number(input[t]);
	const answer = [];

	for (let i = fib.length - 1; i >= 0; i--) {
		if (fib[i] <= n) {
			n -= fib[i];
			answer.push(fib[i]);
		}
	}

	result.push(answer.reverse().join(" "));
}

console.log(result.join("\n"));
