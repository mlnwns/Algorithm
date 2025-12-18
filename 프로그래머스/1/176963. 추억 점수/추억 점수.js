function solution(names, yearnings, photos) {
	const answer = [];

	photos.map((photo) => {
		let total = 0;

		photo.map((name) => {
			const indexOfName = names.indexOf(name);

			if (indexOfName !== -1) total += yearnings[indexOfName];
		});

		answer.push(total);
	});

	return answer;
}