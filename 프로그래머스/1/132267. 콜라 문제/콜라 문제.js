function solution(a, b, n) {
    let temp = 0;
    
    while(n >= a){
        temp += (Math.floor(n / a) * b);
        
        n = (Math.floor(n / a) *b) + (n % a);
    }

    return temp;
}