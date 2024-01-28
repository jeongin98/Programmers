def solution(x, n):
    answer = []
    
    # 리스트 컴프리헨션을 통해 간결하게 표현 가능
    answer = [x + x*i for i in range(n)]
#     for i in range(n): 
#         answer.append(x * (i+1))
    
    return answer