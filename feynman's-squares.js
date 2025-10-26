function countSquares(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i * i;  // Add squares of size i×i
    }
    return total;
}

console.log("1 -->", countSquares(1));
console.log("2 -->", countSquares(2));
console.log("3 -->", countSquares(3));
