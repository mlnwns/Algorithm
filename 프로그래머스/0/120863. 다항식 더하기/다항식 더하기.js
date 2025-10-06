function solution(polynomial) {
  let arr = polynomial.split(' + ');
  let xSum = 0;
  let numSum = 0;
  
  for (let term of arr) {
    if (term.includes('x')) {
      let coef = term === 'x' ? 1 : Number(term.replace('x', ''));
      xSum += coef;
    } else {
      numSum += Number(term);
    }
  }

  if (xSum && numSum) return `${xSum === 1 ? '' : xSum}x + ${numSum}`;
  if (xSum) return `${xSum === 1 ? '' : xSum}x`;
  return `${numSum}`;
}
