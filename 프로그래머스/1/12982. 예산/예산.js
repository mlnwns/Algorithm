function solution(d, budget) {
  let total = 0;
  d.sort((a, b) => a - b)
    
  for (let i = 0; i < d.length; i++) {
    total += d[i];
    if (total > budget) return i;
    else if (total === budget) return i + 1;
  }
    
    return d.length;
}