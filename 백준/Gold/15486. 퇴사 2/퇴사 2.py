import sys
input = sys.stdin.readline

N = int(input())
T = [0] * (N + 2)
P = [0] * (N + 2)
for i in range(1, N + 1):
    t, p = map(int, input().split())
    T[i], P[i] = t, p

dp = [0] * (N + 2)

for i in range(1, N + 1):
    # 전날까지의 최댓값을 오늘로 전파 (쉬는 선택)
    if dp[i] < dp[i - 1]:
        dp[i] = dp[i - 1]

    end = i + T[i]
    # 오늘 시작하는 상담을 할 수 있으면, 끝나는 날로 점프 갱신
    if end <= N + 1:
        if dp[end] < dp[i] + P[i]:
            dp[end] = dp[i] + P[i]

print(max(dp))
