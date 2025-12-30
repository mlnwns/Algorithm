function solution(park, routes) {
	let y, x;
	const xMax = park[0].length - 1;
	const yMax = park.length - 1;

	park.forEach((row, rowIndex) =>
		[...row].forEach((land, colIndex) => {
			if (land === "S") {
				y = rowIndex;
				x = colIndex;
			}
		}),
	);

	const move = {
		N: [-1, 0],
		S: [1, 0],
		W: [0, -1],
		E: [0, 1],
	};

	routes.forEach((route) => {
		let [direction, distance] = route.split(" ");
		distance = Number(distance);

		let canMove = true;

		for (let step = 1; step <= distance; step++) {
			const nextY = y + move[direction][0] * step;
			const nextX = x + move[direction][1] * step;

			if (nextY < 0 || nextY > yMax || nextX < 0 || nextX > xMax) {
				canMove = false;
				break;
			}

			if (park[nextY][nextX] === "X") {
				canMove = false;
				break;
			}
		}

		if (canMove) {
			y += move[direction][0] * distance;
			x += move[direction][1] * distance;
		}
	});

	return [y, x];
}