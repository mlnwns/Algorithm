function solution(k, tangerine) {
  const countMap = {};

  for (const size of tangerine) {
    countMap[size] = (countMap[size] || 0) + 1;
  }

  const counts = Object.values(countMap).sort((a, b) => b - a);

  let sum = 0;
  let answer = 0;

  for (const cnt of counts) {
    sum += cnt;
    answer++;

    if (sum >= k) break;
  }

  return answer;
}