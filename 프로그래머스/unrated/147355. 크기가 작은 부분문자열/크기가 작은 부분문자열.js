/*
    # 기능구현
    - p 의 길이 저장
    - p의 길이만큼 t를 slice
    - slice한 문자열과 문자열 p를 숫자로 변환하여 비교(문자열 -> 숫자)
    - p보다 작거나 같을 경우 count
    - count 리턴
*/


function findCount(t, p){
    
    const length_p = p.length;
    let cntResult =0;
    let slicedStr = '';
    
    for(let i=0;i<=t.length-length_p;i++){
    slicedStr = t.slice(i,i+length_p ) // p의 길이만큼 slice(i부터 i+length_p 직전까지)
    if(Number(slicedStr) <= Number(p)) cntResult++;
    }
    
    return cntResult;
}

function solution(t, p) {
    return findCount(t,p);
}
