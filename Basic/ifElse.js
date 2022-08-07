//____Other Way_____Using if-else
//Love Calculator input teo persons name and generate a random number in percentage
prompt("Enter Your name");
prompt("Enter Your Partner's name");
var loveScore = Math.random()*100;
loveScore = Math.floor(loveScore);
if(loveScore>70){
    alert("Your Love Score is " + loveScore+ "% " + " You Love Each Other Very Much");
}
else{
    alert("your Score is " + loveScore + "% " + " Which is Average");
}
