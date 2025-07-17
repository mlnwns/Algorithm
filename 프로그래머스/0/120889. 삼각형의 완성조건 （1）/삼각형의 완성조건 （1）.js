function solution(sides) {
  const sorted = sides.sort((a, b) => a - b);
  if (sorted[2] < sorted[0] + sorted[1]) return 1;
  return 2;
}