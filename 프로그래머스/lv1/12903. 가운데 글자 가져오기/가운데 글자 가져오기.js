/*
    ## 요구사항
    - 문자열의 가운데 글자 반환
    
    ## 기능 목록
    - 문자열의 길이가 홀/짝일 때 사용할 함수 달라짐
        - 홀수일 경우 charAt 함수
        - 짝수일 경우 slice() 함수
    
*/

function getMiddleString(s){
    const middleIndex = Math.floor(s.length/2);
    let middleString='';

    if(s.length%2 == 1)
        middleString = s.charAt(middleIndex);
    else
        middleString = s.slice(middleIndex-1,middleIndex+1);
   
    return middleString;
}



function solution(s) {
    return getMiddleString(s);
}