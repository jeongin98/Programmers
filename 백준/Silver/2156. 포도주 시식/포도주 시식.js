const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0], 10); // 포도주 잔의 개수
const wine = input.slice(1).map(Number); // 포도주의 양 배열

if (n === 1) {
    console.log(wine[0]);
    return;
}

// DP 테이블 초기화
const dp = Array(n).fill(0);

// 초기값 설정
dp[0] = wine[0];
dp[1] = wine[0] + wine[1];
dp[2] = Math.max(wine[0] + wine[1], wine[0] + wine[2], wine[1] + wine[2]);

// 점화식 적용
for (let i = 3; i < n; i++) {
    dp[i] = Math.max(
        dp[i - 1], // i번째 잔을 마시지 않음
        dp[i - 2] + wine[i], // i번째 잔을 마시고 i-1은 마시지 않음
        dp[i - 3] + wine[i - 1] + wine[i] // i번째, i-1번째 마시고 i-2는 마시지 않음
    );
}

console.log(dp[n - 1]);
