function solution(s) {
    
    let answer = 0;
    const arr = s.split(" ");
    
    arr.map((a, index) => {
        if(a === 'Z') answer -= Number(arr[index-1]);
        else answer += Number(a);
    });
    
    return answer;
}