function gcd(a, b) {
	return b === 0 ? a : gcd(b, a % b);
}

function lcm(n, m) {
	return (n * m) / gcd(n, m);
}

function solution(arr) {
	let answer = 1;

	for (let i = 0; i < arr.length; i++) {
		answer = lcm(answer, arr[i]);
	}

	return answer;
}