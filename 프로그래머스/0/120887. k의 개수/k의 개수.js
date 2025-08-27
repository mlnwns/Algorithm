function solution(i, j, k) {
  let answer = 0;

  for (i; i <= j; i++) {
    answer += i.toString().split(k).length - 1;
  }

  return answer;
}
