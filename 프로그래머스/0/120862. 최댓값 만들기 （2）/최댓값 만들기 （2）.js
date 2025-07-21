function solution(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    
    const a = sortedNumbers[sortedNumbers.length-1] * sortedNumbers[sortedNumbers.length-2];
    const b = sortedNumbers[0] * sortedNumbers[1];
    
    return Math.max(a, b);
}