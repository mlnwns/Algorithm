function solution(array) {
    maxNum = Math.max(...array);
    
    return [maxNum, array.indexOf(maxNum)];
}