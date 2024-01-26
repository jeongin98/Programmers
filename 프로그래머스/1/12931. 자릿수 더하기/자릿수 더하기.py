def solution(n):
    answer = 0

    while(n != 0):
        answer += n%10
        n = n//10
    
    return answer


## 방법1 - 정수 몫, 나머지 연산자(문제 풀이)

## 방법2 - iterable 객체 형태인 str 변환 후, int 형으로 변환 후 자릿수 합하기
#  for i in str(n):
#   answer += int(i)
