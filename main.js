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

// Arrays: zero indexed list of items
// Creating Arrays
var cars = ["BMW", "Audi", "Mercedes"];
console.log(cars);

// Array function
var numbers = Array(1, 3, 6, 9);
console.log(numbers);

// Accessing Array Elements
console.log("First Element: ", cars[0]);

// Assigning a new value to an element
cars[0] = "Toyota";
console.log("Updated Cars: ", cars);

// Arrays Methods (functions) & properties (variables)
// 1. length: returns length of array
console.log("Length of Cars Array: ", cars.length);

// 2. push: adds an element to the end of an array
cars.push("Tesla");
console.log("Push Telsa to Cars: ", cars);

// 3. unshift adds an element to the beginning of an array
cars.unshift("Honda");
console.log("Unshift Honda to Cars: ", cars);

// 4. pop: removes the last element from an array
cars.pop();

// 5. shift: removes the first element from an array.
cars.shift();
console.log("pop & shift cars: ", cars);

// 6. sort: sorts elements inalphabetical or numeric order
cars.sort();
console.log("Sort Cars: ", cars);

// 7. reverse: reverses the order of elements
console.log("Reversed Cars: ", cars.reverse());

// 8. slice: returns a copied portion of an array
var newCars = cars.slice(1, 2); // index 1 to 2 non-inclusive of 2
console.log("New Cars: ", newCars);

// 9a. splice: add elements from an array
// splice(startIndex, deleteCount, item1, item2)
cars.splice(1, 0, "Ford", "Chevy");
console.log("Splice Add: ", cars);

// 9b. splice: remove elements from an array
cars.splice(3, 2);
console.log("Splice Remove: ", cars);

var numbers = [4, 9, 16, 25];
// 10. map: creates a new array with results from calling a function for every item within the current array
var squaredRootedNumbers = numbers.map(Math.sqrt);
console.log("Squared Numbers Array: ", squaredRootedNumbers);

// 2D Arrays: arrays within arrays
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log("Matrix: ", matrix);
// Accessing elements in 2D arrays
console.log("Element: ", matrix[0][2]); // 3

// Functions: blocks of code that perfrom a specific task
// Syntac: function functionName(parameters) { code to be executed };
// Parameters: A placeholder inside a function definition. It acts as a variable name for the value tha is passed to the function when it is called.
// return keyword can be used to return a value from the function

// Defining a function requires the function keyword and parameters
function sum(a, b) {
  var result = a + b;
  return result; // will be spit out of the function usage
}

// We can store the returned value from a function in a variable
// How can we use a function? Call it by name and invoke it with parenthesis with Argumments
// Arguments: The actual value or variable that contains a value being passed into the function. The value replaces the parameter usage within the function.
var total1 = sum(x, 20);
console.log("Total : ", total1);

var total2 = sum(27, 67);
console.log("Total 2: ", total2);

var finalValue = sum(total1, total2);
console.log("Final Value: ", finalValue);

// Loops & Control Statements
