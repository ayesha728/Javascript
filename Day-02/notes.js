// Valid identifiers
let userName = "Alice";
let _privateData = 123;
let $price = 99.99;
const MAX_USERS = 100;

// Invalid (DO NOT USE – examples only)
// let 1stPlace;
// let user name;
// let total--cost;
// let let;

let isLoggedIn = true;
let isAdmin = false;

let x = 10;
console.log(typeof x); // number
x = "Hello";
console.log(typeof x); // string
x = true;
console.log(typeof x); // boolean

let singleQuote = 'Hello';
let doubleQuote = "World";
let backticks = `Hello World`;

let escaped1 = 'It\'s a beautiful day';
let escaped2 = "She said, \"Hello!\"";

let language = "JavaScript";

console.log(language.length);               // 10
console.log(language[0]);                   // J
console.log(language[4]);                   // S
console.log(language[language.length - 1]); // t
console.log(language[100]);                 // undefined

let firstName = "John";
let lastName = "Doe";

let fullName1 = firstName + " " + lastName;
console.log(fullName1);

let score = 85;
let message1 = "Score is " + score;
console.log(message1);

let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

let age = 25;
let info = `${firstName} is ${age} years old`;
console.log(info);

let hour = 14;
let greeting = `Good ${hour < 12 ? "morning" : "afternoon"}, ${firstName}!`;
console.log(greeting);

let value1;
console.log(value1);        // undefined
console.log(typeof value1); // undefined

let value2 = null;
console.log(value2);        // null
console.log(typeof value2); // object (JS bug)

let user = { name: "Alice" };
console.log(user.age);      // undefined

console.log(10 > 5);   // true
console.log(5 < 2);    // false
console.log(5 >= 5);   // true
console.log(3 <= 4);   // true
console.log(5 != 5);   // false

console.log(5 == "5");     // true
console.log(5 === "5");    // false
console.log(true == 1);    // true
console.log(true === 1);   // false
console.log(null == undefined);  // true
console.log(null === undefined); // false

console.log('a' > 'A');           // true
console.log('b' < 'c');           // true
console.log('apple' < 'banana');  // true
console.log('Z' < 'a');           // true
console.log("10" < "2");          // true (string comparison)

console.log(Number("10") < Number("2")); // false (correct numeric comparison)


let str1 = "Hello";
let str2 = "HELLO";

console.log(str1.toLowerCase() === str2.toLowerCase()); // true


// User greeting
let userName1 = "Sarah";
let greetMsg = `Good morning, ${userName1}!`;
console.log(greetMsg);

// Age checker
let userAge = 16;
let minimumAge = 18;
let isAdult = userAge >= minimumAge;
console.log(isAdult); // false

// Email first character check
let email = "alice@example.com";
let firstChar = email[0];
let isValidEmail = firstChar >= 'a' && firstChar <= 'z';
console.log(isValidEmail);

// Product description
let productName = "Wireless Mouse";
let productPrice = 29.99;
let inStock = true;

let description = `Product: ${productName} | Price: $${productPrice} | In Stock: ${inStock}`;
console.log(description);

// Initials generator
let fName = "John";
let mName = "Robert";
let lName = "Smith";

let initials = `${fName[0]}.${mName[0]}.${lName[0]}.`;
console.log(initials);


let password = "Pass123";

let isLongEnough = password.length >= 6;
let startsWithUppercase = password[0] >= 'A' && password[0] <= 'Z';
let endsWithNumber =
  password[password.length - 1] >= '0' &&
  password[password.length - 1] <= '9';

console.log("Length OK:", isLongEnough);
console.log("Starts uppercase:", startsWithUppercase);
console.log("Ends with number:", endsWithNumber);
