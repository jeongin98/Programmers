N,k = map(int,input().split())
arr = []
for i in range(1,N+1):
    if N % i == 0:
        arr.append(i) 
        
        
if k > len(arr):
    print(0)
else:
    print(arr[k-1])