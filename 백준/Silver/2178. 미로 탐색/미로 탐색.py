import sys
from collections import deque

def solve():
    input = sys.stdin.readline
    n, m = map(int, input().split())
    grid = [list(map(int, list(input().strip()))) for _ in range(n)]

    # 거리 배열: 0 = 미방문, 시작점은 1칸으로 시작
    dist = [[0] * m for _ in range(n)]
    q = deque()
    q.append((0, 0))
    dist[0][0] = 1  # 시작 칸도 카운트

    # 상, 하, 좌, 우
    dirs = [(-1, 0), (1, 0), (0, -1), (0, 1)]

    while q:
        x, y = q.popleft()
        if x == n - 1 and y == m - 1:
            print(dist[x][y])
            return
        for dx, dy in dirs:
            nx, ny = x + dx, y + dy
            # 범위 내 & 길(1) & 미방문
            if 0 <= nx < n and 0 <= ny < m and grid[nx][ny] == 1 and dist[nx][ny] == 0:
                dist[nx][ny] = dist[x][y] + 1
                q.append((nx, ny))

if __name__ == "__main__":
    solve()