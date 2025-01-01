N = int(input())
stars = ""
for i in range(0, N):
    for j in range(0, i+1):
        stars += "*"
    stars += "\n"
print(stars)