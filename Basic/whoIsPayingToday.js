var arr = ["navi", "Om", "hari", "harry"]
function whoIsPaying (names) {

    var numberOfPeople = names.length;
    var randomIndex = Math.floor(Math.random() * numberOfPeople);

    return names[randomIndex] + " is paying today";
}

alert(whoIsPaying(arr));
