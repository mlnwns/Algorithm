function solution(X, Y) {
	const xMap = {};
	const yMap = {};

	for (const n of X) xMap[n] = (xMap[n] || 0) + 1;
	for (const n of Y) yMap[n] = (yMap[n] || 0) + 1;

	const result = [];

	for (let i = 9; i >= 0; i--) {
		const num = String(i);

		if (xMap[num] && yMap[num]) {
			const count = Math.min(xMap[num], yMap[num]);
			result.push(num.repeat(count));
		}
	}

	if (result.length === 0) return "-1";

	const answer = result.join("");

	if (answer[0] === "0") return "0";

	return answer;
}