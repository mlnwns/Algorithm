function solution(keyinput, board) {
  const answer = [0, 0];

  const x_limit = Math.trunc(board[0] / 2);
  const y_limit = Math.trunc(board[1] / 2);

  for (key of keyinput) {
    switch (key) {
      case "left":
        if (answer[0] > -x_limit) answer[0]--;
        break;
      case "right":
        if (answer[0] < x_limit) answer[0]++;
        break;
      case "up":
        if (answer[1] < y_limit) answer[1]++;
        break;
      case "down":
        if (answer[1] > -y_limit) answer[1]--;
    }
  }

  return answer;
}
