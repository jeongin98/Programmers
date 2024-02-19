n = int(input())
N = 3 # 세 번째로 큰 수

arr = []

for i in range(n): # 0부터 n-1 까지
    arr.append(list(map(int,input().split())))
    arr[i].sort(reverse = True)
    print(arr[i][N-1]) # N번째로 큰 수