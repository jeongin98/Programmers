# 첫 번째 도전 실패

n, m = map(int,input().split())
coins = [int(input()) for _ in range(n)] # 동전 입력 받기
d = [0 for _ in range(m+1)] # m+1 크기만큼 0으로 초기화
d[0] = 1

for coin in coins:
    for i in range(coin,m+1):
        d[i] += d[i - coin]

print(d[m])


