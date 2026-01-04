function toMinutes(timeStr) {
	return timeStr
		.split(":")
		.map(Number)
		.reduce((acc, cur) => acc * 60 + cur);
}

function solution(video_len, pos, op_start, op_end, commands) {
	const op_start_minutes = toMinutes(op_start);
	const op_end_minutes = toMinutes(op_end);
	const video_len_minutes = toMinutes(video_len);
	let pos_minutes = toMinutes(pos);

	commands.forEach((command) => {
		if (pos_minutes >= op_start_minutes && pos_minutes < op_end_minutes) {
			pos_minutes = op_end_minutes;
		}

		if (command === "next") {
			if (pos_minutes + 10 <= video_len_minutes) {
				pos_minutes += 10;
			} else {
				pos_minutes = video_len_minutes;
			}

			if (pos_minutes >= op_start_minutes && pos_minutes < op_end_minutes) {
				pos_minutes = op_end_minutes;
			}
		}

		if (command === "prev") {
			if (pos_minutes - 10 >= 0) {
				pos_minutes -= 10;
			} else {
				pos_minutes = 0;
			}

			if (pos_minutes >= op_start_minutes && pos_minutes < op_end_minutes) {
				pos_minutes = op_end_minutes;
			}
		}
	});

	return `${String(Math.floor(pos_minutes / 60)).padStart(2, "0")}:${String(pos_minutes % 60).padStart(2, "0")}`;
}