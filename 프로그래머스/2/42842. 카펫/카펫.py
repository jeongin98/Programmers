def solution(b, y):
    n = b + y
    candidates = []

    # 1. 전체 칸 수(n)의 약수쌍 (A, B)을 찾는다.
    for i in range(1, int(n**0.5) + 1):
        if n % i == 0:
            A, B = n // i, i
            candidates.append((A, B))

    # 2. (A - 2) * (B - 2) = y 를 만족하는 쌍을 찾는다.
    for A, B in candidates:
        if (A - 2) * (B - 2) == y:
            return [A, B] if A >= B else [B, A]

    return []  # 안전장치