function solution(hp) {
    let ants = 0;
    
    ants += Math.trunc(hp / 5);
    hp %= 5;
    ants += Math.trunc(hp / 3);
    hp %= 3;
    ants += hp;
    
    return ants;
}