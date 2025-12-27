function solution(keymap, targets) {
	const minPressMap = {};

	for (const key of keymap) {
		for (let i = 0; i < key.length; i++) {
			const char = key[i];
			const press = i + 1;

			if (!minPressMap[char] || minPressMap[char] > press) {
				minPressMap[char] = press;
			}
		}
	}

	return targets.map((target) => {
		let sum = 0;

		for (const char of target) {
			if (!minPressMap[char]) return -1;
			sum += minPressMap[char];
		}

		return sum;
	});
}