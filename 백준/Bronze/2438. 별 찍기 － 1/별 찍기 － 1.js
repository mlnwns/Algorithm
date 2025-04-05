let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let stars = "";  // 별을 모을 변수
for(let i = 0; i < n; i++) {
    for(let k = 0; k <= i; k++) {
        stars += "*";  // 별을 하나씩 추가
    }
		stars += "\n";   
}
console.log(stars);  // 별이 모인 문자열을 한 줄에 출력