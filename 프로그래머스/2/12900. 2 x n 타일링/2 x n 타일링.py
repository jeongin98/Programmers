# d[1] = 1
# d[2] = 2
# d[n] = (d[n-2] + 2) + (d[n-1] + 1)

def solution(n):
    MOD = 1000000007
    # 초기화
    d = [0] * (n+1)
    
    d[1] = 1
    d[2] = 2
    
    for i in range(3, n+1):
        d[i] = (d[i-2] + d[i-1]) % MOD
    
    # 점화식
    answer = d[n]
    return answer