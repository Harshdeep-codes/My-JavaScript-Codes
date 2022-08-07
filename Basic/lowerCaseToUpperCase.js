//getting input as name
var name = prompt("What's your name");

//taking the first letter from name
var firstChar = name.slice(0,1);

//changing the first letter to uppercase 
var upperCapFirst = firstChar.toUpperCase();

//for testing
console.log(name);
console.log(firstChar);
console.log(upperCapFirst);

//gettting rest of the letters from name
var restName = name.slice(1,name.length);

//testing
console.log(restName);

//Printing final output
console.log(upperCapFirst + restName);
