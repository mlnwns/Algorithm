function solution(n, words) {
  const used = new Set();

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (used.has(word)) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    if (i > 0) {
      const prev = words[i - 1];
      if (prev[prev.length - 1] !== word[0]) {
        return [(i % n) + 1, Math.floor(i / n) + 1];
      }
    }

    used.add(word);
  }

  return [0, 0];
}