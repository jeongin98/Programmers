def solution(n):
    answer = 0
    i = 1
    cnt_n = count_ones_in_binary(n)
    cnt_bigger = count_ones_in_binary(n+i)
    
    # 2진수의 1의 개수 같으면 바로 stop
    while(cnt_n != cnt_bigger):
        i += 1
        cnt_bigger = count_ones_in_binary(n+i)
    return n+i

# 2진수의 1의 개수 세기
def count_ones_in_binary(n):
    binary_representation = bin(n)[2:]
    count_of_ones = binary_representation.count('1')
    return count_of_ones




