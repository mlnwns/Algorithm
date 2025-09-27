function solution(dots) {
  const [x1, x2, x3, x4] = [dots[0][0], dots[1][0], dots[2][0], dots[3][0]];
  const [y1, y2, y3, y4] = [dots[0][1], dots[1][1], dots[2][1], dots[3][1]];

  const xDiff = (x1 - x2 + (x1 - x3) + (x1 - x4)) / 2;
  const yDiff = (y1 - y2 + (y1 - y3) + (y1 - y4)) / 2;

  return Math.abs(xDiff * yDiff);
}