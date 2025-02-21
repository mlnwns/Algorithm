T = int(input())

for _ in range(T):
    C = list(input())
    result = 0
    count = 0
    for i in C:
        if i == "O":
            count += 1
            result += count
        elif i == "X":
            count = 0
    print(result)