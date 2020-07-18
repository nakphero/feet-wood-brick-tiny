// feetToMile
function feetToMile(feet){
    var mile = feet /5280;
    return mile;
}
var result = feetToMile(13500);
console.log(result);

// woodCalculator
function woodCalculator(chair, table, khat){
    var chairCount = chair *1;
    var tableCount = table *3;
    var khatCount = khat*5;
    var totalWood = chairCount + tableCount+ khatCount;
    return totalWood;
}
var woodResult = woodCalculator (6,3,2);
console.log(woodResult);

// tinyFriend
    function tinyFriend(numbers){
        var tinyMama = numbers[0];
        for (var i=0; i<numbers.length; i++){
            var friend = numbers[i];
            if (friend.length<tinyMama.length){
                tinyMama = friend;
            }
        }
        return tinyMama;
    }
    var numbers =['kabir', 'shagir ali', 'sardar ahammed', 'labu'];
    var results= tinyFriend(numbers);
    console.log(results);

// brickCalculator
function brickCalculator(floorCount) {
    var brickNumber = 0;
    if (floorCount <= 10) {
        brickNumber = floorCount * (15 * 1000);
    } else if (floorCount > 10 && floorCount <= 20) {
        var firstTenFloor = 10 * (15 * 1000);
        var secondTenFloor = (floorCount - 10) * (12 * 1000);
        var thirdTenFloor = (floorCount-20)* (10*1000);
        brickNumber = firstTenFloor + secondTenFloor+thirdTenFloor;

    } else {
        var firstTenFloor = 10 * (15 * 1000);
        var secondTenFloor = (10) * (12 * 1000);
        var thirdTenFloor = (floorCount - 20) * (10 * 1000);
        brickNumber = firstTenFloor + secondTenFloor + thirdTenFloor;
    }
    return brickNumber;
}
console.log(brickCalculator(25));
