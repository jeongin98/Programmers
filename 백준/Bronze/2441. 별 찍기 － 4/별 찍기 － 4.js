const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input,10);

for(let i=0;i<N;i++){
    console.log(' '.repeat(i) + '*'.repeat(N-i));
}
    