function solution(today, terms, privacies) {
	const answer = [];
	const termMap = {};

	const toDays = (date) => {
		const [year, month, day] = date.split(".").map(Number);
		return year * 12 * 28 + month * 28 + day;
	};

	const todayDays = toDays(today);

	for (const term of terms) {
		const [type, month] = term.split(" ");
		termMap[type] = Number(month);
	}

	privacies.forEach((privacy, i) => {
		const [date, type] = privacy.split(" ");
		const expire = toDays(date) + termMap[type] * 28 - 1;

		if (expire < todayDays) {
			answer.push(i + 1);
		}
	});

	return answer;
}