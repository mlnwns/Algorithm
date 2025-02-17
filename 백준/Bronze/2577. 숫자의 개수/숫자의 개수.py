A = int(input())
B = int(input())
C = int(input())

result = str(A*B*C)
numbers = list(result)

for i in range(10):
    print(numbers.count(str(i)))
