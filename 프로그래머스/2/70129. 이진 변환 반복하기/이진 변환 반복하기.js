function solution(s) {
  const result = [0, 0];

  while (s !== "1") {
    let zeroCount = 0;

    for (const char of s) {
      if (char === "0") {
        zeroCount++;
      }
    }

    result[1] += zeroCount;

    const oneCount = s.length - zeroCount;

    s = oneCount.toString(2);

    result[0]++;
  }

  return result;
}