const pos = {
	1: [0, 0],
	2: [1, 0],
	3: [2, 0],
	4: [0, 1],
	5: [1, 1],
	6: [2, 1],
	7: [0, 2],
	8: [1, 2],
	9: [2, 2],
	"*": [0, 3],
	0: [1, 3],
	"#": [2, 3],
};

function solution(numbers, hand) {
	let answer = "";
	let leftPos = pos["*"];
	let rightPos = pos["#"];

	for (const number of numbers) {
		if ([1, 4, 7].includes(number)) {
			answer += "L";
			leftPos = pos[number];
			continue;
		}

		if ([3, 6, 9].includes(number)) {
			answer += "R";
			rightPos = pos[number];
			continue;
		}

		const [x, y] = pos[number];
		const leftDist = Math.abs(x - leftPos[0]) + Math.abs(y - leftPos[1]);
		const rightDist = Math.abs(x - rightPos[0]) + Math.abs(y - rightPos[1]);

		if (leftDist < rightDist) {
			answer += "L";
			leftPos = pos[number];
		} else if (rightDist < leftDist) {
			answer += "R";
			rightPos = pos[number];
		} else {
			if (hand === "right") {
				answer += "R";
				rightPos = pos[number];
			} else if (hand === "left") {
				answer += "L";
				leftPos = pos[number];
			}
		}
	}

	return answer;
}
