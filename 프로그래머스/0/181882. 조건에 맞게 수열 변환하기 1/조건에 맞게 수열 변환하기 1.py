def solution(arr):
    answer = []
    for i in arr:
        if 50 <= i and i % 2 == 0:
            answer.append(i / 2)
        elif 50 > i and i % 2 == 1:
            answer.append(i * 2)
        else:
            answer.append(i)
    return answer
# 50 <= n and 짝수 : n / 2
# 50 > n and 홀수 : n * 2