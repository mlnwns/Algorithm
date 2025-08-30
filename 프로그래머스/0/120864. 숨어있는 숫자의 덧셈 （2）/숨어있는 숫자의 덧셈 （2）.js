function solution(my_string) {
  let sum = 0;
  let temp = "";

  for (let c of my_string) {
    if (!isNaN(c)) {
      temp += c;
    } else {
        sum += Number(temp);
        temp = "";
    }
  }

  if (temp !== "") {
    sum += Number(temp);
  }

  return sum;
}