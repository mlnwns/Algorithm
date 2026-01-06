function solution(friends, gifts) {
  const n = friends.length;

  const indexMap = new Map();
  friends.forEach((name, idx) => {
    indexMap.set(name, idx);
  });

  const giftCount = Array.from({ length: n }, () =>
    Array(n).fill(0)
  );

  const giftScore = Array(n).fill(0);

  gifts.forEach(record => {
    const [from, to] = record.split(" ");
    const fromIdx = indexMap.get(from);
    const toIdx = indexMap.get(to);

    giftCount[fromIdx][toIdx] += 1;
    giftScore[fromIdx] += 1;
    giftScore[toIdx] -= 1;
  });

  const nextGift = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const iToJ = giftCount[i][j];
      const jToI = giftCount[j][i];

      if (iToJ > jToI) {
        nextGift[i]++;
      } else if (jToI > iToJ) {
        nextGift[j]++;
      } else {
        if (giftScore[i] > giftScore[j]) {
          nextGift[i]++;
        } else if (giftScore[j] > giftScore[i]) {
          nextGift[j]++;
        }
      }
    }
  }

  return Math.max(...nextGift);
}