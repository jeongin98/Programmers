import sys

def solve():
    input = sys.stdin.readline
    n = int(input())
    meetings = []
    for _ in range(n):
        s, e = map(int, input().split())
        meetings.append((s, e))

    # end 기준 오름차순, end 같으면 start 오름차순
    meetings.sort(key=lambda x: (x[1], x[0]))

    count = 0
    last_end = 0
    for s, e in meetings:
        if s >= last_end:
            count += 1
            last_end = e

    print(count)

if __name__ == "__main__":
    solve()
