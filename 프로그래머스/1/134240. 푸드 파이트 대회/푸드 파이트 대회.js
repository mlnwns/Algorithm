function solution(food) {
    let left = "";

    for (let i = 1; i < food.length; i++) {
        left += String(i).repeat(Math.floor(food[i] / 2));
    }

    const center = "0";

    const right = [...left].reverse().join("");

    return left + center + right;
}