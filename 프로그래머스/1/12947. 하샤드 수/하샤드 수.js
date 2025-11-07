function solution(x) {
    return x % String(x).split("").reduce((acc, cur) => Number(acc) + Number(cur)) === 0 ? true : false;
}