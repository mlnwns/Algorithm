function solution(slice, n) {
    let answer = Math.trunc(n / slice);
    if(n % slice !== 0) answer ++;
    
    return answer;
}