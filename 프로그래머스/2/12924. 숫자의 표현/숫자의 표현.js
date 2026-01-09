function solution(n) {
    let answer = 1;
    
    for (let start = 1; start <= Math.floor(n / 2); start++) {
        let sum = 0;

		for (let i = start; i <= n; i++) {
			sum += i;
			if (sum === n) {
				answer++;
			} else if (sum > n) break;
		}
	}

	return answer;
}