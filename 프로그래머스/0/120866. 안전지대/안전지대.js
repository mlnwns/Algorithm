function solution(board) {
    const n = board.length;

    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        if (board[y][x] === 1) { 
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              const ny = y + dy;
              const nx = x + dx;

              if (ny >= 0 && ny < n && nx >= 0 && nx < n) {
                if (board[ny][nx] === 0) board[ny][nx] = 2;
              }
            }
          }
        }
      }
    }

    let safeCount = 0;

    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        if (board[y][x] === 0) safeCount++;
      }
    }
    
    return safeCount;
}