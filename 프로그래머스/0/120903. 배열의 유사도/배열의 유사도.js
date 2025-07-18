function solution(s1, s2) {
  let answer = 0;

  for (const item of s1) {
    if (s2.includes(item)) answer++;
  }

  return answer;
}
