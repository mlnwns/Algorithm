function solution(k, m, score) {
	return score
		.slice()
		.sort((a, b) => b - a)
		.reduce((sum, value, index) => {
			if ((index + 1) % m === 0) {
				return sum + value * m;
			}
			return sum;
		}, 0);
}