function solution(n, k) {
    const serviceCount = Math.trunc(n / 10);
    const answer = n * 12000 + k * 2000 - serviceCount * 2000;
    
    return answer;
}