function solution(numbers) {
    const numbersSum = numbers.reduce((acc, cur) => acc + cur, 0);
    const answer = numbersSum / numbers.length;
    
    return answer;
}