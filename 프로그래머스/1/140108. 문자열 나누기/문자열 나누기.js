function solution(s) {
	let answer = 0;
	let x = s[0];
	let same = 0;
	let diff = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] === x) same++;
		else diff++;

		if (same === diff) {
			answer++;
			x = s[i + 1];
			same = 0;
			diff = 0;
		}
	}

	if (same !== 0) answer++;

	return answer;
}