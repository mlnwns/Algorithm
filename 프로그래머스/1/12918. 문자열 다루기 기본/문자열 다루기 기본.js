function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;

  for (const ch of s) {
    const n = Number(ch);
    if (Number.isNaN(n)) return false;
  }

  return true;
}