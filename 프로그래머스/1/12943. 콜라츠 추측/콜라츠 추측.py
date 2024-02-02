def solution(num):
    if num == 1:
        return 0
    
    cnt = 0
    
    while(num != 1) :
        if num % 2 == 0 : 
            num /= 2 
            cnt += 1
        else : 
            num = num * 3 + 1 
            cnt += 1
        
        if cnt == 500 :
            return -1

    return cnt

# 테스트 코드
print(solution(6))