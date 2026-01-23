function solution(want, number, discount) {
	const wantMap = new Map();
	for (let i = 0; i < want.length; i++) {
		wantMap.set(want[i], number[i]);
	}

	const windowMap = new Map();
	let answer = 0;

	for (let i = 0; i < 10; i++) {
		windowMap.set(discount[i], (windowMap.get(discount[i]) || 0) + 1);
	}

	for (let i = 0; i <= discount.length - 10; i++) {
		let isValid = true;
		for (const [key, value] of wantMap) {
			if (windowMap.get(key) !== value) {
				isValid = false;
				break;
			}
		}

		if (isValid) answer++;

		const out = discount[i];
		windowMap.set(out, windowMap.get(out) - 1);
		if (windowMap.get(out) === 0) windowMap.delete(out);

		const next = discount[i + 10];
		if (next) {
			windowMap.set(next, (windowMap.get(next) || 0) + 1);
		}
	}

	return answer;
}