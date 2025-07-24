function solution(num, k) {
    const result = num.toString().split('').indexOf(k.toString());
    if(result === -1 ) return result;
    else return result + 1;
}