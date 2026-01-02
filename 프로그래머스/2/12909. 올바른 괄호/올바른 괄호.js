function solution(s) {
	const stack = [];

	if (s.startsWith(")")) return false;

	for (const bracket of s) {
		if (bracket === "(") {
			stack.push("(");
		} else {
			stack.pop();
		}
	}

	return stack.length === 0;
}