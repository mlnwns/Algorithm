function solution(s) {
    const num = s.split(" ").map(Number);
    return `${Math.min(...num)} ${Math.max(...num)}`;
}