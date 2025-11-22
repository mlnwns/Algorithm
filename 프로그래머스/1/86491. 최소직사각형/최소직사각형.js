function solution(sizes) {
  const sortedSizes = sizes.map((size) => {
    return size.sort((a, b) => b - a);
  });

  let xMax = 0;
  let yMax = 0;

  sortedSizes.forEach((size) => {
    if (xMax < size[0]) xMax = size[0];
    if (yMax < size[1]) yMax = size[1];
  });

  return xMax * yMax;
}