var arr = [];
var i = 1;
function fizzBuzz() {
    
    if(i % 3 === 0){
        arr.push("Fizz");
    }
    else if(i % 5 === 0){
        arr.push("Buzz");
    }
    arr.push(i);
    i++;
    console.log(arr);
}

fizzBuzz();
