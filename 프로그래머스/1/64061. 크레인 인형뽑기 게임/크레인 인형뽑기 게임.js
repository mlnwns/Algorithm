function solution(board, moves) {
	const stack = [];
	let result = 0;

	for (const move of moves) {
		const col = move - 1;

		for (let row = 0; row < board.length; row++) {
			if (board[row][col] !== 0) {
				stack.push(board[row][col]);
				board[row][col] = 0;

				if (
					stack.length >= 2 &&
					stack[stack.length - 1] === stack[stack.length - 2]
				) {
					stack.pop();
					stack.pop();
					result += 2;
				}

				break;
			}
		}
	}

	return result;
}