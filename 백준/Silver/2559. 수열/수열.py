import sys

def main():
    input = sys.stdin.readline
    N, K = map(int, input().split())
    arr = list(map(int, input().split()))

    # 초기 윈도우 합
    window_sum = sum(arr[:K])
    max_sum = window_sum

    # 윈도우를 한 칸씩 오른쪽으로 밀며 갱신
    for i in range(K, N):
        window_sum += arr[i] - arr[i - K]
        if window_sum > max_sum:
            max_sum = window_sum

    print(max_sum)

if __name__ == "__main__":
    main()
