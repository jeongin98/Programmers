/* 간단한 코드 */
// repeat(2.5) → repeat(2)로 취급
const solution = n => "수박".repeat(n/2+1).slice(0,n)



//function repeatStr(n){ 
//     // 문자열 변수 str
//     const first = '수';
//     const second = '박';
    
//     let str = "";
    
//     // while n이 3까지
//     for(let i=1;i<=n;i++){
//     // n이 홀수면 push first 문자
//     // n이 홀수면 push second 문자
//         if(i%2==1)
//             str+=first;
//         else
//             str+=second;
//         }
//      return str;
//     }
    
// function solution(n) {
//     return repeatStr(n);
// }