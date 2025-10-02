function solution(n) {
  let count = 0;
  let answer = 0;

  while (count < n) {
    answer++;
    if (answer % 3 === 0 || answer.toString().includes("3")) continue;
    count++;
  }

  return answer;
}