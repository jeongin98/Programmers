matrix = []

for _ in range(9):
    matrix.append(list(map(int,input().split())))
                  
max_i,max_j = 0, 0             
max = 0
for i in range(9):
    for j in range(9):
         if max < matrix[i][j]:
                max = matrix[i][j]
                max_i, max_j = i, j
              

            
            
print(max)
print(max_i + 1, max_j + 1,end='')