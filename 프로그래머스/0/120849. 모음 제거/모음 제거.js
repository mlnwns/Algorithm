function solution(my_string) {
    const answer = [];
    const vowels = ['a', 'e', 'i', 'o', 'u']
    
    
    for(const string of my_string){
        
            if(vowels.includes(string)) continue;
            answer.push(string);    
    }
    
    
    
    return answer.join('');
}