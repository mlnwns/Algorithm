function solution(s) {
    return [...new Set(s)].filter(char => s.indexOf(char) === s.lastIndexOf(char)).sort().join("");
}