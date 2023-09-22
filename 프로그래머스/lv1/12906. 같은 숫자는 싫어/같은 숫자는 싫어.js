/*
    ## 기능구현(방법2)
    - arr의 맨 앞에서부터 하나씩 빼오기
    - 배열 answer에 넣기 
        - answer 넣되, 처음 수는 그냥 push
        - answer의 맨 뒤 요소와 같을 수일 경우, 넣지 않는다
        - 맨 뒤 요소와 다를 경우, 그냥 push
        
    ## 더 간단한 방법    
    - 단 한 줄이면 됨
        return arr.filter((val,index) => val != arr[index+1]);
    - 옆에있는 숫자와 다른 요소만 가져오기
        - [1,1,3,3,0,1,1] 중 앞의 1,1는 옆에 똑같은 애 있으니 가져오지 x
*/

// 중복 숫자 제거
// 방법1. 클래스 Set를 쓴다
// const noDuplicate = new Set(arr);
// return [...noDuplicate]; // 배열로 변환 후 리턴

// 방법2. 스택을 활용한다
// arr.forEach(element => {
//        if(element != newArr[newArr.length - 1])
//            newArr.push(element);
//     });


function deleteDuplicate(arr){
    
    let newArr= [] ;
    newArr.push(arr.shift()) // shift : 배열 맨 앞 요소 제거 후, 제거된 요소 반환 
    
    arr.forEach(element => {
       if(element != newArr[newArr.length - 1]) // newArr의 맨 뒤 요소와 다를 때 push
           newArr.push(element);
    });
    
    return newArr;
}


function solution(arr)
{
    const answer = deleteDuplicate(arr);
    return answer;
}

