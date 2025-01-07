def assign_rooms():
    T = int(input())

    for _ in range(T):
        H, W, N = map(int, input().split())

        floor = N % H
        room_line = (N // H) + 1

        if floor == 0:
            floor = H
            room_line -= 1

        print(floor * 100 + room_line)

assign_rooms()
