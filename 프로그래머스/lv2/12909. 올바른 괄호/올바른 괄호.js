/* 
    #요구사항
    - JS로 Stack 구현하여, 주어진 문자열이 올바른 괄호로 이루어져있는지 확인
    - stack 기능 담당 doStack 함수 구현
        - pop, push 함수 사용
    
    #구현
     #doStack(String) 함수 
        - 배열 : newArray, stack 선언
            - newArray : 문자열을 배열로 변환 
            - stack : 스택 기능을 하는 배열
        - isAvailable() 함수 먼저 체크
        - 문자열 s 쪼개서 배열 newS에 저장(스프레드 연산자)

        - stack이 비어있다면, 넣으려던 원소 무조건 push
            - 넣으려던 요소가 ')'라면 배열 stack의 마지막 요소가 '('인지 체크
                - if '('라면 stack에서 pop해서 (stack 내)원소 없애고
                - 아니라면 stack에 push
        - newArray 배열에서 원소 하나씩 꺼내서 스택 원리 적용하기(forEach 함수)

    
      #isAvailable(String)함수
        - 문자열이 올바르지 않은 괄호인지 우선 체크
        - if 첫번째 원소가 ')'로 시작하거나(charAt(0))
            OR '('의 개수와 ')'의 개수가 다르거나(정규식으로 count)
            OR 맨 마지막 원소가 '('라면 return false(charAt(String.length-1))
        
     #리팩토링
        - 간단한 구조로 바꿀 수 있는지
        - 변수명, 함수명을 직관적이게 바꿀 수 있는지
        - 함수를 간단히 줄일 수 있는지
    

*/

function doStack(s){
    
//     - isAvailable() 함수 먼저 체크    
    if(!isAvailable(s)) return false; 
    
//     - 배열 : newArray, stack 선언
//         - newArray : 문자열을 배열로 변환 
//         - stack : 스택 기능을 하는 배열
    var newArray = [];
    var stack = [];
//     - 문자열 s 쪼개서 배열 newArray 저장(스프레드 연산자)
    newArray = [...s];       
//     - newArray 배열에서 원소 하나씩 꺼내서 스택 원리 적용하기(forEach 함수)
//         - 경우1. 넣으려던 요소가 '('라면 무조건 stack에 push
//         - 경우2. 넣으려던 요소가 ')'라면 stack에서 pop(어차피 stack엔 '('만 들어있음)
    newArray.forEach((element)=>{
        // 경우1
        if(element == '(' ) 
            stack.push(element);
        // 경우2
        if(element == ')' ) 
            stack.pop();
    });

    
    if(stack.length == 0)
        return true; // 올바른 괄호
    else
        return false;
    
}

function isAvailable(s){
    // 각 괄호 개수 count
    // - 괄호 전체 개수를 정확하게 세기 위해서는 g 플래그를 사용해야 함
    // - null을 반환할 경우를 대비하여 [] 넣음
    const countLeftBracket = (s.match(/\(/g) || []).length;
    const countRightBracket = (s.match(/\)/g) || []).length;
    
    // 올바르지 않은 괄호일 경우
    if(s.charAt(0)!='(' || s.charAt(s.length-1) != ')' ||
      countLeftBracket != countRightBracket)
        return false;
    
    return true;
}

function solution(s){
    const answer =  doStack(s);
    return answer; // true || false
    
}