function solution(lines) {
  const arr = new Array(201).fill(0); 

  for (const [start, end] of lines) {
    for (let i = start + 100; i < end + 100; i++) {
      arr[i] += 1;
    }
  }

  return arr.filter(x => x >= 2).length;
}
