function reArrange(n){
    // 정수를 문자열로 변환
    var newString = n.toString();
    console.log(newString);
    // 문자열을 배열로 변환
    var reArray = newString.split('');
    // 배열을 크기 순서대로 재정렬
    reArray.sort();
    // 오름차순을 reverse하기
    reArray.reverse();
    
    return Number(reArray.join(''));
}

function solution(n) {
    
    return reArrange(n);
}