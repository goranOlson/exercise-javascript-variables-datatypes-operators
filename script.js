//console.log('Hello World!');

/* 1 */
let age = 54;
 console.log(`This is my age ${age}`);


/* 2 */
let firstName = "Happy";
var lastName = "Boy";
const sex = "male";
 console.log(`${firstName} ${lastName} (${sex})`);
/*
- let is a variable that only exists in its scope.
- var is a variable that exists in the global scope.
- const is a variable that is assigned once and can not be changed.
*/


/* 3 */
let actMonthName = "January";
var actMonth = 1;
const monthPerYear = 12;

 console.log('Month name: ' + actMonthName);
 console.log("Month number:" + actMonth);
 console.log(`Number of month per year: ${monthPerYear}`);


/* 4 */
const name = "Happy";
console.log(name);
// name = "Test";
// console.log(name);

/*
    It is not possible to reassign a constant. It results in error. 
    We need to use let (or var) to be allowed to change the value.
*/


/* 5 */
/*
    Boolean variable often used to mark a certain status, for example 'isValid'
    witch has been set before and can easily be used in a if statement.
*/


/* 6 */
/*
    One should use const. It will be write protected so that no one can overwrite it by mistake.
*/


/* 7 */

let number1 = 8;
let number2 = 5;
let result = number1 + number2;
console.log(result);

/* 8. */
let result1 = number1 - number2;
let result2 = number1 * number2;
let result3 = number1 / number2;
console.log(`result1: ${result1}, result2: ${result2}, result3: ${result3} `);


/* 9 */
let a = 5;
console.log(a);  // 5
a += 5;
console.log(a);  // 10


/* 10.  */
//let a = 10;  // a is already declared above!
a = 10;
a = a - 4;
a = 7;
a = a + 2;
console.log(a);  // 9


/* 11.  */
/*
    The result is 9. At line 3 there is an assignment to 7 and after that there is a addition with 2.
*/