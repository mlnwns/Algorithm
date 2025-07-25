const PROGRAMMER_962 = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h",
  8: "i",
  9: "j",
  10: "k",
};

function solution(age) {
  const ageString = age.toString();
  const answer = [];

  for (let i = 0; i < ageString.length; i++) {
    answer.push(PROGRAMMER_962[ageString[i]]);
  }

  return answer.join("");
}