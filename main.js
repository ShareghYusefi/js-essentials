// Single line comment
/*
        Multi-line comment
        var is a keyword used to declare or initialize a variable in memory
        Variable is a container that stores data values
      */

// Primitive Data Types
// 1. String
var firstname = "John";
console.log("First Name: ", firstname);

// 2. Number
var age = 25;
console.log("Age: ", age);

// 3. Boolean (true or false)
var isAdult = true;
console.log("Adult: ", isAdult);

// Empty Data Types
// 1. Null - declared a variable but assigned it an empty value
var emptyVariable = null;
console.log("Null State: ", emptyVariable);

// 2. Undefined - declared a variable but have not assigned a value
var undefinedVariable = undefined;
console.log("Undefined State: ", undefinedVariable);

// Objects Data Types - collection of different data types
// Object using {}
var person = {
  firstname: "Jane",
  lastname: "Doe",
  age: 30,
  isAdult: true,
};
console.log(person);

// Array Object using [] - zero indexed list of items
var languages = ["Javascript", "Python", "Java"];
//index         [0,          ,1        ,2      ]
console.log(languages);

// Function Data Type - block of code that performs a specific task
var date = Date();
console.log("Date: ", date);

// Arithmetic Operators: +, -, *, /, %, ++, --
var x = 10;
var y = 15;
var a = 7;
var b = 3;

console.log("Addition: ", x + y);
console.log("Subtraction: ", x - y);
console.log("Multiplication: ", a * b);
console.log("Division; ", y / x);

// Modulus Operator (%): return the remainder of a division operation
console.log("Modulus: ", a % b); // remainder should be 1

// Increment Operator (++): increase the value of a variable by 1
console.log("Increment x: ", x++); // 10
console.log("After increment: ", x); // 11
console.log("Increment x again: ", ++x); // 12

// Decrement Operator (--): decreases the value of a variable by 1
console.log("Increment y: ", y--); // 15
console.log("After increment: ", y); // 14
console.log("Increment y again: ", --y); // 13

// Compount Assignment Operators: +=, -=, *=, /=, %=
var t = 9;
var p = 11;
var r = 3;
var g = 5;

console.log("+=: ", (t += p)); // t = t + b => 20
console.log("-=: ", p - t); // p = p - t => -9
console.log("*=: ", (r *= g)); // r = r * g => 15
console.log("/=: ", (r /= g)); // r = r / g => 3
console.log("%=: ", (g %= r)); // g = g % r => 2

// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Comparison operators are used to compare two values and return a boolean result (true or false)

// !: not operator
// !=: not equal to, flips the result of the comparison
// ==: equals in value but not in data type
// ===: equal value and data type

var num1 = 10; // number type
var num2 = "10"; // string type
var num3 = 20;
console.log("Equal to: ", num1 == num2); // true, value is equal
console.log("Strict Equal to: ", num1 === num2); // false, value and type are not equal
console.log("Not Equal to: ", num1 != num2); // false, value is equal
console.log("Strict Not Equal to: ", num1 !== num2); // true, data type are not equal
console.log("Greater than: ", num1 > num2); // false
console.log("Less than: ", num1 < num2); // false
console.log("Greater than or equal to: ", num1 >= num2); // true
console.log("Less than or equal to: ", num1 <= num2); // true

// Logical Operators: &&, ||, !
// &&: AND operator
// ||: OR operator
// !: Negation operator

console.log("&&: ", num1 == num2 && num1 === num2); // false, one of the conditions return false

// When using || operator, if first condition is true, the second condition is not checked
console.log("||: ", num3 > num1 || num3 < num2);

// Left hand comparison is true, right hand is false, but flipped to true.
console.log("&&: ", num1 == num2 && !(num1 === num2)); // true

// String Manipulation
var firstname = "John";
var lastname = "Doe";

// string concatenation - joining of two or moer strings
var fullname = firstname + " " + lastname;
console.log("Full Name: ", fullname);

// using backticks (template literals)
var fullname2 = `${firstname} ${lastname}`;
console.log("Full Name 2: ", fullname2);

// using .concat method
var fullname3 = firstname.concat(" ", lastname);
console.log("Full Name 3: ", fullname3);

// String Methods (function) & properties (variables)
// 1. length: returns the character count/length of the string
// strings are zero indexed like arrays
console.log("Firstname length: ", firstname.length);

// 2. toUpperCase - converts a string to uppercase
console.log("Uppercase: ", firstname.toUpperCase());

// 3. indexOf - returns the index of a character in a string
console.log("IndexOf n: ", firstname.indexOf("n")); // 3

// 4. charAt - return the character at a specific index
console.log("charAt 3", firstname.charAt(3)); // n
