def solution(s):
    # sorted : 오름차순한 리스트 반환
    # join() : 리스트를 문자열로 합침
    sorted_list = sorted(s, reverse=True)
    answer = ''.join(sorted_list)
    return answer