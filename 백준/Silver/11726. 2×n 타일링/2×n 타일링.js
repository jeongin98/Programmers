const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input, 10); // n 받기
// 점화식 ai = an-1 + an-2

const MOD = 10007;
const dp = Array(n+1).fill(0);
dp[1] = 1;
dp[2] = 2;

for(let i = 3; i<=n;i++){
dp[i] = (dp[i-1] + dp[i-2])%MOD;
}

console.log(dp[n]);