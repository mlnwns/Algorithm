function solution(n) {
    const isSquare = Math.sqrt(n) === Math.trunc(Math.sqrt(n));
    
    return isSquare ? (Math.sqrt(n)+1)*(Math.sqrt(n)+1) : -1;
}