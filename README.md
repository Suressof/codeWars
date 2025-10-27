# Feynman's squares
Richard Phillips Feynman was a well-known American physicist and a recipient of the Nobel Prize in Physics. He worked in theoretical physics and pioneered the field of quantum computing.

Recently, an old farmer found some papers and notes that are believed to have belonged to Feynman. Among notes about mesons and electromagnetism, there was a napkin where he wrote a simple puzzle: "how many different squares are there in a grid of NxN squares?".

For example, when N=2, the answer is 5: the 2x2 square itself, plus the four 1x1 squares in its corners:

![Alt text](https://github.com/user-attachments/assets/952f5460-f75d-4f19-a56c-8232be36312d)

## Task
Complete the function that solves Feynman's question in general. The input to your function will always be a positive integer.

## Examples
```
1  -->   1
2  -->   5
3  -->  14
```

(Adapted from the Sphere Online Judge problem SAMER08F by Diego Satoba)

---

## Solution

Mathematical Formula
I recognize this pattern! The number of squares in an N×N grid is given by the formula:

<img width="443" height="88" alt="image" src="https://github.com/user-attachments/assets/4840905a-0bc2-441d-ac0e-346b01af7374" />

Let's verify:

```
- N=1: 1*2*3/6 = 6/6 = 1 ✓
- N=2: 2*3*5/6 = 30/6 = 5 ✓
- N=3: 3*4*7/6 = 84/6 = 14 ✓
- N=4: 4*5*9/6 = 180/6 = 30 ✓
```
```
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
```

