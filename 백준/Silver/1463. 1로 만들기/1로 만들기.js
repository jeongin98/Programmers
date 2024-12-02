const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);
const dp = Array(N+1).fill(0);

// dp[N] = min(aN-1,aN/2,aN/3) + 1

for(let i=2;i<=N;i++){
    dp[i] = dp[i-1]+1;
    if(i % 3 === 0) dp[i] = Math.min(dp[i], dp[i/3]+1);
    if(i % 2 === 0) dp[i] = Math.min(dp[i], dp[i/2]+1);
}

console.log(dp[N]);