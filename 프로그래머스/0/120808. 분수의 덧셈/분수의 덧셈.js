function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    let denom = denom1 * denom2;
    let numer = denom1 * numer2 + denom2 * numer1;
    
    const gcdNum = gcd(denom, numer);
    
    const answer = [numer/gcdNum, denom/gcdNum];
    return answer;
}
