def solution(n,a,b):
    answer = 0
    
    while True:
        # 한 줄만으로 a, b 둘 다 확인하는 방법 없나
        if a % 2 == 0: # 짝수
            a //= 2
        else:
            a = (a+1) // 2 # 홀수
            
        if b % 2 == 0: # 짝수
            b //= 2
        else:
            b = (b+1) // 2 # 홀수
            
        answer += 1
        
        if a == b :
            break;
            
        
    
    print(answer)
    return answer


# 짝수 : N //=  2 가 됨
# 홀수 : N+1 //= 2 가 됨

# 이 숫자가 같을 때
# 값 저장 후 return