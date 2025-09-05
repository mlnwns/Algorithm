function solution(my_str, n) {
    const answer = [];
            

    for(let i = 0; i < my_str.length / n; i++){
        answer.push(my_str.slice(i*n, i*n + n));
    }
    
    return answer;
}