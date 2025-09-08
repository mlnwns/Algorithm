function solution(numbers) {
    const alphabetNumbers = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    let result = [];
    
    for(let i =0; i < alphabetNumbers.length; i++){
        numbers = numbers.replaceAll(alphabetNumbers[i], i);
    }
    
    return Number(numbers);
}