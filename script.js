//console.log('Hello World!');

/* 1. Declare a variable age and assign your age to it. Write it out in the console 
   together with a description of the age. Like, "this is my age...". */

let age = 54;
// console.log(`This is my age ${age}`);


/* 2. Declare three variables using the three different keywords that we have learned.
   Write them all out in the console. What was the different between these keywords? */

let firstName = "Happy";
var lastName = "Boy";
const sex = "male";
// console.log(`${firstName} ${lastName} (${sex})`);
/*
    let is a variable that only exists in its scope.
    var is a variable that exists in the global scope.
    const is a variable that is assigned once and can not be changed.
*/


/* 3. Declare three different variables, one of each data type. Assign them values and log
   them to the console in three different logs. */
let actMonthName = "January";
var actMonth = 1;
// const monthPerYear = 12;

//  console.log('Month name: ' + actMonthName);
//  console.log("Month number:" + actMonth);
//  console.log(`Number of month per year: ${monthPerYear}`);


/* 4. Create a const variable called name and assign a value to it.
   Log it to the console. On a new line, try to reassign the value. 
   Log that to the console. Does it work? If it doesn't, think about why that is. 
   How would you correct it? */

const name = "Happy";
 console.log(name);
name = "Test";
 console.log(name);

/* It is not possible to reassign a constant. It results in error.  */


/* 5. Think about one case when we would like to use a boolean value.
   Discuss it with another person. */

/* Boolean variable often used to mark a certain status, for example 'isValid'
 witch has been set before and can easily be used in a if statement. */


 /* 6. If we create a variable that we know is not going to change its value during
    the duration of our program, should we declare it using let or const and why? */

/* One should use const. It will be write protected so that no one can overwrite it by mistake. */
