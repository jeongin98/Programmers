def solution(n):
    answer = [int(digit) for digit in str(n) ]
    answer.reverse() # reverse()는 원본을 뒤집고 None을 반환함
    return answer