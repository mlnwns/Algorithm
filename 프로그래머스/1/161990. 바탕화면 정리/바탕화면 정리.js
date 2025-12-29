function solution(wallpaper) {
	const fileMap = [];

	for (let i = 0; i < wallpaper.length; i++) {
		for (let j = 0; j < wallpaper[i].length; j++) {
			if (wallpaper[i][j] === "#") {
				fileMap.push([i, j]);
			}
		}
	}

	const rows = fileMap.map(([i]) => i);
	const cols = fileMap.map(([, j]) => j);

	const topRow = Math.min(...rows);
	const leftCol = Math.min(...cols);
	const bottomRow = Math.max(...rows) + 1;
	const rightCol = Math.max(...cols) + 1;

	return [topRow, leftCol, bottomRow, rightCol];
}