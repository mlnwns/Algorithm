function solution(n) {
  let answer = 0;

  const stringNums = String(n).split("");
  stringNums.forEach((stringNum) => {
    answer += Number(stringNum);
  });

  return answer;
}
