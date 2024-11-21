const fs = require("fs");

// 입력 처리
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const times = parseInt(input[0], 10); // 첫 줄: 명령 개수
const deque = []; // 덱 선언
const result = []; // 출력 결과를 저장할 배열

// 명령 처리
for (let i = 1; i <= times; i++) {
  const [command, value] = input[i].split(" ");
  switch (command) {
    case "push_front":
      deque.unshift(Number(value));
      break;
    case "push_back":
      deque.push(Number(value));
      break;
    case "pop_front":
      result.push(deque.length > 0 ? deque.shift() : -1); // 앞에서 제거 및 출력
      break;
    case "pop_back":
      result.push(deque.length > 0 ? deque.pop() : -1); // 뒤에서 제거 및 출력
      break;
    case "size":
      result.push(deque.length); // 크기 출력
      break;
    case "empty":
      result.push(deque.length === 0 ? 1 : 0); // 비어 있는지 확인
      break;
    case "front":
      result.push(deque.length > 0 ? deque[0] : -1); // 맨 앞 요소 출력
      break;
    case "back":
      result.push(deque.length > 0 ? deque[deque.length - 1] : -1); // 맨 뒤 요소 출력
      break;
  }
}

// 최종 출력
console.log(result.join("\n"));
