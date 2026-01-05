function solution(n, w, num) {
	const getCoords = (number) => {
		const r = Math.floor((number - 1) / w);
		const mod = (number - 1) % w;
		const c = r % 2 === 0 ? mod : w - 1 - mod;

		return [r, c];
	};

	const [targetRow, targetCol] = getCoords(num);

	const maxRow = Math.floor((n - 1) / w);

	let answer = 0;

	for (let r = targetRow; r <= maxRow; r++) {
		let currentBoxAtCol;
		if (r % 2 === 0) {
			currentBoxAtCol = r * w + targetCol + 1;
		} else {
			currentBoxAtCol = r * w + (w - targetCol);
		}

		if (currentBoxAtCol <= n) {
			answer++;
		}
	}

	return answer;
}