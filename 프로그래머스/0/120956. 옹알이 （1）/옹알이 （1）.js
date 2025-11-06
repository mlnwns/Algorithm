function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
    
  return babbling.filter((item) => {
      for (const word of words) {
          item = item.replaceAll(word, " ");
      }
      return item.trim() === "";
  }).length
}