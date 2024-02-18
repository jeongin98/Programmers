a, b = map(int,input().split())

# 최대공약수
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

# 최소공배수
def lcm(a, b):
    return (a * b) // gcd(a, b)

print(gcd(a, b)) # 최대공약수
print(lcm(a, b)) # 최소공배수
