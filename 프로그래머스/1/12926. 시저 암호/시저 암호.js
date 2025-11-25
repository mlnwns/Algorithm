function solution(s, n) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === " ") {
      result += " ";
      continue;
    }

    const code = s.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      const newCode = ((code - 65 + n) % 26) + 65;
      result += String.fromCharCode(newCode);
    }
    else if (code >= 97 && code <= 122) {
      const newCode = ((code - 97 + n) % 26) + 97;
      result += String.fromCharCode(newCode);
    }
  }

  return result;
}
