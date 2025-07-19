function solution(box, n) {
    let answer = 1;
    
    [0, 1, 2].forEach(index => answer *= Math.trunc(box[index] / n)); 
    
    return answer;
}