def solution(s):
    answer = True
    
    # p 혹은 P개수 cnt
    count_p = s.lower().count('p')
    # y 혹은 Y개수 cnt
    count_y = s.lower().count('y')
    
    
    # if p 개수 == y 개수 : return True
    # else p개수 != y개수 : return False
    if count_p == count_y:
        return True
    else:
        return False
    
    
    

    return True