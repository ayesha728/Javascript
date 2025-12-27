

/* ---------- Part A: Variables & Data Types ---------- */

// Problem 1
let firstName = "Ayesha";
let age = 33;
let isStudent = true;
let favoriteColor = "Black";
let numberOfSiblings = 0;

// Problem 2
console.log(typeof firstName);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof favoriteColor);
console.log(typeof numberOfSiblings);

// Problem 3
let score;
console.log(score);
console.log(typeof score);

let winner = null;
console.log(winner);
console.log(typeof winner);

// Problem 4
let fName = "Ayesha";
let lName = "Ahmed";
let fullName = fName + " " + lName;
console.log(fullName);

// Problem 5
let a = "5";
let b = 3;
let result = a + b;
console.log(result);
console.log(typeof result);


/* ---------- Part B: Arithmetic Operations ---------- */

// Problem 6
let num1 = 45;
let num2 = 12;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// Problem 7
let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log("25°C is equal to " + fahrenheit + "°F");

// Problem 8
let radius = 7;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;

console.log("Circumference:", circumference.toFixed(2));
console.log("Area:", area.toFixed(2));

// Problem 9
let subtotal = (3 * 45) + (2 * 15) + 850;
let discount = subtotal * 0.10;
let finalTotal = subtotal - discount;

console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Final Total:", finalTotal);

// Problem 10
let number = 17;
let evenOrOdd = (number % 2 === 0) ? "Even" : "Odd";
console.log(evenOrOdd);


/* ---------- Part C: Operator Precedence ---------- */

// Problem 11 & 12
let result1 = 10 + 5 * 2;
let result2 = (10 + 5) * 2;
let result3 = 20 / 4 + 3 * 2;
let result4 = 2 ** 3 + 5;
let result5 = (8 + 2) / 5 * 3;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);

// Problem 13
let finalResult = ((15 + 5) * 3 - 10) / 4;
console.log(finalResult);


/* ---------- Part D: Assignment Operators ---------- */

// Problem 14
let balance = 5000;

balance += 15000;
console.log(balance);

balance -= 8000;
console.log(balance);

balance += 5000;
console.log(balance);

balance -= 3000;
console.log(balance);

// Problem 15
let amount = 10000;

amount *= 1.10;
console.log("Year 1:", amount);

amount *= 1.10;
console.log("Year 2:", amount);

amount *= 1.10;
console.log("Year 3:", amount);


/* ---------- Part E: Increment & Decrement ---------- */

// Problem 16
let x = 10;
let y = x++;
console.log("x:", x, "y:", y);

let p = 10;
let q = ++p;
console.log("p:", p, "q:", q);

// Problem 17
let countdown = 10;
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);
console.log(countdown--);

// Problem 18
let num = 5;
let newNum = num++;
console.log("After post increment:", num, newNum);

newNum = ++num;
console.log("After pre increment:", num, newNum);


/* ---------- Part F: Working with NaN ---------- */

// Problem 19
console.log(0 / 0);
console.log("hello" * 5);
console.log(NaN + 10);
console.log(Math.sqrt(-1));
console.log(typeof NaN);

// Problem 20
let value1 = 100;
let value2 = "test" / 2;
let value3 = 0 / 0;
let value4 = "123";

console.log(Number.isNaN(value1));
console.log(Number.isNaN(value2));
console.log(Number.isNaN(value3));
console.log(Number.isNaN(value4));


/* ---------- Part G: Real-World Applications ---------- */

// Problem 21
let math = 85;
let science = 92;
let english = 78;
let history = 88;
let computer = 95;

let average = (math + science + english + history + computer) / 5;
console.log("Your average grade is:", average);

// Problem 22
let currentYear = 2024;
let birthYear = 1997;
let currentAge = currentYear - birthYear;

console.log("In " + currentYear + ", you are " + currentAge + " years old");


/* ---------- Part H: Challenge Problems ---------- */

// Problem 23
let a1 = 10;
let b1 = 20;

a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;

console.log("After swap:", a1, b1);

// Problem 24
let numValue = 456;

let firstDigit = Math.floor(numValue / 100);
let secondDigit = Math.floor((numValue % 100) / 10);
let lastDigit = numValue % 10;

let digitSum = firstDigit + secondDigit + lastDigit;
console.log("Digit Sum:", digitSum);
