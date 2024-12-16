const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const N =parseInt(input[0],10); // 10진법 수 저장
const B = parseInt(input[1],10); // B진법 저장

// N을 10진법에서 B진법으로 변환
const result = N.toString(B).toUpperCase(); //기본적으로 소문자로 출력되므로, toUpperCase()를 사용해 대문자로 변환.

console.log(result); // 결과 출력