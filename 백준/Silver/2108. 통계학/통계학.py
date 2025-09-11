import sys

input = sys.stdin.readline
N = int(input())
A = [int(input()) for _ in range(N)]
A.sort()

# HALF_UP 반올림 (음수도 절대값 .5는 올림)
def round_half_up(x: float) -> int:
    if x >= 0:
        return int(x + 0.5)
    else:
        return int(x - 0.5)

# 1) 평균
mean = round_half_up(sum(A) / N)

# 2) 중앙값
median = A[N // 2]  # N은 홀수

# 3) 최빈값 (정렬된 배열을 1패스로 빈도 세며 동률이면 두 번째로 작은 값)
max_freq = 1
cur = 1
modes = []
for i in range(1, N):
    if A[i] == A[i - 1]:
        cur += 1
    else:
        if cur > max_freq:
            max_freq = cur
            modes = [A[i - 1]]
        elif cur == max_freq:
            modes.append(A[i - 1])
        cur = 1
# 마지막 값 처리
if cur > max_freq:
    max_freq = cur
    modes = [A[-1]]
elif cur == max_freq:
    modes.append(A[-1])

mode = modes[0] if len(modes) == 1 else sorted(modes)[1]

# 4) 범위
rng = A[-1] - A[0]

print(mean)
print(median)
print(mode)
print(rng)
