function solution(babbling) {
	const sounds = ["aya", "ye", "woo", "ma"];
	let answer = 0;

	for (const word of babbling) {
		let index = 0;
		let prev = "";

		while (index < word.length) {
			let matched = false;

			for (const sound of sounds) {
				if (word.startsWith(sound, index) && sound !== prev) {
					index += sound.length;
					prev = sound;
					matched = true;
					break;
				}
			}

			if (!matched) break;
		}

		if (index === word.length) {
			answer++;
		}
	}

	return answer;
}