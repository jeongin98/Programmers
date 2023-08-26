/*
    #요구사항
    n을 x로 나눈 나머지가 1이 되는지 확인하고, 그 중 min 값 찾기
    
    #구현
    - 반복문 돌리며 if n%x가 1인지 확인
        - 맞다면 min값과 비교
        
     #더 좋은 코드로 보완하기
     - min 변수를 쓰지 않고도 가능하다
     - for문에서 나머지가 1되는 숫자를 찾자마자 return 시키면 된다. 그 값이 min이다(반복문을 i은 작은 수부터 시작하니)
     
*/

function findMinDiv(n){
    
    var min = n;
    
    for(let i=2;i<n;i++){
        if(n%i == 1 && i<min)
            min = i;
        }
    
    return min;
}

function solution(n) {
   return findMinDiv(n);
}