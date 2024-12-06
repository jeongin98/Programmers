const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(input, 10); // N 입력
const dp = Array.from({ length: N + 1 }, () => [0n, 0n]); // dp 배열을 BigInt로 초기화

// 초기화
dp[1][0] = 0n; 
dp[1][1] = 1n; // 1

for (let i = 2; i <= N; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 1][1]; // 이전 자리의 0과 1로 끝나는 모든 경우
  dp[i][1] = dp[i - 1][0]; // 이전 자리의 0으로 끝나는 경우에만 1을 붙임
}

const result = dp[N][0] + dp[N][1];
console.log(result.toString()); // BigInt 출력