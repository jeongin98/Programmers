const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const N = Number(input[0]); // N 입력
const person = input.slice(1).map((line) => line.split(" ")); // "21 Junkyu" "21 Dohyun" "20 Sunyoung" => [21,Junkyu]

person.sort((a,b) => {
	return a[0] - b[0]
});

const result = person.map((data) => data.join(" ")). join("\n");
console.log(result);