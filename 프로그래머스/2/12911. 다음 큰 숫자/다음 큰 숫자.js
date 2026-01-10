function solution(n) {
    const countOnes = (num) => num.toString(2).replace(/0/g, "").length;

    const oneCount = countOnes(n);
    let answer = n + 1;

    while (countOnes(answer) !== oneCount) {
        answer++;
    }

    return answer;
}