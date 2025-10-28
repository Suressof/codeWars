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

# 2D Vector Mapping





## Introduction
Imagine a function that maps a number from a given range, to another, desired one. If this is too vague - let me explain a little bit further: let's take an arbitrary number - 2 for instance - and map it with this function from range 0-5 to, let's say - 10-20. Our number lies in 2/5 of the way in it's original range, so in order to map it to the desired one we need to find a number that lies exactly in the same place, but in our new range. This number, in this case, is 14. You can visualize this as taking a 5cm piece of rubber, putting it next to the ruler, marking the dot on the second centimeter, then stretching the rubber between 10th and 20th centimeter and reading the value next to the dot.

## Task
The task in this kata is, unfortunately, a little bit more complex. We will take the same idea, but apply it to the 2-dimensional plane, so instead of single numbers, we will consider vectors with their x-position and y-position, instead of ranges, we will look at the circles with given centers and radii.

You need to write a function called map_vector (or mapVector) that takes 3 arguments - vector, circle1, circle2 and returns a tuple/array/slice of x, y positions of the mapped vector. All three arguments will be tuples (arrays), the first one with x, y positions of a base vector, the second and third with x, y positions of the center of a circle and it's radius. The base vector will always be within the first circle and you need to map it from the first circle to the second. The coordinates should be precise up to second decimal place.

## Examples
Let's take a look at a simple example:
```
vector = 5, 5
circle1 = 10, 20, 42
circle2 = -100, -42, 69
```
As we see, the vector's cartesian coordinates are x=5, y=5, first's circle's center is in x=10, y=20, it's radius is 42, and so on. Let's visualize it:

<img width="498" height="491" alt="image" src="https://github.com/user-attachments/assets/e495b192-40bd-4e78-bbb6-cc072b362bbe" />

The red dot is our given vector. After running our function we should get our new, mapped vector with coordinates x=-108.21, y=-66.64. Take a look at the light-blue dot here:

<img width="503" height="513" alt="image" src="https://github.com/user-attachments/assets/affdac71-9df5-4469-932e-d34b8ce654b9" />


So, to represent this with code:
```
mapVector([5, 5], [10, 20, 42], [-100, -42, 69]) === [-108.21, -66.64]
```
Two, very important things to notice here are:

The distance between a vector and a circle's center is scaled accordingly to the second circle's radius
The angle between the vector and the line x=c1.x is preserved (c1.x == first circle's center's x position)
It is also worth to mention, that when both circles' radii are equal, this is equivalent of just translating the vector by the distance between them, and when the circles are concentric this is roughly equivalent to the mapping function mentioned in the introduction.

## Notes
Although it is not really a problem, but for simplicity the given vector will always be contained within the first circle. The plane in random tests is a square with sides ranging between -400 to 400.

## Tip
It may not be necessary, but if you're stuck, think about the most iconic animal that pops to mind when thinking about the negative influence of the climate changes on our planet's habitat.

Enjoy, and don't hesitate to comment on any mistakes or problems with this kata.

## Solution
<img width="782" height="499" alt="image" src="https://github.com/user-attachments/assets/a82029a0-90b2-4479-affc-d9a1c83ea1f3" />

# Sum of positive
## Task
You get an array of numbers, return the sum of all of the positives ones.

## Example
```
[1, -4, 7, 12] => 1+7+12=20
```
## Note
If there is nothing to sum, the sum is default to 0.

## Solution
```
function positiveSum(arr) {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}
```
