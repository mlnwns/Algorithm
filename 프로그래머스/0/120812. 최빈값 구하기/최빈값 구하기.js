function solution(array) {
  const obj = {};

  array.forEach((el) => {
    if (obj[el]) {
      obj[el]++;
    } else {
      obj[el] = 1;
    }
  });

  const counts = Object.values(obj);
  const maxCount = Math.max(...counts);
  const maxCountFreq = counts.filter((v) => v === maxCount).length;

  return maxCountFreq > 1
    ? -1
    : Number(Object.keys(obj).find((key) => obj[key] === maxCount));
}