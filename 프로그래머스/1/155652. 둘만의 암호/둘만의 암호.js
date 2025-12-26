function solution(s, skip, index) {
	const skipSet = new Set();
	const answer = [];

	for (let i = 0; i < skip.length; i++) {
		skipSet.add(skip.charCodeAt(i));
	}

	for (let i = 0; i < s.length; i++) {
		let current = s.charCodeAt(i);
		let moved = 0;

		while (moved < index) {
			current++;

			if (current > 122) current = 97;

			if (!skipSet.has(current)) {
				moved++;
			}
		}

		answer.push(current);
	}

	return String.fromCharCode(...answer);
}