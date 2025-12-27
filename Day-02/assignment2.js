// Problem 2: Fix Variable Names (camelCase)
let firstNameCorrect = "Alice";
let secondPlace = 2;
let userEmail = "alice@example.com";
let totalPrice = 250;
let userAge = 25;

// Problem 3: Naming Convention Practice
let emailAddress = "john@example.com";
let isLoggedIn = true;
const maxAttempts = 3;
let finalGrade = 85;
let productPrice = 99.99;

// Problem 4
let isRaining = false;
let isAdult = true;
let passwordMatches = false;

// Problem 5: Dynamic Typing
let x = 10;
console.log(typeof x); // number
x = "Hello";
console.log(typeof x); // string
x = true;
console.log(typeof x); // boolean

let language = "JavaScript";

// Problem 6
console.log(language[0]); // J
console.log(language[4]); // S
console.log(language[language.length - 1]); // t
console.log(language.length); // 10

// Problem 7: String Creation
let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello World`;

// Problem 8: String Concatenation
let fullLang = language + " is awesome";
console.log(fullLang);

// Problem 9
let message1 = "Hello World";
let message2 = 'It\'s a sunny day';
let message3 = "He said, \"Hello!\"";

let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;
let greeting = `Hello, ${fullName}!`;

let age = 25;
let info = `${firstName} is ${age} years old`;

// Problem 10
let name = "Alice";
let score = 95;
let message = `Student ${name} scored ${score} points.`;

let product = "Laptop";
let price = 999;
let quantity = 2;
let total = price * quantity;
let receipt = `Item: ${product}, Quantity: ${quantity}, Total: $${total}`;

let cityName = "Paris";
let temperature = 25;
let weather = `The temperature in ${cityName} is ${temperature} degrees.`;

let hourOfDay = 14;
let userName = "Bob";
let greetUser = `Good afternoon, ${userName}! It's ${hourOfDay}:00.`;
console.log(greetUser);

// Problem 11
let scoreValue;
console.log(scoreValue); // undefined

let winner = null;
console.log(winner); // null

let user = { name: "Alice" };
console.log(user.age); // undefined

// Problem 12
console.log(10 > 5);     // true
console.log(3 < 2);      // false
console.log(5 >= 5);     // true
console.log(8 <= 10);    // true
console.log(7 != 7);     // false
console.log(15 > 20);    // false

// Problem 13
console.log(18 >= 18);   // true
console.log(30 > 25);    // true
console.log(75 < 60);    // false

// Problem 14
console.log(5 == 5);       // true
console.log(5 === 5);      // true
console.log(5 == "5");     // true
console.log(5 === "5");    // false
console.log(true == 1);    // true
console.log(true === 1);   // false
console.log(0 == false);   // true
console.log(0 === false);  // false

// Problem 15
let ageCheck = 18;
console.log(ageCheck >= 18); // true

let temp = 30;
console.log(temp > 25); // true

let examScore = 75;
console.log(examScore < 60); // false

// Problem 16
console.log('a' > 'A');        // true
console.log('b' < 'c');        // true
console.log('apple' < 'banana'); // true
console.log('Z' < 'a');        // true
console.log("10" < "2");       // true (string comparison)

// Problem 17: Case-insensitive comparison
let strA = "Hello";
let strB = "HELLO";
console.log(strA.toLowerCase() === strB.toLowerCase()); // true

// Problem 18
let userGreetingName = "Sarah";
let hour = 9;
let greetingMsg = `Good morning, ${userGreetingName}!`;
console.log(greetingMsg);

// Problem 19
let userAge = 16;
let minimumAge = 18;
let isOldEnough = userAge >= minimumAge;
console.log(isOldEnough); // false

// Problem 20
let email = "alice@example.com";
let firstChar = email[0];
let isValid = firstChar >= 'a' && firstChar <= 'z';
console.log(isValid);

// Problem 21
let productName = "Wireless Mouse";
let productPrice = 29.99;
let inStock = true;
let description = `Product: ${productName} | Price: $${productPrice} | In Stock: ${inStock}`;
console.log(description);

// Problem 22
let fName = "John";
let mName = "Robert";
let lName = "Smith";
let initials = `${fName[0]}.${mName[0]}.${lName[0]}.`;
console.log(initials);

// Problem 23: Corrected Code
let firstPlace = "Gold";
let user_Name = "Alice";
let totalCost = 100;
let votingAge = 18;

if (votingAge === 18) {
  console.log("You can vote");
}

let goodMessage = "It's a beautiful day";

// Problem 24: Logic Fix
let userInput = "25";
if (Number(userInput) === 25) {
  console.log("Input is correct");
} else {
  console.log("Input is incorrect");
}

let password = "Pass123";

let isLongEnough = password.length >= 6;
let startsWithUppercase = password[0] >= 'A' && password[0] <= 'Z';
let endsWithNumber = password[password.length - 1] >= '0' &&
                     password[password.length - 1] <= '9';

console.log("Password is long enough:", isLongEnough);
console.log("Starts with uppercase:", startsWithUppercase);
console.log("Ends with number:", endsWithNumber);
