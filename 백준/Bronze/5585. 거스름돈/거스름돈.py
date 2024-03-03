price = int(input())
coins = [500,100,50,10,5,1]

exchange = 1000 - price
count = 0

for coin in coins:
    count += exchange // coin
    exchange %= coin

print(count)