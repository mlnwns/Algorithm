function solution(s) {
  const words = [];
  const answer = [];

  s.split("").forEach((word, i) => {
    if (words.lastIndexOf(word) === -1) {
      answer.push(words.lastIndexOf(word));
    } else {
      answer.push(i - words.lastIndexOf(word));
    }

    words.push(word);
  });

  return answer;
}