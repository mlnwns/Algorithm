function solution(rsp) {
    const answer = [];
    
    [...rsp].forEach(item => {
        if(item === "2") answer.push("0");
        else if(item === "0") answer.push("5");
        else answer.push("2");
    })
    
    return answer.join("");
}