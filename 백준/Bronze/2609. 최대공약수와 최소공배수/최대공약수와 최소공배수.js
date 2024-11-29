const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
const [a, b] = input.map(Number);

// 최대공약수 구하기 (유클리드 호제법)
function gcd(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

// 최소공배수 구하기
function lcm(x, y) {
  return (x * y) / gcd(x, y);
}

const gcdResult = gcd(a, b);
const lcmResult = lcm(a, b);

console.log(gcdResult);
console.log(lcmResult);
