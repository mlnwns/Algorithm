function toMinutes(time) {
	const hour = Math.floor(time / 100);
	const minute = time % 100;
	return hour * 60 + minute;
}

function solution(schedules, timelogs, startday) {
	let count = 0;

	for (let i = 0; i < schedules.length; i++) {
		const limit = toMinutes(schedules[i]) + 10;
		const logs = timelogs[i];
		let isSuccess = true;

		for (let j = 0; j < 7; j++) {
			const day = ((startday + j - 1) % 7) + 1;

			if (day >= 1 && day <= 5) {
				if (toMinutes(logs[j]) > limit) {
					isSuccess = false;
					break;
				}
			}
		}

		if (isSuccess) count++;
	}

	return count;
}