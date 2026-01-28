function solution(clothes) {
  const map = {};

  for (const [name, type] of clothes) {
    map[type] = (map[type] || 0) + 1;
  }

  let answer = 1;

  for (const type in map) {
    answer *= (map[type] + 1);
  }

  return answer - 1;
}