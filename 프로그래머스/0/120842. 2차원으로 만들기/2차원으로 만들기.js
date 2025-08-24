function solution(num_list, n) {
  const answer = [];
  let index = 0;

  while (index < num_list.length) {
    answer.push(num_list.slice(index, index + n));
    index += n;
  }
  return answer;
}