def solution(name, yearning, photo):
    score_arr = []
    score = 0
    
    # photo 배열이 끝날 때까지 반복
    # photo에서 배열 하나 꺼내기
    # photo에서 이름 하나씩 꺼내서 
    for names_arr in photo: # range()는 integer를 받아들이는 함수라, 리스트 photo는 range()사용 불가능
        for each_name in names_arr:
            try:
                idx = name.index(each_name)
                score += yearning[idx]
                # Do something with idx
            except ValueError:
                pass  # 'each_name'이 리스트 안에 없는 경우, 그냥 넘어가도록 처리
        score_arr.append(score)
        score = 0
    # name에서 몇 번째 idx인지 확인해서
    # yearning의 i번째 idx를 score에 누적
    # 누적한 score를 배열 score_arr에 push
    
    return score_arr