function solution(sides) {
    let max = Math.max(...sides);
    let min = Math.min(...sides);
                     
    return 2 * min - 1;
}