def solution(n):
    answer = 0
    
    list_n = list(str(n))  # 문자열 변환 후 list 에 저장 # ['1', '1', '8', '3', '7', '2']
    list_n.sort(reverse=True) # 내림차순으로 정렬
    list_str = ''.join(list_n) # 문자열로 결합
    answer = int(list_str) # 정수로 변환
    
    return answer
