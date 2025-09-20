function solution(n) {
    return Array.from(String(n)).reduce((acc, cur) => acc + Number(cur), 0);
}