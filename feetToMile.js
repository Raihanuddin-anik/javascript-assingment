// 1 feetToMile

function feetToMile(feet){

    var mile = feet /  5280;
    return mile;
}

 var result = feetToMile(10);
 console.log(result);

// 2 Woodcalculator
 
function WoodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedcount = bed * 5;
    var totalWood = chairCount + tableCount + bedcount;
    return totalWood;
}
var result2 = WoodCalculator(1, 3, 5);
console.log(result2);

// brickCalculator
// tinyFriend
function tinyFriend(names){
    var lagest = names[0];
    for ( var i = 0; i < names.length; i++){
        var currentname = names[i];
        if(currentname > largest){
            lagest = currentname;
        }
    }
    return lagest;
}
