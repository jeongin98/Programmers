def hansu(N):
    count = 0
    for i in range(1, N+1):
        if i<100:
            count += 1
        else:
            N_list = list(map(int, str(i)))
            if N_list[1]-N_list[0] == N_list[2]-N_list[1]:
                count += 1
    return count

N = int(input())
print(hansu(N))
