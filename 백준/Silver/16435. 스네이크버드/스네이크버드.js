const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 첫 번째 줄: N과 L
const [N, L] = input[0].split(' ').map(Number);

// 두 번째 줄: 과일 높이 배열
const heights = input[1].split(' ').map(Number);

// 과일 높이 정렬
heights.sort((a, b) => a - b);

// 스네이크버드가 과일을 먹는 반복문
let snakeLength = L;

for (const height of heights) {
  if (height <= snakeLength) {
    snakeLength += 1;
  } else {
    break;
  }
}

console.log(snakeLength);
