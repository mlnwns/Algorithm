const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

let N = Number(input[0]);

let flag = false;
let count = 0;

while (N >= 0) {
	if (N === 0 || N % 5 === 0) {
		count += parseInt(N / 5);
		console.log(count);
		flag = true;
		break;
	}
	N -= 3;
	count++;
}

if (!flag) console.log(-1);
