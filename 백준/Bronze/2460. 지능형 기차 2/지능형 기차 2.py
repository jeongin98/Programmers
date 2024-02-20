n = 10 # 플랫폼 횟수
get_out = [] # 내리는 사람
get_in = [] # 타는 사람

for i in range(n):
    o, i = map(int, input().split())
    get_out.append(o)
    get_in.append(i)
    
riding = 0 # 타고있는 사람
max_riding = 0 # 최대 인원

for i in range(n):
    riding += get_in[i] - get_out[i] 
    if max_riding < riding:
        max_riding = riding
        
print(max_riding)
