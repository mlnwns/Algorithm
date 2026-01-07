function solution(s) {
	const words = s.split(" ");
	const result = words.map(word => {
		if (word === "") return "";
		return word[0].toUpperCase() + word.slice(1).toLowerCase();
	});
	return result.join(" ");
}