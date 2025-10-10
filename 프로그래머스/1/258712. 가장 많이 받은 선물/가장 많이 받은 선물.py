def solution(friends, gifts):
    """
    friends: 친구 이름 문자열 리스트 (예: ["muzi", "ryan", "frodo", "neo"])
    gifts:   "보낸이 받은이" 형태의 문자열 리스트 (예: ["muzi frodo", "ryan muzi", ...])

    반환값: 다음 달에 가장 많이 선물을 받게 되는 사람의 '받은 선물 수'의 최댓값
    """

    # 1) 이름 -> 인덱스 매핑 (행/열 접근 편의)
    idx = {name: i for i, name in enumerate(friends)}
    n = len(friends)

    # 2) 이번 달 쌍별 주고받은 횟수 테이블 및 개인별 보낸/받은 합계
    #    count[i][j] = i가 j에게 보낸 횟수
    count = [[0] * n for _ in range(n)]
    sent = [0] * n   # i가 이번 달에 보낸 총 횟수
    recv = [0] * n   # i가 이번 달에 받은 총 횟수

    for line in gifts:
        a, b = line.split()     # "a b" 형식
        ai, bi = idx[a], idx[b]
        count[ai][bi] += 1
        sent[ai] += 1
        recv[bi] += 1

    # 3) 사람별 '선물 지수' = 보낸 수 - 받은 수
    gift_index = [sent[i] - recv[i] for i in range(n)]

    # 4) 다음 달에 받게 될 선물 수 계산
    next_received = [0] * n

    # 모든 서로 다른 쌍(i, j)을 한 번씩만 비교
    for i in range(n):
        for j in range(i + 1, n):
            a_to_b = count[i][j]
            b_to_a = count[j][i]

            if a_to_b > b_to_a:
                # i가 j에게 더 많이 줬으니, 다음 달에는 j가 i에게 1개를 줌
                # => j가 주고 i가 받으므로 i의 '다음 달 받은 수' +1
                next_received[i] += 1
            elif b_to_a > a_to_b:
                # j가 i에게 더 많이 줬으니, 다음 달에는 i가 j에게 1개를 줌
                next_received[j] += 1
            else:
                # 이번 달 서로 준 횟수가 같다면 '선물 지수' 비교
                if gift_index[i] > gift_index[j]:
                    next_received[i] += 1
                elif gift_index[j] > gift_index[i]:
                    next_received[j] += 1
                else:
                    # 선물 지수도 같으면 아무도 받지 않음
                    pass

    # 5) 다음 달 가장 많이 선물을 받는 사람의 개수 반환
    return max(next_received) if next_received else 0