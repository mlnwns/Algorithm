const mos = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

const alphabet = [
  "a","b","c","d","e","f","g","h","i","j",
  "k","l","m","n","o","p","q","r","s","t",
  "u","v","w","x","y","z"
];

function solution(letter) {
  const letterWords = letter.split(" ");
  const answer = [];
  for (let i = 0; i < letterWords.length; i++) {
    answer.push(alphabet[mos.indexOf(letterWords[i])]);
  }

  return answer.join("");
}