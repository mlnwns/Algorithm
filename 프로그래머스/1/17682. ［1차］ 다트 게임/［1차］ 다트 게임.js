function solution(dartResult) {
  const scores = [];
  let i = 0;

  while (i < dartResult.length) {

    let score;
    if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
      score = 10;
      i += 2;
    } else {
      score = Number(dartResult[i]);
      i += 1;
    }

    const bonus = dartResult[i];
    if (bonus === 'S') score **= 1;
    if (bonus === 'D') score **= 2;
    if (bonus === 'T') score **= 3;
    i++;

    if (dartResult[i] === '*' || dartResult[i] === '#') {
      if (dartResult[i] === '*') {
        score *= 2;
        if (scores.length > 0) {
          scores[scores.length - 1] *= 2;
        }
      }
      if (dartResult[i] === '#') {
        score *= -1;
      }
      i++;
    }

    scores.push(score);
  }

  return scores.reduce((a, b) => a + b, 0);
}