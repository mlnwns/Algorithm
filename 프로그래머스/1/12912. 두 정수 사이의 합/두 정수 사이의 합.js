function solution(a, b) {
    if (a === b) return a;
    
    let sum = 0;
    
    if(a > b) {
        for(let i = b; i <= a; i++) {
            sum += i;
        }
    }
    
    if(b > a) {
        for(let i = a; i <= b; i++) {
            sum += i;
        }
    }
    
    return sum;
}