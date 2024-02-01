def solution(numbers):
    sum = 0
    for item in range(1,10):
        if item not in numbers:
            sum += item
    return sum

# 다른 방법1 : set으로 숫자 제외 후 sum(numbers에 없는 숫자) 하는 방법
# 다른 방법2 : sum(range(1,10)) - sum(numbers)