function solution(n, lost, reserve) {
	const overlap = lost.filter((l) => reserve.includes(l));

	lost = lost.filter((l) => !overlap.includes(l));
	reserve = reserve.filter((r) => !overlap.includes(r));

	lost.sort((a, b) => a - b);
	reserve.sort((a, b) => a - b);

	let answer = n - lost.length;

	for (const l of lost) {
		const index = reserve.findIndex((r) => r === l - 1 || r === l + 1);

		if (index !== -1) {
			answer++;
			reserve.splice(index, 1);
		}
	}

	return answer;
}