function solution(participant, completion) {
	const playerMap = {};

	participant.forEach((player) => {
		if (!playerMap[player]) playerMap[player] = 1;
		else playerMap[player]++;
	});

	for (const player of completion) {
		playerMap[player]--;
	}

	return Object.keys(playerMap).find((player) => playerMap[player] !== 0);
}