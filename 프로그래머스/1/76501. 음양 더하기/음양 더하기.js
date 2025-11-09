function solution(absolutes, signs) {
  let total = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      total += absolutes[i];
    } else {
      total += absolutes[i] * -1;
    }
  }

  return total;
}