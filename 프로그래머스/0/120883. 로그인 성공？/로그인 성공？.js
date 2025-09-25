function solution(id_pw, db) {
  let answer = "";
  answer = db.some(([dbId, dbPw]) => dbId === id_pw[0] && dbPw === id_pw[1])
    ? "login"
    : db.some((el) => el[0] === id_pw[0])
    ? "wrong pw"
    : "fail";

  return answer;
}