function solution(elements) {
	const n = elements.length;
	const sums = new Set();

	const extended = elements.concat(elements);

	for (let len = 1; len <= n; len++) {
		for (let start = 0; start < n; start++) {
			let sum = 0;

			for (let i = start; i < start + len; i++) {
				sum += extended[i];
			}

			sums.add(sum);
		}
	}

	return sums.size;
}