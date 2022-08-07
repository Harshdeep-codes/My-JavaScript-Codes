//_____________One Way___________
function getMilk(money) {
  var numBottles = Math.floor(money/1.5);
  console.log("You can Buy " + numBottles + " Bottles ");

  return money % 1.5;
}

var change = getMilk(4);
alert(change);

//_____________Other Way___________
function getMilk(money,costPerBottles) {
  console.log("Buy " + getBottles(money,costPerBottles) + " bottles of milk");
  return money % costPerBottles;
}

//function to calculate no. of bottles you can buy from amount of money you have
function getBottles(startMoney, costPerBottles){
  var numOfBottles = Math.floor(startMoney / costPerBottles)
  return numOfBottles;
}

//function to calculate the change you will get after buying those bottles
function getChange() {
  var change = startMoney % costPerBottles;
  return change;
}
console.log("Hello this is your " + getMilk(5,1.5) + "$ change ");
