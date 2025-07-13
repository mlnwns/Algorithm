function primeNumberCount(number) {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        if (i * i === number) count++;
        else count += 2;
    }
  }

  return count;
}

function solution(number, limit, power) {
  var answer = 0;

  const primeNumbers = [];

  for (let i = 1; i <= number; i++) {
    if (primeNumberCount(i) > limit) {
      primeNumbers.push(power);
      continue;
    }
    primeNumbers.push(primeNumberCount(i));
  }

  answer = primeNumbers.reduce((acc, cur) => acc + cur, 0);
  return answer;
}