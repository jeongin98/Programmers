def solution(num_list):
    odd_s = []
    even_s = []

    for x in num_list:
        if x % 2:
            odd_s.append(str(x))
        else:
            even_s.append(str(x))

    odd_num = int("".join(odd_s)) if odd_s else 0
    even_num = int("".join(even_s)) if even_s else 0
    return odd_num + even_num
