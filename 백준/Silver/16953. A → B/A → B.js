const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

let [A, B] = input[0].split(" ").map(Number);

let count = 0;

while (B > A) {
	if (B % 2 === 0) {
		B /= 2;
		count++;
	} else if (B % 10 === 1) {
		B = Math.floor(B / 10);
		count++;
	} else {
		break;
	}
}

if (B === A) {
	console.log(count + 1);
} else {
	console.log(-1);
}
