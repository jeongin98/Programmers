def solution(k, ranges):
    # 1) 우박수열 생성
    y = [k]
    while y[-1] != 1:
        x = y[-1]
        y.append(x // 2 if x % 2 == 0 else x * 3 + 1)

    # 2) 인접 점 사이 면적(사다리꼴) 배열
    areas = []
    for i in range(len(y) - 1):
        areas.append((y[i] + y[i + 1]) / 2.0)

    # 3) 누적합 prefix (pref[i] = areas[0..i-1] 합)
    pref = [0.0]
    for a in areas:
        pref.append(pref[-1] + a)

    n = len(areas)  # 마지막 x 좌표 (수열 길이-1)

    # 4) 질의 처리: [a, b] → 실제 끝점은 n + b
    ans = []
    for a, b in ranges:
        end = n + b
        if a > end:
            ans.append(-1.0)
        else:
            ans.append(pref[end] - pref[a])
    return ans