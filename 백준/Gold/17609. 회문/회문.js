const input = require("node:fs")
	.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
	.toString()
	.trim()
	.split("\n");

function palindrome(x) {
	return x === x.split("").reverse().join("");
}

const T = Number(input[0]);

for (let t = 1; t <= T; t++) {
	const data = input[t];
	if (palindrome(data)) console.log(0);
	else {
		let found = false;
		const n = data.length;
		for (let i = 0; i < parseInt(n / 2); i++) {
			if (data[i] !== data[n - i - 1]) {
				if (palindrome(data.slice(0, i) + data.slice(i + 1, n))) found = true;
				if (palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n)))
					found = true;
				break;
			}
		}
		if (found) console.log(1);
		else console.log(2);
	}
}
