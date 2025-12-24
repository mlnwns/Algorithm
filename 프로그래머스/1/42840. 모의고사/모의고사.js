function solution(answers) {
	let score1 = 0;
	let score2 = 0;
	let score3 = 0;

	const p1 = [1, 2, 3, 4, 5];
	const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
	const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

	answers.forEach((answer, i) => {
		if (answer === p1[i % p1.length]) score1++;
		if (answer === p2[i % p2.length]) score2++;
		if (answer === p3[i % p3.length]) score3++;
	});

	const maxScore = Math.max(score1, score2, score3);

	const answer = [];

	[score1, score2, score3].forEach((score, i) => {
		if (score === maxScore) answer.push(i + 1);
	});

	return answer.sort((a, b) => a - b);
}