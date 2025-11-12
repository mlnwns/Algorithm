function solution(arr) {
    const removedArr = arr.filter((num) => num !== (Math.min(...arr)));
    
    return removedArr.length === 0 ? [-1] : removedArr;
}