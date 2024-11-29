const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = parseInt(input,10);
const MOD = 10007;
const dp = Array.from(N+1).fill(0);

dp[1] = 1;
dp[2] = 3;

for(let i=3;i<=N;i++){
dp[i] = (dp[i-1] + 2*dp[i-2]) % MOD;
}

console.log(dp[N]);