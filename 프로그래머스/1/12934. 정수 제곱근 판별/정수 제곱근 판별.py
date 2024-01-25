import math

def solution(n):
    result = math.isqrt(n)
    
    if pow(result,2) == n:
        return pow(result+1,2)
    else:
        return -1