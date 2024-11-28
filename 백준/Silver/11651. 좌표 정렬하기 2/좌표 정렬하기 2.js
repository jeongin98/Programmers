const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [N, ...arr] = input.map((line) => line.split(" ").map(Number));

arr.sort((a,b) =>{
	if(a[1] === b[1]){
	return a[0] - b[0];
	}
	return a[1] - b[1]; 
});

const result = arr.map((data) => data.join(' ')).join('\n');
console.log(result);