let num = 100;
function getDividableNumbers(maxNumber) {
    let array=[];    
    for (let i= 1; i < maxNumber; i++) {
        let divisionWithSeven = i%7;
        let divisionWithThree = i%3;
        if(divisionWithSeven===0 && divisionWithThree===0) {
            array.push(i);
        }
    }
return array;
}
let divisionArray = getDividableNumbers(num)
console.log(divisionArray)