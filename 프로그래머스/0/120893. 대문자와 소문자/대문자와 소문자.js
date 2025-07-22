function solution(my_string) {
    const answer = [...my_string].map(string => {
        if(string.toLowerCase() === string) return string.toUpperCase();
        else return string.toLowerCase();
    }).join("");
    

    return answer;
}