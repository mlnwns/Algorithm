function solution(array, n) {
    const differences = array.map(num => Math.abs(n - num));
    const minNumbers = array.filter((num, index) => differences[index] === Math.min(...differences))
    
    return Math.min(...minNumbers);
}