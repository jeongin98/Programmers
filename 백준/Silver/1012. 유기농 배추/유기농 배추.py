import sys
from collections import deque

input = sys.stdin.readline

T = int(input().strip())
dirs = [(1,0), (-1,0), (0,1), (0,-1)]

for _ in range(T):
    M, N, K = map(int, input().split())  # M: 가로(열), N: 세로(행)
    grid = [[0]*M for _ in range(N)]
    for _ in range(K):
        x, y = map(int, input().split())
        grid[y][x] = 1

    def bfs(sr, sc):
        q = deque([(sr, sc)])
        grid[sr][sc] = 0  # 방문 처리(지우기)
        while q:
            r, c = q.popleft()
            for dc, dr in dirs:  # (x증가, y증가) 순으로 저장했지만 아래서 (c+dc, r+dr)로 사용
                nc, nr = c + dc, r + dr
                if 0 <= nr < N and 0 <= nc < M and grid[nr][nc] == 1:
                    grid[nr][nc] = 0
                    q.append((nr, nc))

    worms = 0
    for r in range(N):
        for c in range(M):
            if grid[r][c] == 1:
                bfs(r, c)
                worms += 1
    print(worms)
