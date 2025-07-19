function solution(my_string) {
    const number_list = [...my_string].filter(string => !Number.isNaN(Number(string)));
    return number_list.map(Number).sort((a, b) => a - b);
}