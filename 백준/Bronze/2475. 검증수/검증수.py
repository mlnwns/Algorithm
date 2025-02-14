year = map(int, input().split(" "))

result = 0

for i in year:
    result += i ** 2

print(result%10)
