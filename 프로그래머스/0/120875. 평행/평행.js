function solution(dots) {
  const slope = (a, b) => (b[0] - a[0]) / (b[1] - a[1]);

  const pairs = [
    [
      [0, 1],
      [2, 3],
    ],
    [
      [0, 2],
      [1, 3],
    ],
    [
      [0, 3],
      [1, 2],
    ],
  ];

  for ([[j1, j2], [k1, k2]] of pairs) {
    if (slope(dots[j1], dots[j2]) === slope(dots[k1], dots[k2])) return 1;
  }

  return 0;
}