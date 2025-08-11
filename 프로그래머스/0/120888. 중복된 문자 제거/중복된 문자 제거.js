function solution(my_string) {
  const answer = new Set(my_string);
  return Array.from(answer).join("");
}