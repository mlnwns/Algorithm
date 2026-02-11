const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

let [N, K] = input[0].split(" ").map(Number);

let answer = 0;

for (let i = N; i > 0; i--) {
	if (parseInt(K / Number(input[i])) >= 1) {
		answer += parseInt(K / Number(input[i]));
		K %= input[i];
	}
}

console.log(answer);
