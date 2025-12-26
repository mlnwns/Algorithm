function solution(N, stages) {
	const failCount = Array(N + 2).fill(0);

	for (const stage of stages) {
		failCount[stage]++;
	}

	let users = stages.length;

	const failRates = [];

	for (let i = 1; i <= N; i++) {
		const fail = failCount[i];
		const failRate = users === 0 ? 0 : fail / users;
		users -= fail;
		failRates.push({ stage: i, failRate });
	}

	failRates.sort((a, b) => {
		if (a.failRate === b.failRate) {
			return a.stage - b.stage;
		}
		return b.failRate - a.failRate;
	});

	return failRates.map((r) => r.stage);
}