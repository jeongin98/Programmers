# [정수 n → 리스트] 변환 방법 :
# 정수 → 문자열로 변환 → 리스트 컴프리헨션으로 각 문자로 쪼개기
def solution(n):
    # answer = [int(digit) for digit in str(n) ] # 리스트 컴프리헨션
    # answer.reverse() # reverse()는 원본을 뒤집고 None을 반환함
    # return answer
    
    return list(map(int, reversed(str(n)))) # 다른 방법2

