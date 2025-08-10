function solution(names) {
    const answer = [];
    names.map((name, index) => {
        if(index % 5 === 0) answer.push(name);
    })
    
    return answer;
}