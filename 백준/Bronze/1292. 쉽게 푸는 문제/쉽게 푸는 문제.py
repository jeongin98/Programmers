n,m = map(int, input().split())

arr = []
num = 1

for i in range(1,m+1):
    for j in range(i):
        arr.append(num)
    num += 1

sum = 0
for i in range(n-1,m):
    sum += arr[i]
   
print(sum)