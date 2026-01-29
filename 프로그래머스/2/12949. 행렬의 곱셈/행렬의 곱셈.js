function solution(arr1, arr2) {
  return arr1.map(row =>
    arr2[0].map((_, colIdx) =>
      row.reduce((sum, value, idx) => sum + value * arr2[idx][colIdx], 0)
    )
  );
}