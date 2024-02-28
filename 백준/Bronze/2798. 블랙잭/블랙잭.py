n,m = map(int,input().split())
cards = list(map(int, input().split())) # 맞나?

min_sum = sum(cards[:3])
ans_i,ans_j,ans_k = -1, -1, -1

for i in range(0,n-2):
    for j in range(i+1,n-1):
        for k in range(j+1,n):
            sum = cards[i] + cards[j] + cards[k]
            if sum <= m and min_sum > (m-sum):
                min_sum = m - sum
                ans_i, ans_j, ans_k = i, j, k

print(cards[ans_i]+cards[ans_j]+cards[ans_k])