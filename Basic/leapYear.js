var year = prompt("Enter a Year");
if((year % 4===0 ) && (year % 400 === 0)){
    alert("It is a leap year");
}
else{
    alert("It is Not a leap Year");
}
