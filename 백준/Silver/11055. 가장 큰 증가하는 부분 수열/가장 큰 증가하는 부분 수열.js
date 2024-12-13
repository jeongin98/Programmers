const fs = require('fs'); 
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n"); 

const N = parseInt(input[0]); // N 저장
const A = input[1].split(" ").map(Number); // 숫자 배열로 저장

const dp = Array(N).fill(0) // dp 초기화

for( let i = 0; i<N; i ++){
    dp[i] = A[i]; // dp[i]는 A[i]를 최소로 포함
	for(let j = 0; j<i ; j++){
	if(A[i] > A[j]) {
	dp[i] = Math.max(dp[i], dp[j] + A[i]);
		}
	}
}

console.log(Math.max(...dp));