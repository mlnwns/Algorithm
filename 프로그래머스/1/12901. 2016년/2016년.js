function solution(a, b) {
	const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const dates = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
	let total = 0;

	for (let i = 0; i < a - 1; i++) {
		total += days[i];
	}

	return dates[(total + b) % 7];
}