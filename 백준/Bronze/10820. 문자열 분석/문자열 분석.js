const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

input.forEach((line) => {
  if (line === '') return; // 빈 줄은 무시
  let lower = 0, upper = 0, digit = 0, space = 0;

  for (const char of line) {
    if (char >= 'a' && char <= 'z') lower++;
    else if (char >= 'A' && char <= 'Z') upper++;
    else if (char >= '0' && char <= '9') digit++;
    else if (char === ' ') space++;
  }

  console.log(`${lower} ${upper} ${digit} ${space}`);
});
