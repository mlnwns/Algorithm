function isSameObject(a, b) {
  const ka = Object.keys(a);
  const kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  for (const k of ka) {
    if (a[k] !== b[k]) return false;
  }
  return true;
}

function solution(spell, dic) {
  const target = {};
  let answer = 2;

  for (const ch of spell) {
    target[ch] = (target[ch] || 0) + 1;
  }

  for (const word of dic) {
    const counts = {};
    for (const str of word) {
      counts[str] = (counts[str] || 0) + 1;
    }
    if (isSameObject(target, counts)) answer = 1;
  }

  return answer;
}
