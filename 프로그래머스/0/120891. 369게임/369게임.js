function solution(order) {
  let count = 0;

  for (num of order.toString()) {
    if (["3", "6", "9"].includes(num)) count++;
  }

  return count;
}