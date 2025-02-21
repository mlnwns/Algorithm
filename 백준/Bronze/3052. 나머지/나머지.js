let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let data = input.map(Number);
let mySet = new Set(); //집합 객체 생성

for(let i=0; i<10; i++) {
	mySet.add(data[i] % 42); //42로 나눈 나머지를 집합의 원소로 삽입
}

console.log(mySet.size);