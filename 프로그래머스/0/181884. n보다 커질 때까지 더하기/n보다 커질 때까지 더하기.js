function solution(numbers, n) {
    let sum = 0;
    
    numbers.map((num) => {
        if ( sum <= n) sum += num;
    })
    
    return sum;
}