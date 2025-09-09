import sys
from collections import deque

input = sys.stdin.readline

n = int(input())          # 컴퓨터 수
m = int(input())          # 간선 수
g = [[] for _ in range(n + 1)]
for _ in range(m):
    a, b = map(int, input().split())
    g[a].append(b)
    g[b].append(a)

visited = [False] * (n + 1)
q = deque([1])
visited[1] = True
infected = 0

while q:
    u = q.popleft()
    for v in g[u]:
        if not visited[v]:
            visited[v] = True
            infected += 1     # 1번을 제외한 새로 감염된 컴퓨터
            q.append(v)

print(infected)
