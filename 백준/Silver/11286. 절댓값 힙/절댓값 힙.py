import sys
import heapq

input = sys.stdin.readline

n = int(input())
hq = []
result_lines = [] # 결과는 문자열 형식으로 저장

for _ in range(n):
    x = int(input())
    if x == 0:
        if hq:
            # 튜플로 저장했으므로 [1]만 규칙대로 pop
            result_lines.append(str(heapq.heappop(hq)[1]))
        else:
            result_lines.append("0")
    else:
        heapq.heappush(hq, (abs(x), x)) # 튜플(절댓값, 실제값)으로 저장

sys.stdout.write("\n".join(result_lines))