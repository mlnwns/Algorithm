function solution(n, m, section) {
	let count = 0;
	let paintedEnd = 0;

	for (const pos of section) {
		if (pos > paintedEnd) {
			count++;
			paintedEnd = pos + m - 1;
		}
	}

	return count;
}