function solution(my_string) {
    num_string = [...my_string].filter(string => !isNaN(string));
    const answer = num_string.reduce((acc, cur) => acc + Number(cur), 0);
    
    return answer;
}