function solution(numbers) {
  let arrays = Array.from({ length: 10 }, (_, i) => i);
  for (number of numbers) {
    arrays = arrays.filter((n) => n !== number);
  }

  return arrays.reduce((acc, cur) => acc + cur, 0);
}