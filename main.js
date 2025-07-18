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
