function solution(quiz) {
  const splitedQuiz = quiz.map((el) => el.split(" = "));
  const answer = splitedQuiz.map((el) => eval(el[0]) === Number(el[1]));

  return answer.map((el) => (el ? "O" : "X"));
}