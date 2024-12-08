const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

arr.sort((a,b) => {
	return a - b;
	}
)

console.log(arr[K-1]);