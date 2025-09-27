function solution(chicken) {
  let coupons = chicken;
  let answer = 0;

  while (coupons >= 10) {
    const free = Math.trunc(coupons / 10);
    answer += free;
    coupons = (coupons % 10) + free;
  }

  return answer;
}