const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const N = parseInt(input[0]); // 명령의 수
const commands = input.slice(1); // 명령어들
const queue = [];
let result = ""; // 결과를 저장할 문자열

for (let command of commands) {
  if (command.startsWith("push")) {
    // push 명령 처리
    const value = parseInt(command.split(" ")[1]);
    queue.push(value);
  } else if (command === "pop") {
    // pop 명령 처리
    result += queue.length > 0 ? queue.shift() + "\n" : "-1\n";
  } else if (command === "size") {
    // size 명령 처리
    result += queue.length + "\n";
  } else if (command === "empty") {
    // empty 명령 처리
    result += queue.length === 0 ? "1\n" : "0\n";
  } else if (command === "front") {
    // front 명령 처리
    result += queue.length > 0 ? queue[0] + "\n" : "-1\n";
  } else if (command === "back") {
    // back 명령 처리
    result += queue.length > 0 ? queue[queue.length - 1] + "\n" : "-1\n";
  }
}

console.log(result.trim()); // 최종 출력
