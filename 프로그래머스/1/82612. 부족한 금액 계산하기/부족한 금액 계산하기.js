function solution(price, money, count) {
    let a = 0
    
    for(let i = 1; i <= count; i++) {
        a += i;    
    }
    
    if(a * price <= money) return 0;
    else return a * price - money;
}