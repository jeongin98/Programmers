const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0], 10); // N 입력
const arr = input.slice(1); // 명령어 저장 (slice로 배열 복사)

let result = ""; // 결과를 저장할 문자열
const stack = []; // 스택 배열

for (let data of arr) {
    if (data.startsWith("push")) {
        const value = data.split(' ')[1]; // push X의 X 값 가져오기
        stack[stack.length] = value; // push 구현
    } else if (data.startsWith("pop")) {
            result += stack.length === 0 ? "-1\n" : `${stack.splice(-1, 1)[0]}\n`; // pop 구현: 마지막 요소 제거 및 반환
    } else if (data.startsWith("size")) {
        result += `${stack.length}\n`; // 스택 크기
    } else if (data.startsWith("empty")) {
        result += stack.length === 0 ? "1\n" : "0\n"; // 스택 비어 있는지 확인
    } else if (data.startsWith("top")) {
        result += stack.length === 0 ? "-1\n" : `${stack[stack.length - 1]}\n`; // 마지막 값 반환
    }
}

console.log(result); // 결과 출력
