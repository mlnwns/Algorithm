function solution(cipher, code) {
  const answer = [];
  [...cipher].map((string, index) => {
    if ((index + 1) % code === 0) answer.push(string);
  });

  return answer.join("");
}
