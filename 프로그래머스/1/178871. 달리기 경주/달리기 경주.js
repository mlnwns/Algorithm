function solution(players, callings) {
	const indexMap = {};

	players.forEach((player, index) => {
		indexMap[player] = index;
	});

	callings.forEach((calling) => {
		const idx = indexMap[calling];     
		const frontPlayer = players[idx - 1];

		players[idx - 1] = calling;
		players[idx] = frontPlayer;

		indexMap[calling] = idx - 1;
		indexMap[frontPlayer] = idx;
	});

	return players;
}