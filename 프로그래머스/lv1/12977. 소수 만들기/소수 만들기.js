// 3중 for문을 피하는 방법이 있을까?
// 아이디어 20분 + 코딩 10분 + 리팩토링 15분
function solution(nums) {
    // 배열 중 3개를 더한다 - sumThreeDigits() 호출
        // 소수가 될 수 있는지 체크한다
        // 소수 개수를 반환값으로 받아오기
    const count = sumThreeDigits(nums);
    // return 소수 개수
    console.log(count);
    return count;
}

/* 배열 3개 더하는 함수 sumThreeDigits()
    1) one, two, three 변수
    2) 인덱스 범위 
        - one : 0~개수-3 
        - two : one+1 ~ 개수-2
        - three : two+1 ~ 개수-1
    3) 반복문 돌 때 마다 바로 sum 구해서 소수 가능성 체크
        - 소수 체크 함수 checkPrimeNumber() 호출
        - 소수라면 count+1(return true)
        - return 이 false라면 반복문 건너뛰기(소수가 x)
    4) 소수 개수 변수인 count return
    1 2 3
    1 2 4
    1 2 5
    2 3 4
    2 3 5
    3 4 5
*/
function sumThreeDigits(nums){
    const length = nums.length;
    
    var one,two,three,sum;
    var count=0;
    
    for(let i=0;i<=length-3;i++){
        one = nums[i];
        for(let j=i+1;j<=length-2;j++){
            two = nums[j];
            for(let k=j+1;k<=length-1;k++){
                three = nums[k];
                sum = one+two+three; // var sum
                if(checkPrimeNumber(sum)==true) 
                    count+=1;
            }
        }
    }
    
    return count;
}


/* 소수 체크 함수 checkPrimeNumber()
    1) 넘어온 매개변수 n이 소수가 되는지 체크
    2) 1과 n 이외 숫자로 나눴을 때 나머지가 0인지 체크
        - 반복문 돌며 나눠보기
        - if 2~n-1 으로 나눴을 때 0이 나오는지 체크
            - 0 나오면 retun false
*/
function checkPrimeNumber(sum){
    
    for(let div=2;div<=sum-1;div++){
        if(sum%div==0)
            return false;
        }
    
    return true;
}
    