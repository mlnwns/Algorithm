function primeCount(n) {
    let count = 0;
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) count++;
    }   
    
    if(count >= 3) return true;
    return false;
}

function solution(n) {
    let answer = 0;
    
    for(let i = 1; i <= n; i++){
        if(primeCount(i)) answer++;
    }
    
    return answer;
}