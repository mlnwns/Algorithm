function solution(bandage, health, attacks) {
	const maxHealth = health;
	let curHealth = health;
	let combo = 0;
	let attackIdx = 0;

	const lastTime = attacks[attacks.length - 1][0];

	for (let time = 1; time <= lastTime; time++) {
		if (attackIdx < attacks.length && time === attacks[attackIdx][0]) {
			curHealth -= attacks[attackIdx][1];
			combo = 0;
			attackIdx++;

			if (curHealth <= 0) return -1;
		}
		else {
			combo++;
			curHealth += bandage[1];

			if (combo === bandage[0]) {
				curHealth += bandage[2];
				combo = 0;
			}

			if (curHealth > maxHealth) {
				curHealth = maxHealth;
			}
		}
	}

	return curHealth;
}