function solution(k, score) {
  const answer = [];

  for (let i = 1; i < score.length + 1; i++) {
    slicedScore = score.slice(0, i);
    answer.push(Math.min(...slicedScore.sort((a, b) => b - a).slice(0, k)));
  }

  return answer;
}