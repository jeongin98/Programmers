
/*

    ### 요구사항
    - 문자열 s에서 Min, Max 값을 찾아서 문자열로 만들기
    
    ### 함수 기능 
    // 문자열 -> 배열
    // 공백 기준으로 하나씩 자르기(split)
    // 자른걸 배열에 저장
    // 배열 요소 하나씩 꺼내서 Min, Max 찾기
    // Min과 Max 문자열로 붙이기(연산자+)
    
*/

function findMinMax(str){
    const words = str.split(' ');
    
    const min = Math.min(...words);
    const max = Math.max(...words);

    let stringMinMax = '';
    
   return(min+' '+max);
}


function solution(s) {
    return findMinMax(s);
}
