function solution(my_string, letter) {
    return [...my_string].filter(string => string !== letter).join('');
}