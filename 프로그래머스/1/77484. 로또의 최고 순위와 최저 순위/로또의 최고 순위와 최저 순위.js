function solution(lottos, win_nums) {
	const removedCount = lottos.filter((lotto) => lotto === 0).length;

	const rank = {
		6: 1,
		5: 2,
		4: 3,
		3: 4,
		2: 5,
		1: 6,
		0: 6,
	};

	const matchedCount = win_nums.filter((num) => {
		return lottos.includes(num);
	}).length;

	return [rank[matchedCount + removedCount], rank[matchedCount]];
}
