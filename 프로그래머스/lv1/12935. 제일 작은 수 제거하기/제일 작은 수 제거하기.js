/*
    # 요구사항
    deleteSmallestNum() 함수
        - 배열 원소 중 가장 작은 수만 제거한 배열 return 
            - 반복문 돌며 min 저장
            - min 값과 같을 때(filter함수) 해당 원소 삭제
        - if 배열 원소 개수가 1개일 경우 return -1
    
    
*/

function deleteSmallestNum(arr){
    
    var min=arr[0];
    
    arr.forEach((element)=>{
        if(element<min)
            min = element;
    });
    
    var answer = arr.filter(element => element != min);
    
      if(answer.length == 0)
        return [-1];
    
    return answer;
}



function solution(arr) {
    var answer = deleteSmallestNum(arr)
    return answer;
}