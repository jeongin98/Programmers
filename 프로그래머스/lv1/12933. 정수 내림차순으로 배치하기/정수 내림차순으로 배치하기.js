function reArrange(n){
    // 이 모든 과정을 한 줄로 정리 가능
     return Number(n.toString().split('').sort().reverse().join(''))
    
//     // 정수를 문자열로 변환
//     var newString = n.toString();
//     console.log(newString);
//     // 문자열을 배열로 변환
//     var reArray = newString.split('');
//     // 배열을 크기 순서대로 재정렬
//     reArray.sort();
//     // 오름차순을 reverse하기
//     reArray.reverse();
//     // 배열을 문자열로
//     newString = reArray.join('');
//     // 문자열을 정수로
//     return Number(newString);
}

function solution(n) {
    return reArrange(n);
}