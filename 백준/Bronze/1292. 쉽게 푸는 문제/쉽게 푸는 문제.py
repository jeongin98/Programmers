# 효율적인 코드로 변경

A,B = map(int, input().split())

arr = []
num = 1

while len(arr) < B + 1:
    for _ in range(num):
        arr.append(num)
    num += 1

# sum = 0
# for i in range(n-1,m):
#    sum += arr[i]
# print(sum)

print(sum(arr[A - 1:B])) # 한 줄로 범위 선택 + sum 가능
