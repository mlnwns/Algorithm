function lcm(n, m) {
    return (n * m) / gcd(n, m)
}

function gcd(n, m) {
    return m === 0 ?  n : gcd(m, n % m);
}

function solution(n, m) {
    const answer = [];
    answer.push(gcd(n, m));
    answer.push(lcm(n, m));
    
    return answer;
}