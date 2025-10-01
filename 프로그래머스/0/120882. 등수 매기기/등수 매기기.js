function solution(scores) {
  const averages = scores.map(
    (score) => score.reduce((acc, cur) => acc + cur, 0) / score.length
  );

  const sorted = [...averages].sort((a, b) => b - a);

  const rankMap = {};
  let rank = 1;
  for (let i = 0; i < sorted.length; i++) {
    if (rankMap[sorted[i]] === undefined) {
      rankMap[sorted[i]] = rank;
    }
    rank++;
  }

  const answer = averages.map((avg) => rankMap[avg]);

  return answer;
}