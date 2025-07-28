function solution(numbers, direction) {
    const answer = [];
    
    if (direction === "right") {
        answer[0] = numbers[numbers.length - 1];    
        for (let i = 1; i < numbers.length; i++ ) {
            answer[i] = numbers[i - 1];
        }
    }
    
    if (direction === "left") {
        answer[numbers.length - 1] = numbers[0];    
        for (let i = 0; i < numbers.length - 1; i++ ) {
            answer[i] = numbers[i + 1];
        }
    }
    
    return answer;
}