const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const N = input[0]; // B진법 수 저장
const B = parseInt(input[1],10); // 진법 저장

// N을 B진법에서 10진법으로 변환
const decimalValue = parseInt(N,B); 

console.log(decimalValue); // 결과 출력