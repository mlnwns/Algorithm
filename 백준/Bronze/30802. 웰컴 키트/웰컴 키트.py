N = int(input())
sizes = list(map(int, input().split()))
T, P = map(int, input().split())

total = 0
for i in range(len(sizes)):
    total += (sizes[i] // T) + 1
    if sizes[i] % T == 0:
        total -= 1
print(total)

print(N//P, end=" ")
print(N%P)